import React from "react";
import Nav from "./Nav/Nav.jsx";
import Hero from "./hero/hero.jsx";
import Destination from "./Destination/Destination.jsx";
import Adventure from "./Activities/Adventure.jsx";
import Trek from "./Treks/trek.jsx";
import Footer from "./Footer/Footer.jsx";
import About_Us from "./About/About_Us.jsx";
function App() {
    return(
        <div>
          <Nav />
          <Hero /> 
          <Destination />
          <Trek />
          <Adventure />
          <About_Us />
          <Footer />
        </div>
    );
}
export default App;