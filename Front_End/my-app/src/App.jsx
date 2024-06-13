import React from "react";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/hero/hero.jsx";
import Destination from "./components/Destination/Destination.jsx";
import Adventure from "./components/Activities/Adventure.jsx";
import Trek from "./components/Treks/trek.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About_Us from "./components/About/About_Us.jsx";
import Tryme from "./components/PageComponent/tryme.jsx";
function App() {
    return(
      
      <Router>
        <div>
          <Nav />
          <Hero /> 
          <Destination >
            <ul>
              <li>
                <Link to="/Tryme">tryme</Link>
              </li>
            </ul>
          </Destination>
          <Switch>
            <Route path="/Tryme"> <Tryme />  </Route>
            </Switch>            
        
          <Trek />
          <Adventure />
          <About_Us />
          <Footer />
          {/* <Tryme /> */}
        </div>
        </Router>
    );
}
export default App;
