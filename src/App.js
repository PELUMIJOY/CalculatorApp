import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Calculator from "./Calculator/Calculator";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;
