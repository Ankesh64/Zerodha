const User = require("../model/UserModel"); // note: YOUR folder is 'model' not 'Models'
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

// ---- SIGNUP ----
module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;

    // Check if user already registered with this email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    // Create new user (password gets hashed automatically via UserModel)
    const user = await User.create({ email, password, username, createdAt });

    // Generate JWT token using the new user's MongoDB _id
    const token = createSecretToken(user._id);

    // Send token as a cookie to the browser
    res.cookie("token", token, {
      httpOnly: false,
    secure: true,
    sameSite: "none",
    });

    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      token,
      user,
    });
  } catch (error) {
    console.error(error);
  }
};

// ---- LOGIN ----
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate fields aren't empty
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }

    // Compare entered password with hashed password in DB
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }

    // Generate token and send cookie
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: false,
    secure: true,
    sameSite: "none",
    });

    res.status(201).json({
      message: "User logged in successfully",
      success: true,
      token,
    });
  } catch (error) {
    console.error(error);
  }
};