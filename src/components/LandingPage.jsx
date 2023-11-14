import "../scss/_landing-page.scss";
import Home from "./Home";
import Banner from "./Banner";
import SplitImageSection from "./SplitImageSection";
import splitImageOne from "../media/facility images/IMG0009.jpg";
import splitImageTwo from "../media/section-two-image.webp";
import splitImageLeft from "../media/facility images/IMG0005.jpg";
import splitImageBottom from "../media/section-three-bottom-image.webp";
import cardImage from "../media/facility images/IMG0014.jpg";
import splitImageFour from "../media/section-four-image.webp";
import splitImageFive from "../media/section-five-image.webp";
import splitImageSix from "../media/section-six-image.webp";
import splitImageSeven from "../media/section-seven-image.webp";
import Button from "./Button";
import Card from "./Card";
import GradientBanner from "./GradientBanner";

const LandingPage = () => {
  const sectionOneTitle = (
    <h2>
      We&apos;ve Made our Assisted <br /> Living Center in <br />
      Saint George, Utah
      <br /> Feel Like Home
    </h2>
  );
  const sectionTwoTitle = "Put Your Mind at Ease";

  return (
    <div className="landing-page">
      <Home />
      <SplitImageSection customTitle={sectionOneTitle} image={splitImageOne}>
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
      <GradientBanner
        textOne='"I feel comfortable here."'
        textTwo='"I love the homemade food here."'
        textThree='"It feels like home."'
      />
      <SplitImageSection
        title={sectionTwoTitle}
        imageRight
        image={splitImageTwo}
      >
        <div>
          <p>
            Deciding to move your mother or father to an assisted living
            facility can be a hard decision. You have likely been stressed about
            it for months. Let us take that burden off your mind. You will know
            you did the right thing for your mom or dad knowing they feel peace
            and comfort where they are living.
          </p>
          <p>Schedule a visit to see if we are a good fit for your family.</p>
        </div>

        <div className="button-container">
          <Button path="/Contact">Schedule Now</Button>
        </div>
      </SplitImageSection>
      <div className="split-section-variant">
        <div className="image-container">
          <img src={splitImageLeft} alt="" />
        </div>
        <div className="text-container">
          <div className="text-wrapper">
            <h2>Welcome to Our Home-Like Assisted Living Community</h2>
            <p>
              At Rosecrest Assisted Living, we understand that home is where the
              heart is, and we&apos;re dedicated to providing a warm and
              welcoming environment that feels just like home. Our mission is to
              empower our residents to live their best lives, offering the
              perfect blend of assistance and independence in a setting that
              promotes comfort, security, and a sense of belonging.
            </p>
          </div>

          <img src={splitImageBottom} alt="" />
        </div>
      </div>
      <Banner>
        <p>Why Choose Our Assisted Living Home?</p>
      </Banner>
      <div className="card-layout">
        <Card title="A True Home Feeling">
          We believe that assisted living should never feel institutional.
          That&apos;s why we&apos;ve designed our community to exude a sense of
          comfort and familiarity. From cozy common areas to personalized living
          spaces, every detail is carefully crafted to make you feel right at
          home.
        </Card>
        <Card title="Very Affordable">
          We are an approved provider for Medicaid&apos;s New Choices Waiver
          Program. When you&apos;re approved for Medicaid New Choices Waiver
          Program, the majority is paid for by Medicaid, with only a small room
          and board fee.
        </Card>
        <Card title="Compassionate Care">
          Our team of dedicated caregivers is genuinely caring. We help our
          residents with medication management and healthcare coordination,
          while respecting our resident&apos;s dignity and individuality.
        </Card>
        <Card title="Safety and Security">
          Your safety is our top priority. We have 24/7 trained staff available
          around the clock to assist whenever needed.
        </Card>
        <Card title="Nutritious Dining">
          Our Chef-Mom prepared meals are not only delicious, but also
          nutritionally balanced. Our dining areas provide opportunities for
          socializing over a delightful meal.
        </Card>
        <img className="card-image" src={cardImage} />
      </div>
      <Banner>
        <p>What Makes US Special?</p>
      </Banner>
      <SplitImageSection
        title="Personalized Care Plans"
        image={splitImageFour}
        imageRight
      >
        <p>
          We understand that everyone&apos;s needs are different. Our care plans
          are tailored to your unique requirements, ensuring you receive the
          support you need, when you need it.
        </p>
      </SplitImageSection>
      <SplitImageSection title="A Supportive Community" image={splitImageFive}>
        <p>
          Our residents and staff form a close-knit family. You&apos;ll quickly
          build strong bonds and lasting friendships within our home.
        </p>
      </SplitImageSection>
      <SplitImageSection
        title="Family Involvement"
        image={splitImageSix}
        imageRight
      >
        <p>
          We encourage family involvement and value their input. Your loved ones
          are always welcome, and we strive to keep them informed and engaged in
          your care.
        </p>
      </SplitImageSection>
      <SplitImageSection title="Beautiful Surroundings" image={splitImageSeven}>
        <p>
          Our home is nestled in St. George, a peaceful and picturesque
          location, providing a serene and calming atmosphere.
        </p>
      </SplitImageSection>
    </div>
  );
};

export default LandingPage;
