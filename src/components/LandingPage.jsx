// import backgroundVideo from "../media/filler-landing-video.mp4";
import "../scss/_landing-page.scss";
import logo from "../media/filler-logo.png";
import Button from "./Button";
import image from "../media/about-us-filler-image.jpeg";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-video">
        <img src={image} />
      </div>

      <div className="main-content">
        <div className="logo-container">
          <img src={logo} />
        </div>
        <h1>&quot;It feels like Home&quot;</h1>
        <h2>Accepts Medicaid New Waivers</h2>
        <Button path="/services">Learn more</Button>
      </div>
    </div>
  );
};

export default LandingPage;
