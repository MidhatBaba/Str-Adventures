import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import IndexPage from "./pages/Index.jsx"
import DestinationPage from "./pages/Destination.jsx"


function App() {
  return(
    <HashRouter  basename="/">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/destination/:url" element={<DestinationPage />} />
      </Routes>
    </HashRouter> 
  );
}
export default App;
