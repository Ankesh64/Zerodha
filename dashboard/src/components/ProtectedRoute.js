import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [cookies] = useCookies(["token"]);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      // // no cookie at all → redirect immediately
      // const localToken = localStorage.getItem("token");
      // if (!cookies.token && !localToken) {
      //     window.location.href = "https://zerodha-frontend-theta-six.vercel.app";
      //     return;
      // }
      // check if token is in URL params

      const urlParams = new URLSearchParams(window.location.search);
      const urlToken = urlParams.get("token");

      if (urlToken) {
        // save to localStorage and clean URL
        localStorage.setItem("token", urlToken);
        window.history.replaceState({}, document.title, "/");
      }

      const localToken = localStorage.getItem("token");

      if (!localToken) {
        window.location.href = "https://zerodha-frontend-theta-six.vercel.app";
        return;
      }

      try {
        // verify token with backend
        const { data } = await axios.post(
          "https://zerodha-backend-ajq9.onrender.com/",
          {},
          { withCredentials: true },
        );

        if (data.status) {
          setIsVerified(true); // token valid → show dashboard
        } else {
          window.location.href =
            "https://zerodha-frontend-theta-six.vercel.app"; // token invalid → redirect to landing page
        }
      } catch (err) {
        window.location.href = "https://zerodha-frontend-theta-six.vercel.app";
      }
      setLoading(false);
    };

    verifyToken();
  }, [cookies]);

  // show loading while checking token
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // token valid → render the actual page
  return isVerified ? children : null;
};

export default ProtectedRoute;
