import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeskTop from "./desktop/DeskTop";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DeskTop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
