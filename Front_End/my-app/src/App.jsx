import React from "react";
import { BrowserRouter as Router,Routes, Route,Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/hero/hero.jsx";
import Destination from "./components/Destination/Destination.jsx";
import Adventure from "./components/Activities/Adventure.jsx";
import Trek from "./components/Treks/trek.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About_Us from "./components/About/About_Us.jsx";
import Campers from "./components/Campers/Campers.jsx";
import Tryme from "./components/PageComponent/tryme.jsx";
function App() {
    return(
      <div>
      {/* <Router> */}
        {/* <Routes>
          <Route exact path="/" element={<h1>Kv</h1>} />
          <Route exact path="Tryme" element={<Tryme />} />
        </Routes> */}
        
          <Nav />
          <Hero /> 
          <Destination />
            {/* <ul>
              <li>
                <Link to="/Tryme">tryme</Link>
              </li>
            </ul>
          </Destination> */}
          {/* <Switch>
            <Route path="/Tryme"> <Tryme />  </Route>
            </Switch>             */}
        
          <Trek />
          <Adventure />
          <About_Us />
          <Campers/>
          <Footer />
          {/* <Tryme /> */}
        {/* </Router> */}
        </div>
    );
}
export default App;