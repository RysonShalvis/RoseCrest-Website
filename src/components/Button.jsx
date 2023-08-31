import PropTypes from "prop-types";
import "../scss/_button.scss";
import { Link } from "react-router-dom";

const Button = ({ children, path, isSubmit, value }) => {

  if (isSubmit) {
    return (
      <input className="button submit" type="submit" value={value} />
    )
  }


  return (
    <Link to={path} className="button">
      {children}
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  path: PropTypes.string,
  value: PropTypes.string,
  isSubmit: PropTypes.bool,
};

export default Button;
