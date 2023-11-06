import "../scss/_app.scss";
import "../scss/_reset.scss";
import AboutPage from "./AboutPage";
import Header from "./Header";
import LandingPage from "./LandingPage";
import { Routes, Route } from "react-router-dom";
import ServicesPage from "./ServicesPage";
import { ContactUs } from "./ContactUs";
import { Apply } from "./Apply";
import GalleryPage from "./GalleryPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </div>
  );
}

export default App;
