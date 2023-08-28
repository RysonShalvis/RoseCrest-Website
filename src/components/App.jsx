import "../scss/_app.scss";
import "../scss/_reset.scss";
import AboutPage from "./AboutPage";
import Header from "./Header";
import LandingPage from "./LandingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="services" element={<h1>Services</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
      </Routes>
    </div>
  );
}

export default App;
