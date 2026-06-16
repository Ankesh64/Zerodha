import React from 'react';
import { useCookies } from "react-cookie";

import Menu from "./Menu";

const TopBar = () => {
    const [cookies, removeCookie] = useCookies(['token']);

    const handleLogout = () => {
        removeCookie("token");
        window.location.href = "http://localhost:3001";
    };


    return (
        <div className="topbar-container">
            <div className="indices-container">
                <div className="nifty">
                    <p className="index"> NIFTY 50 </p>
                    <p className="index-points"> {100.2} </p>
                    <p className="percent"></p>
                </div>
                <div className="sensex">
                    <p className="index"> SENSEX </p>
                    <p className="index-points"> {100.2} </p>
                    <p className="percent"></p>
                </div>
            </div>

            <Menu />

            <button onClick={handleLogout} className="logout-btn">
                Logout
            </button>
        </div>
    );
};

export default TopBar;