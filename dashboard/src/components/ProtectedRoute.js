import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
    const [cookies] = useCookies(["token"]);
    const [isVerified, setIsVerified] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyToken = async () => {
            // no cookie at all → redirect immediately
            if (!cookies.token) {
                window.location.href = "http://localhost:3001";
                return;
            }

            try {
                // verify token with backend
                const { data } = await axios.post(
                    "http://localhost:3002/",
                    {},
                    { withCredentials: true }
                );

                if (data.status) {
                    setIsVerified(true); // token valid → show dashboard
                } else {
                    window.location.href = "http://localhost:3001";
                }
            } catch (err) {
                window.location.href = "http://localhost:3001";
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