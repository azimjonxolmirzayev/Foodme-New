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
import Salesdashboard from "./pages/Dashboard/SalesDashboard";
import DefaultLayout from "./Layout/DefaultLayout";
import Alerts from "./pages/UIElements/Alerts";
import Buttons from "./pages/UIElements/Buttons";
import TrialAdmin from "./components/Trial/TrialAdmin";
import Product from "./pages/Product";
import NoPage from "./components/NoPage";
import PricingPlans from "./pages/PricingPlans";
import CreateProduct from "./pages/CreateProduct";
import Categories from "./pages/Categories";
import ProductDetail from "./pages/ProductDetail";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-cafe" element={<Cafecreate />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={<ProtectedRoute element={DefaultLayout} />}
        >
          {/* Barcha admin sahifalari uchun umumiy tuzilma */}
          <Route path="salesdashboard" element={<Salesdashboard />} />
          <Route path="subscription" element={<PricingPlans />} />
          <Route path="editproduct" element={<EditProduct />} />
          <Route path="createproduct" element={<CreateProduct />} />
          <Route path="productdetail" element={<ProductDetail />} />
          <Route path="category" element={<Categories />} />
          <Route path="freetrial" element={<TrialAdmin />} />
          <Route path="product" element={<Product />} />
          {/* <Route path="profile" element={<Profile />} /> */}
          <Route path="settings" element={<Settings />} />
          <Route path="dashboard" element={<ECommerce />} />
        </Route>

        {/* Catch-All Route */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
