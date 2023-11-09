import "../scss/_nav-heading.scss";
import PropTypes from "prop-types";

const NavHeading = ({ image, title, className = "", custom, darken }) => {
  return (
    <div className={`nav-heading ${className} ${darken ? "darken" : ""}`}>
      {custom ?
      custom :
      <h1>{title}</h1>
      }
      <img src={image} />
    </div>
  );
};

NavHeading.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  custom: PropTypes.node,
  darken: PropTypes.bool
};

export default NavHeading;
