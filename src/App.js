import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cafecreate from "./components/Cafecreate";
import Login from "./components/auth/Login";
import "./components/i18next";
import ProtectedRoute from "./components/Protect/ProtectedRoute";
import Home from "./home/Home";
import Admin from "./home/Admin";

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
        <Route path="/admin" element={<ProtectedRoute element={Admin} />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
