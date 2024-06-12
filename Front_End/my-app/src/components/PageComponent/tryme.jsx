import React from "react";
import PageContent from "./PageContent";
import PageFormat from "./PageFormat";
import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx";
import Hero from "../hero/hero.jsx";
import Try1 from "./KashmirValley.jsx";
function Tryme(){
    return(
        <div>
             <Nav />
             <Hero />
             <Try1 /> 
             <Footer />
        </div>
    );
}
export default Tryme;