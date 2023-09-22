import "../scss/_landing-page.scss";
import Home from "./Home";
import Banner from "./Banner";
import SplitImageSection from "./SplitImageSection";
import splitImageOne from "../media/section-one-image.webp";
import splitImageTwo from "../media/section-two-image.webp";
import splitImageLeft from "../media/section-three-left-image.webp";
import splitImageBottom from "../media/section-three-bottom-image.webp";
import Button from "./Button";

const LandingPage = () => {
  const sectionOneTitle =
    "We've Made our Assisted Living Center in Saint George, UT Feel Like Home";
  const sectionTwoTitle = "Put Your Mind at Ease";

  return (
    <div className="landing-page">
      <Home />
      <Banner>
        <p>
          We accept Medicaid waivers. We work with Medicaid and VA insurance
          providers.
        </p>
        <Button buttonColor="secondary-color">Learn More</Button>
      </Banner>
      <SplitImageSection title={sectionOneTitle} image={splitImageOne}>
        <p>
          Rosecrest Assisted Living is a Level 1 residential home providing a
          very comfortable and relaxing environment. We take pride in the fact
          that the residents (our family) feel comfortable and happy living
          here. Some residents have lived here for over 10 years. We have home
          made food made by a real house mom. Even considering all the comforts
          like home, Rosecrest is one of the most affordable assisted living
          homes in the state.
        </p>
      </SplitImageSection>
      <div className="gradient-banner">
        <div className="text-container">
          <p>&quot;I feel comfortable here.&quot;</p>
          <p>&quot;I love the homemade food here.&quot;</p>
          <p>&quot;It feels like home.&quot;</p>
        </div>
        <div className="gradient-one"></div>
        <div className="gradient-two"></div>
      </div>
      <SplitImageSection
        title={sectionTwoTitle}
        imageRight
        image={splitImageTwo}
      >
        <p>
          Deciding to move your mother or father to an assisted living facility
          can be a hard decision. You have likely been stressed about it for
          months. Let us take that burden off your mind. You will know you did
          the right thing for your mom or dad knowing they feel peace and
          comfort where they are living.
        </p>
        <p>Schedule a visit to see if we are a good fit for your family.</p>
        <div className="button-container">
          <Button>Schedule Now</Button>
        </div>
      </SplitImageSection>
      <div className="split-section-variant">
        <div className="image-container">
          <img src={splitImageLeft} alt="" />
        </div>
        <div className="text-container">
          <h2>Welcome to Our Home-Like Assisted Living Community</h2>
          <p>
            At Rosecrest Assisted Living, we understand that home is where the
            heart is, and we&apos;re dedicated to providing a warm and welcoming
            environment that feels just like home. Our mission is to empower our
            residents to live their best lives, offering the perfect blend of
            assistance and independence in a setting that promotes comfort,
            security, and a sense of belonging.
          </p>
          <img src={splitImageBottom} alt="" />
        </div>
      </div>
      <Banner><p>Why Choose Our Assisted Living Home?</p></Banner>
    </div>
  );
};

export default LandingPage;
