import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./authentication/login";
import Registration from "./authentication/registration";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage"; // Import HomePage
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/home" element={<HomePage />} /> {/* Add route for HomePage */}
      </Routes>
    </Router>
  );
}

export default App;
