import React from "react";
import Nav from "./Nav/Nav.jsx";
import Hero from "./hero/hero.jsx";
import Destination from "./Destination/Destination.jsx";
import Adventure from "./Activities/Adventure.jsx";
import Trek from "./Treks/trek.jsx";
import AdventureWelcome from "./About/About.jsx";
import Footer from "./Footer/Footer.jsx";
// import Tryme from "./Nav/tryme.jsx";
import Tryme from "./Nav/tryme.jsx";
function App() {
    return(
        <div>
          <Tryme />
          {/* <Tryme /> */}
          {/* <Nav /> */}
          <Hero /> 
          <Destination />
          <Trek />
          <Adventure />
          <AdventureWelcome />
          <Footer />
        </div>
    );
}
export default App;