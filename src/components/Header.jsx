import logo from "../media/rosecrest-logo.png";
import "../scss/_header.scss";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState("");
  const wrapperRef = useRef(null);

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
            <Link to="/">Home</Link>
            <Link to="/About">About us</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Apply">Apply Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
