import logo from "../media/rosecrest-logo.png";
import "../scss/_header.scss";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState("");
  const wrapperRef = useRef(null);

  const linkOnClick = () => setToggleMenu("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setToggleMenu("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleOnClick = () => setToggleMenu(toggleMenu ? "" : "active");

  return (
    <div className="header-container">
      <div className="header">
        <Link to="/">
          <div className="logo-container">
            <img src={logo} />
          </div>
        </Link>

        <div ref={wrapperRef} className="nav-container">
          <div
            onClick={handleOnClick}
            className={`hamburger-menu ${toggleMenu}`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`link-container ${toggleMenu}`}>
            <Link onClick={linkOnClick} to="/">Home</Link>
            <Link onClick={linkOnClick} to="/About">About us</Link>
            <Link onClick={linkOnClick} to="/Services">Services</Link>
            <Link onClick={linkOnClick} to="/Contact">Contact</Link>
            <Link onClick={linkOnClick} to="/Apply">Apply Now</Link>
            <Link onClick={linkOnClick} to="/Gallery">Gallery</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
