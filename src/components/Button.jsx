import PropTypes from "prop-types";
import "../scss/_button.scss";
import { Link } from "react-router-dom";

const Button = ({ children, path }) => {
  return (
    <Link to={path} className="button">
      {children}
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  path: PropTypes.string,
};

export default Button;
