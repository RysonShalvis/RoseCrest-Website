import PropTypes from "prop-types";
import "../scss/_button.scss";
import { Link } from "react-router-dom";

const Button = ({ children, path, isSubmit, value, buttonColor }) => {

  if (isSubmit) {
    return <input className={`button submit ${buttonColor}`} type="submit" value={value} />;
  }

  return (
    <Link to={path} className={`button ${buttonColor}`}>
      {children}
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  path: PropTypes.string,
  value: PropTypes.string,
  isSubmit: PropTypes.bool,
  buttonColor: PropTypes.oneOf(["primary-color", "secondary-color", "tertiary-color"])
};

export default Button;
