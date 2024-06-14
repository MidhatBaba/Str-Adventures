import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Destination from "./pages/Destination.jsx";
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