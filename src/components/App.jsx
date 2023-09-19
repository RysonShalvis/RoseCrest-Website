import "../scss/_app.scss";
import "../scss/_reset.scss";
import AboutPage from "./AboutPage";
import Header from "./Header";
import LandingPage from "./LandingPage";
import { Routes, Route } from "react-router-dom";
import ServicesPage from "./ServicesPage";
import { ContactUs } from "./ContactUs";
import Banner from "./Banner";
import SplitImageSection from "./SplitImageSection";
import splitImageOne from "../media/st-george-home.jpg"
import splitImageTwo from "../media/st-george-canyon-2.jpg"

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <Banner />
              <SplitImageSection image={splitImageOne} />
              <SplitImageSection imageRight image={splitImageTwo} />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="apply" element={<h1>Apply Now</h1>} />
      </Routes>
    </div>
  );
}

export default App;
