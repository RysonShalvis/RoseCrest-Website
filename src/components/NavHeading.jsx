import "../scss/_nav-heading.scss";
import PropTypes from "prop-types";

const NavHeading = ({ image, title }) => {
  return (
    <div className="nav-heading">
      <h1>{title}</h1>
      <img src={image} />
    </div>
  );
};

NavHeading.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

export default NavHeading;
