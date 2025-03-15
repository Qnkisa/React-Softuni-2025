import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import websiteLogo from "../assets/website-logo.png"

export default function WebsiteLogo(){
    return (
        <div className="website-logo">
            <Link to="/">
            <img src={websiteLogo} alt="" />
            <p>BullionHaven</p>
            </Link>
        </div>
    );
}