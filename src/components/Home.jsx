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
        <h1>Rosecrest Assisted Living</h1>
        <h2>&quot;It feels like Home&quot;</h2>
        <h2>The most affordable assisted living in Saint George</h2>
        <Button path="/services">Learn more</Button>
      </div>
      <Banner className="home-banner">
        <p>Find out if you qualify for the Waiver</p>
      </Banner>
    </div>
  );
};

export default Home;
