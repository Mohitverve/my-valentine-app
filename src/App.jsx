// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import Puzzle from "./pages/Puzzle";
import Proposal from "./pages/Proposal";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/puzzle" element={<Puzzle />} />
      <Route path="/proposal" element={<Proposal />} />
    </Routes>
    </Router>
  );
}

export default App;
