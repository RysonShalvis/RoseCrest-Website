// import backgroundVideo from "../media/filler-landing-video.mp4";
import "../scss/_home.scss";
import logo from "../media/rosecrest-logo.png";
import Button from "./Button";
import image from "../media/st-george-image.jpeg";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="home">
      <div className="background-video">
        <img src={image} />
      </div>

      <div className="main-content">
        <div className="logo-container">
          <img src={logo} />
        </div>
        <h1>Rosecrest Assisted & Independent Living</h1>
        <h2>
          Because we are small, you receive true personalized care in an actual
          Home
        </h2>
        <h2>Private Rooms starting at $2,000</h2>
        <Button path="/services">Learn more</Button>
      </div>
      <Banner className="home-banner">
        <p>
          Accept&apos;s Medicaid&apos;s &quot;New Choice&apos;s Waiver
          Program&quot;. Contact us to see if you qualify for the waiver
        </p>
        <Button buttonColor="secondary-color" path="/Contact">
          Contact Us
        </Button>
      </Banner>
    </div>
  );
};

export default Home;
