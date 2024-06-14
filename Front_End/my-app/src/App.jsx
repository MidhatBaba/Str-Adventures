// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Nav from "./components/Nav/Nav.jsx";
// import Hero from "./components/hero/hero.jsx";
// import Destinations from "./components/Destination/Destinations.jsx";
// import Adventure from "./components/Activities/Adventure.jsx";
// import Trek from "./components/Treks/trek.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// import AboutUs from "./components/About/AboutUs.jsx";
// import FeedbackSection from "./components/Campers/Campers.jsx";
// function App() {
//     return(  
//       <Router>
//         <div>
//           <Nav />
//           <Hero /> 
//           <Destinations />
//           <Trek />
//           <Adventure />
//           <AboutUs />
//           <FeedbackSection />
//           <Footer />
//         </div>
//         </Router>
//     );
// }
// export default App;



import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import Index from "./pages/Index.jsx"
import Destination from "./pages/Destination.jsx"


function App() {
  return(
    <HashRouter  basename="/">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/destination/:url" element={<Destination />} />
      </Routes>
    </HashRouter> 
  );
}
export default App;