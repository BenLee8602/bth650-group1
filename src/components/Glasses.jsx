import React from "react";
import { Outlet } from "react-router-dom";
import "../style/Glasses.css";

function Glasses() {
    return <div className="glasses">
        <div className="navbar">
            navbar
        </div>
        <Outlet />
    </div>
}

export default Glasses;
