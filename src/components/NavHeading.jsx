import "../scss/_nav-heading.scss";
import PropTypes from "prop-types";

const NavHeading = ({ image, title, className = "", custom }) => {
  return (
    <div className={`nav-heading ${className}`}>
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
  custom: PropTypes.node
};

export default NavHeading;
