import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DeskTop from "./desktop/DeskTop";
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        {/* {" "} */}
        {/* Wrap your routes with <Routes> element */}
        {/* <Route path="/" exact element={<PersonalDataForm />} />
        <Route path="/contact-details" element={<ContactDetails />} /> */}
        <Route path="/" element={<DeskTop/>} />
        {/* Add more routes for other components if needed */}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
