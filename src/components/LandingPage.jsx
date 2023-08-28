import backgroundVideo from "../media/filler-landing-video.mp4";
import "../scss/_landing-page.scss";
import logo from "../media/filler-logo.png";
import Button from "./Button";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-video">
        <video autoPlay muted loop src={backgroundVideo}></video>
      </div>

      <div className="main-content">
        <div className="logo-container">
          <img src={logo} />
        </div>
        <h1>Filler header words</h1>
        <h2>Filler subheader words with extra words</h2>
        <Button path="/contact">Contact Now</Button>
      </div>
    </div>
  );
};

export default LandingPage;
