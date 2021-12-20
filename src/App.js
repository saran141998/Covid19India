import "./App.css";
import Home from "./Components/Home/Home";
import StateDetail from "./Components/StateDetail/StateDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detailedview/:key" element={<StateDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
