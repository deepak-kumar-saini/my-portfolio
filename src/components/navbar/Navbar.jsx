import React, { useState } from "react";
import "./navbar.css"

const Menu = () => {

    const [toggle,setToggle]=useState(true);
    function toggleClass(){
        setToggle(!toggle);
    }

    return (
        <>
            <nav>
                <h3 className="logo"><a href="#home">Deepak.dev</a></h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>
                        <svg onClick={toggleClass} className="mobile-menu" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" >
                            <path d="M4 6l16 0"></path>
                            <path d="M4 12l16 0"></path>
                            <path d="M4 18l16 0"></path>
                        </svg>
                    </li>
                </ul>
            </nav>

            {/* Mobile Navbar */}
            
            <div className={ toggle ? "mobile-nav closed-menu" : "mobile-nav open-menu"}>
                <span onClick={toggleClass}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"  strokeLinejoin="round">
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                    </svg>
                </span>
                <ul>
                    <li><a onClick={toggleClass} href="#home">Home</a></li>
                    <li><a onClick={toggleClass} href="#about">About</a></li>
                    <li><a onClick={toggleClass} href="#projects">Projects</a></li>
                    <li><a onClick={toggleClass} href="#contact">Contact</a></li>
                </ul>
            </div>
        </>
    )
}

export default Menu;