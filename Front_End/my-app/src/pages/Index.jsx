import { Link } from "react-router-dom";

import Nav from "../components/Nav/Nav.jsx";
import Hero from "../components/hero/hero.jsx";
import Destination from "../components/Destination/Destinations.jsx";
import Adventure from "../components/Activities/Adventure.jsx";
import Trek from "../components/Treks/trek.jsx";
import Footer from "../components/Footer/Footer.jsx";
import AboutUs from "../components/About/AboutUs.jsx";
import FeedbackSection from "../components/Campers/Campers.jsx";
const Index = () => {
  return (
    <div>
      <Nav />
      <Hero /> 
      <Destination />
      <Trek />
      <Adventure />
      <AboutUs />
      <FeedbackSection />
      <Footer />
    </div>
  );
}

export default Index;
