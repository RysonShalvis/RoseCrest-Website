import "../scss/_about-page.scss";
import NavHeading from "./NavHeading";
import image from "../media/about-us-filler-image.jpeg";

const AboutPage = () => {
  return (
    <div className="about-page">
      <NavHeading image={image} title="About us..." />
    </div>
  );
};

export default AboutPage;
