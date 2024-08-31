import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cafecreate from "./pages/Authentication/Cafecreate";
import Login from "./pages/Authentication/Login";
import "./components/I18/i18next";
import ProtectedRoute from "./components/Protect/ProtectedRoute";
import Home from "./pages/Home";
import Admin from "./pages/Dashboard/Admin";
import Calendar from "./pages/Calendar";
import Chart from "./pages/Chart";
import Profile from "./pages/Profile";
import Tables from "./pages/Tables";
import Settings from "./pages/Settings";
import FormElements from "./pages/Form/FormElements";
import FormLayout from "./pages/Form/FormLayout";
import ECommerce from "./pages/Dashboard/ECommerce";
import DefaultLayout from "./Layout/DefaultLayout";
import Alerts from "./pages/UIElements/Alerts";
import Buttons from "./pages/UIElements/Buttons";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-cafe" element={<Cafecreate />} />

        <Route element={<ProtectedRoute element={DefaultLayout} />}>
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/ui/alerts" element={<Alerts />} />
          <Route path="/ui/buttons" element={<Buttons />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/forms/form-elements" element={<FormElements />} />
          <Route path="/forms/form-layout" element={<FormLayout />} />
          <Route path="/dashboard" element={<ECommerce />} />
          <Route path="/admin/*" element={<Admin />} />
        </Route>

        {/* Catch-All Route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
