import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/hero/hero.jsx";
import Destinations from "./components/Destination/Destinations.jsx";
import Adventure from "./components/Activities/Adventure.jsx";
import Trek from "./components/Treks/trek.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AboutUs from "./components/About/AboutUs.jsx";
import FeedbackSection from "./components/Campers/Campers.jsx";
function App() {
    return(  
      <Router>
        <div>
          <Nav />
          <Hero /> 
          <Destinations />
          <Trek />
          <Adventure />
          <AboutUs />
          <FeedbackSection />
          <Footer />
        </div>
        </Router>
    );
}
export default App;
