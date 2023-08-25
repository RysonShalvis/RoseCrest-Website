import logo from "../media/filler-logo.png";
import "../scss/_header.scss";
import { useState } from "react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState("");

  const handleOnClick = () => setToggleMenu(toggleMenu ? "" : "active");

  return (
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
          <a>Home</a>
          <a>About us</a>
          <a>Services</a>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
