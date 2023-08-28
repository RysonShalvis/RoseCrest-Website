import "../scss/_app.scss";
import "../scss/_reset.scss";
import AboutPage from "./AboutPage";
import Header from "./Header";
import LandingPage from "./LandingPage";
import { Routes, Route } from "react-router-dom";
import ServicesPage from "./ServicesPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<h1>Contact</h1>} />
      </Routes>
    </div>
  );
}

export default App;
