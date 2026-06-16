const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  // Read the token from the browser cookie
  const token = req.cookies.token;

  // If no token → user is not logged in
  if (!token) {
    return res.json({ status: false });
  }

  // Verify the token is valid and not expired
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      // Find user by id stored inside the token
      const user = await User.findById(data.id);
      if (user) {
        return res.json({ status: true, user: user.username });
      } else {
        return res.json({ status: false });
      }
    }
  });
};