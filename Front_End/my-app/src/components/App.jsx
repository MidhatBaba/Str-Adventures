import React from "react";
import Nav from "./Nav/Nav.jsx";
import Hero from "./hero/hero.jsx";
import Destination from "./Destination/Destination.jsx";
import Adventure from "./Activities/Adventure.jsx";
import Trek from "./Treks/trek.jsx";
import AdventureWelcome from "./About/About.jsx";
function App() {
    return(
        <div>
          <Nav /> 
          <Hero /> 
          <Destination />
          <Trek />
          <Adventure />
          <AdventureWelcome />
        </div>
    );
}
export default App;