import "../scss/_banner.scss";
import PropTypes from "prop-types";


const Banner = ({children}) => {
  return (
    <div className="banner">
      {children}
    </div>
  );
};

Banner.propTypes = {
  children: PropTypes.element
}

export default Banner;
