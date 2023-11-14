import "../scss/_footer.scss";
import Banner from "./Banner";
import Button from "./Button";
import logo from "../media/rosecrest-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <Banner>
        <div className="banner-container">
          <div className="banner-text-section">
            <h2>Schedule A Visit</h2>
            <p>
              We invite you to experience the warmth and home-like atmosphere of
              Rosecrest Assisted Living firsthand. Schedule a tour today and see
              for yourself how we can provide you or your loved one with the
              perfect balance of assistance and independence in a loving and
              supportive environment. At Rosecrest Assisted Living, we&apos;re
              not just a place to live; we&apos;re a place to thrive. Contact us
              today to learn more about how we can be your home away from home.
            </p>
            <div className="button-container">
              <Button path="/Contact" buttonColor="primary-color">
                Request an appointment
              </Button>
            </div>
          </div>
          <div className="image-container">
            <img src={logo} />
            <p>Rosecrest Assisted Living</p>
            <p>(435)673-7398</p>
            <p>48 W 700 S St. George, UT</p>
          </div>
        </div>
      </Banner>
    </div>
  );
};

export default Footer;
