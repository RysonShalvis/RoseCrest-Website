import "../scss/_banner.scss";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="banner">
      <div>
        <p>We accept Medicaid waivers</p>
        <p>We work with Medicaid and VA insurance providers</p>
      </div>
      <div className="button-container">
        <Button buttonColor="primary-color">Contact Now</Button>
      </div>
    </div>
  );
};

export default Banner;
