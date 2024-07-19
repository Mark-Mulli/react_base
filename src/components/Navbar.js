import React from "react"
import reactLogo from "./images/reactLogo.png"

export default function Navbar() {
    return (
        <nav className = "navbar">
            <div className = "nav-left">
                <img src = {reactLogo} alt = "React Logo" height = "29px" width = "29px"></img>
                <h1 className = "head1">ReactFacts</h1>
            </div>
            <div className="nav-right">
                <h3>React Course - Project 1</h3>
            </div>
        </nav>
    );
}