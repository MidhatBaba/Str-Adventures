import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import IndexPage from "./pages/Index.jsx"
function App() {
  return(
    <HashRouter  basename="/">
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </HashRouter> 
  );
}
export default App;
