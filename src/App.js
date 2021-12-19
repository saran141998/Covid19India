import "./App.css";
import Home from "./Components/Home/Home";
import StateDetail from "./Components/StateDetail/StateDetail";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import React from "react";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">
          <nav>Covid Tracker - India</nav>
        </Link>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detailedview/:key" element={<StateDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
