import logo from "../media/filler-logo.png";
import "../scss/_header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState("");

  const handleOnClick = () => setToggleMenu(toggleMenu ? "" : "active");

  return (
    <div className="header-container">
      <div className="header">
        <div className="logo-container">
          <img src={logo} />
        </div>

        <div className="nav-container">
          <div onClick={handleOnClick} className="hamburger-menu">
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
