import "../scss/_split-image-section.scss";
import PropTypes from "prop-types";

const SplitImageSection = ({ imageRight, image, title, children, customTitle }) => {
  return (
    <div className={`split-image-section ${imageRight ? "image-right" : ""}`}>
      <div className="image-container">
        <img src={image} alt="random" />
      </div>
      <div className="text-container">
        {customTitle}
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

SplitImageSection.propTypes = {
  imageRight: PropTypes.bool,
  image: PropTypes.string,
  title: PropTypes.string,
  customTitle: PropTypes.node,
  children: PropTypes.node,
};

export default SplitImageSection;
