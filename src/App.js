import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cafecreate from "./components/Cafecreate";
import Login from "./components/auth/Login";
import "./components/i18next";
import ProtectedRoute from "./components/Protect/ProtectedRoute";
import Home from "./home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/create-cafe"
          element={<ProtectedRoute element={Cafecreate} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
