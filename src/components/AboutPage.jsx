import "../scss/_about-page.scss";
import NavHeading from "./NavHeading";
import image from "../media/st-george-2.jpeg";

const AboutPage = () => {
  return (
    <div className="about-page">
      <NavHeading image={image} className="hello" title="About us..." />
    </div>
  );
};

export default AboutPage;
