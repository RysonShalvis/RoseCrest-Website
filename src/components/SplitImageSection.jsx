import "../scss/_split-image-section.scss";
import PropTypes from "prop-types";

const SplitImageSection = ({ imageRight, image }) => {
  return (
    <div className={`split-image-section ${imageRight ? "image-right" : ""}`}>
      <div className="image-container">
        <img src={image} alt="random" />
      </div>
      <div className="text-container">
        <h2>
          We&apos;ve made our assisted living center in Saint George, UT feel
          like home
        </h2>
        <p>
          Rosecrest Assisted Living is a Level 1 residential home providing a
          very comfortable and relaxing environment. We take pride in the fact
          that the residents (our family) feel comfortable and happy living
          here. Some residents have lived here for over 10 years. We have home
          made food made by a real house mom. Even considering all the comforts
          like home, Rosecrest is one of the most affordable assisted living
          homes in the state.
        </p>
        <p>
          Located in the beautiful, picturesque setting of St. George, Utah.
        </p>
        <p>Here are a few quotes from our current residents.</p>
        <p>“It feels like home”</p>
        <p>“I love the homemade food here”</p>
        <p>“I feel comfortable here”</p>
      </div>
    </div>
  );
};

SplitImageSection.propTypes = {
  imageRight: PropTypes.bool,
  image: PropTypes.string,
};

export default SplitImageSection;
