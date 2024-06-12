import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/hero/hero.jsx";
import Destination from "./components/Destination/Destination.jsx";
import Adventure from "./components/Activities/Adventure.jsx";
import Trek from "./components/Treks/trek.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About_Us from "./components/About/About_Us.jsx";
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