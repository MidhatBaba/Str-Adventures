import React from "react";
import Nav from "./Nav/Nav.jsx";
import Hero from "./hero/hero.jsx";
import Destination from "./Destination/Destination.jsx";
import Adventure from "./Activities/Adventure.jsx";
function App() {
    return(
        <div>
          <Nav /> 
          <Hero /> 
          <Destination />

          <Adventure />
        </div>
    );
}
export default App;