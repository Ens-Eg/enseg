"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "./MenuItem"; 
import { menus } from "../../../libs/menus";

import logo from "../../../public/images/logo.png";

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(true);

  // Toggle navbar visibility (mobile view)
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  // Handle sticky navbar logic
  const handleScroll = () => {
    const elementId = document.getElementById("navbar");
    if (window.scrollY > 170) {
      elementId?.classList.add("is-sticky");
    } else {
      elementId?.classList.remove("is-sticky");
    }
  };

  // Handle opening of Tawk.to chat
  const handleOpenChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle(); // This opens or closes the chat window
    }
  };

  // Listen for scroll events for sticky navbar
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dynamically load Tawk.to script
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/672b0e2b4304e3196addc4ba/1ic02umcl"; // Replace with your actual Tawk.to script URL
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    // Clean up the script tag when component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const classOne = menu ? "collapse navbar-collapse" : "collapse navbar-collapse show";
  const classTwo = menu ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area fixed-top">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <Image src={logo} alt="logo" width={170} height={42} />
            </Link>

            {/* Toggle navigation button */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                {menus.map((menuItem) => (
                  <MenuItem key={menuItem.label} {...menuItem} />
                ))}
              </ul>

              <div className="others-options">
                {/* Link to open Tawk.to chat */}
                <Link href="#" onClick={handleOpenChat} className="default-btn">
                  تحدث معنا <i className="bx bx-chat"></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
