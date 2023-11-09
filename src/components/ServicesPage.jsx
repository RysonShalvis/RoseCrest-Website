import NavHeading from "./NavHeading";
import image from "../media/facility images/IMG0004.jpg";
import Banner from "./Banner";
import "../scss/_services-page.scss";
import GradientBanner from "./GradientBanner";
import Card from "./Card";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <NavHeading
        image={image}
        darken
        custom={
          <div className="banner-container">
            <h2>Welcome to our community...</h2>
            <p>
              ...where we prioritize your comfort and well-being. Our range of
              services is designed to make your life easier and more enjoyable,
              ensuring you experience a comfortable home-style life. Whether
              you&apos;re seeking assistance with medication distribution,
              craving delicious home-cooked meals, or looking for help with
              personal items, we&apos;ve got you covered.
            </p>
            <h2>Explore our services below:</h2>
          </div>
        }
      />
      <GradientBanner equalHeight />
      <div className="card-layout">
        <Card title="Comfortable Home-Style Life" enclosedCard>
          Above all, our goal is to provide you with a comfortable home-style
          life. We focus on creating a warm and welcoming atmosphere where you
          can relax and feel at home. At Rosecrest Assisted Living, your
          well-being is our top priority. We take pride in offering a
          comprehensive range of services to ensure you have everything you need
          for a fulfilling and comfortable life. If you have any specific
          requests or questions about our services, please don&apos;t hesitate
          to contact us. We are here to serve you and make your stay with us a
          truly enjoyable experience.
        </Card>
        <Card title="Medication Distribution" enclosedCard>
          Our dedicated staff is here to ensure you receive your medications as
          prescribed and on time. We provide timely and accurate distribution,
          giving you peace of mind knowing your health is in good hands.
        </Card>
        <Card title="Home Cooked Meals" enclosedCard>
          Indulge in the delightful flavors of home-cooked meals prepared with
          love and care. Our house moms craft nutritious and delicious dishes
          that will drive your taste buds wild.
        </Card>
        <Card title="Coordination of Activities" enclosedCard>
          We can help you coordinate your activity plans, making your activity
          hassle-free and enjoyable.
        </Card>
        <Card title="Laundry Facilities" enclosedCard>
          Stay fresh and clean with our laundry facilities. We offer convenient
          and well-equipped spaces for your laundry needs, so you can always
          feel your best.
        </Card>
        <Card title="Cleaning Services" enclosedCard>
          Enjoy a clean and tidy living environment. Our home always keeps your
          surroundings fresh and inviting.
        </Card>
        <Card title="Scheduled Activities" enclosedCard>
          Stay engaged and socialize with a variety of scheduled activities from
          religious sunday meetings to board games to our dish T.V services. We
          offer a diverse range of options to keep you entertained.
        </Card>
        <Card title="Help with Personal Items" enclosedCard>
          We understand that sometimes you need minor assistance with personal
          tasks. Are caring staff is here to help with the occasional need.
        </Card>
      </div>
      <Banner>
        <p className="bottom-services-banner">
          Experience the best of care and comfort - choose Rosecrest Assisted
          Living today!
        </p>
      </Banner>
    </div>
  );
};

export default ServicesPage;
