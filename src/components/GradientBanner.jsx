import PropTypes from "prop-types";
import "../scss/_gradient-banner.scss";

const GradientBanner = ({ textOne, textTwo, textThree, equalHeight }) => {
  return (
    <div className={`gradient-banner ${equalHeight ? "equal-height" : ""}`}>
      <div className="text-container">
        <p>{textOne}</p>
        <p>{textTwo}</p>
        <p>{textThree}</p>
      </div>
      <div className="gradient-one">
        <p>{textTwo}</p>
      </div>
      <div className="gradient-two">
        <p>{textThree}</p>
      </div>
    </div>
  );
};

GradientBanner.propTypes = {
  textOne: PropTypes.string,
  textTwo: PropTypes.string,
  textThree: PropTypes.string,
  equalHeight: PropTypes.bool
};

export default GradientBanner;
