// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StageOne from "./pages/StageOne";
import StageTwo from "./pages/StageTwo";
import StageThree from "./pages/StageThree";
import Proposal from "./pages/Proposal";
import Landing from "./pages/Landing";


function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/stage1" element={<StageOne />} />
      <Route path="/stage2" element={<StageTwo />} />
      <Route path="/stage3" element={<StageThree />} />
      <Route path="/proposal" element={<Proposal />} />
    </Routes>
    </Router>
  );
}

export default App;
