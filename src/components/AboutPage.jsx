import "../scss/_about-page.scss";
import NavHeading from "./NavHeading";
import headerImage from "../media/facility images/IMG0001.jpg";
import SplitImageSection from "./SplitImageSection";
import imageOne from "../media/about-one-image.webp";
import imageTwo from "../media/facility images/IMG0007.jpg";
import imageThree from "../media/about-three-image.webp";
import imageFour from "../media/about-four-image.webp";
import imageFive from "../media/about-five-image.webp";
import logo from "../media/rosecrest-logo.png";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-page">
      <NavHeading
        image={headerImage}
        title="Welcome to Our Home-Like Assisted Living Community"
      />
      <SplitImageSection image={imageOne} title="At Rosecrest Assisted Living">
        <p>
          We are Level 1 Care, our residents enjoy a high level of independence,
          where they are self-reliant and do not require assistance with the
          essential activities of daily living. These activities include
          dressing, eating, bathing, moving, and using the restroom. We take
          pride in providing a supportive and comfortable environment that
          fosters independence and enables our residents to maintain their
          freedom and dignity while enjoying the benefits of community living.
          Our focus is on creating a safe and engaging atmosphere where
          residents can thrive and continue to lead fulfilling lives on their
          terms. We believe that every resident deserves a place where they can
          truly call home, while receiving the support they need to lead a
          fulfilling life. Our home-feeling independent with some assistance
          assisted living community is designed to provide you or your loved one
          with the perfect blend of independence, comfort, and assistance.
        </p>
      </SplitImageSection>
      <SplitImageSection
        image={imageTwo}
        imageRight
        title="Experience the comfort of home"
      >
        <p>
          Our community is more than just a place to stay; it&apos;s a place to
          thrive. We understand that transitioning to assisted living can be a
          significant step, and we&apos;re here to ensure that it&apos;s a
          positive one. With warm and welcoming surroundings, our residents
          quickly feel like they&apos;re a part of a big, caring family.
        </p>
      </SplitImageSection>
      <SplitImageSection image={imageThree} title="Safety and Peace of Mind">
        <p>
          Your safety and well-being are our top priorities. Our caring staff is
          trained to respond promptly to any emergency, providing you and your
          family with peace of mind.
        </p>
      </SplitImageSection>
      <SplitImageSection image={imageFour} imageRight title="Join Our Family">
        <p>
          At Rosecrest Assisted Living, we invite you to experience the perfect
          blend of independence and assistance in a home-like environment. Come
          and see why our community is the right place to call home, where you
          can live life to the fullest with the support you deserve.
        </p>
      </SplitImageSection>
      <SplitImageSection image={imageFive} title="About Us">
        <p>
          Rosecrest Assisted Living (Manor), has been established for over 30
          years. It has been a place that hundreds have called home. The new
          owners, Ron and Maryann, have brought a new excitement and a desire to
          provide the most comfortable living conditions at an affordable price.
        </p>
      </SplitImageSection>
      <Banner className="about-banner">
        <img src={logo} />
        <p>Schedule a tour today and discover your new home.</p>
        <Link to="/Contact">
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="20.1 20.6 159.1 159"
            viewBox="20.1 20.6 159.1 159"
            height="200"
            width="200"
            xmlns="http://www.w3.org/2000/svg"
            data-type="shape"
            role="presentation"
            aria-hidden="true"
            aria-label=""
          >
            <g>
              <path d="M179.2 20.6l-39.8 79.5 39.8 79.5-159.1-79.5 159.1-79.5z"></path>
            </g>
          </svg>
        </Link>
      </Banner>
    </div>
  );
};

export default AboutPage;
