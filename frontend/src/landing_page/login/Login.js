import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) => toast.error(err, { position: "top-center" });
  const handleSuccess = (msg) => toast.success(msg, { position: "top-center" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://zerodha-backend-ajq9.onrender.com/login",
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3000";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError("Something went wrong. Try again.");
      console.log(error);
    }
    setLoading(false);
    setInputValue({ email: "", password: "" });
  };

  return (
    <div className="l-page">
      {/* LEFT */}
      <div className="l-left">
        <img
          src="https://zerodha.com/static/images/logo.svg"
          alt="Zerodha"
          className="l-logo"
        />
        <h1>India's most trusted investment platform</h1>
        <ul>
          <li>1.5 crore+ registered users</li>
          <li>Daily turnover of ₹15,000+ crore</li>
          <li>Free equity investments</li>
          <li>Award winning platform</li>
        </ul>
        <p className="l-trust">Start investing in minutes</p>
      </div>

      {/* RIGHT */}
      <div className="l-right">
        <div className="l-card">
          <h2>Welcome back</h2>
          <p className="l-sub">
            Don't have an account?{" "}
            <Link to="/signup">Sign up for free</Link>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="l-field">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="yourname@email.com"
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="l-field">
              <label>Password</label>
              <div className="l-password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  required
                />
                <span
                  className="l-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>

            <div className="l-forgot">
              <a href="/">Forgot password?</a>
            </div>

            <button type="submit" className="l-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login to Zerodha"}
            </button>
          </form>

          <p className="l-terms">
            By continuing, you agree to Zerodha's{" "}
            <a href="/">Terms & Conditions</a> and{" "}
            <a href="/">Privacy Policy</a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;