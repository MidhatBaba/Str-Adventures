import { Link } from "react-router-dom";

import Nav from "../components/Nav/Nav.jsx";
import Hero from "../components/hero/hero.jsx";
import Destination from "../components/destination/Destination.jsx";
import Adventure from "../components/Activities/Adventure.jsx";
import Trek from "../components/Treks/trek.jsx";
import Footer from "../components/Footer/Footer.jsx";
import AboutUs from "../components/About/About_Us.jsx";
import Tryme from "../components/PageComponent/tryme.jsx";

const Index = () => {
  return (
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
      <Trek />
      <Adventure />
      <AboutUs />
    <Footer />
    </div>
  )
}

export default Index
