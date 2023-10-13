import "../scss/_banner.scss";
import PropTypes from "prop-types";

const Banner = ({ children, className }) => {
  return <div className={`banner ${className}`}>{children}</div>;
};

Banner.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Banner;
