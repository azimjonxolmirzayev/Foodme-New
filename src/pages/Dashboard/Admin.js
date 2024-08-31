import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Loader from "../../common/loader/loader";
import PageTitle from "../../components/PageTitle";
import Calendar from "../../pages/Calendar";
import Chart from "../../pages/Chart";
import ECommerce from "../../pages/Dashboard/ECommerce";
import FormElements from "../../pages/Form/FormElements";
import FormLayout from "../../pages/Form/FormLayout";
import Profile from "../../pages/Profile";
import Settings from "../../pages/Settings";
import Tables from "../../pages/Tables";
import Alerts from "../../pages/UIElements/Alerts";
import Buttons from "../../pages/UIElements/Buttons";
import DefaultLayout from "../../Layout/DefaultLayout";
import Cafecreate from "../../pages/Authentication/Cafecreate";
import Login from "../Authentication/Login";
import ProtectedRoute from "../../components/Protect/ProtectedRoute";
import Home from "../../pages/Home";
import Admin from "../../pages/Dashboard/Admin";

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <DefaultLayout>
      <Routes>
        {/* Public Routes */}
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/chart" element={<Chart />} />

        {/* Protected Routes */}
        <Route
          path="/create-cafe"
          element={<ProtectedRoute element={Cafecreate} />}
        />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<ProtectedRoute element={Admin} />}>
          <Route
            path="dashboard"
            element={
              <>
                <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <ECommerce />
              </>
            }
          />
          <Route
            path="profile"
            element={
              <>
                <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Profile />
              </>
            }
          />
          <Route
            path="forms/form-elements"
            element={
              <>
                <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <FormElements />
              </>
            }
          />
          <Route
            path="forms/form-layout"
            element={
              <>
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <FormLayout />
              </>
            }
          />
          <Route
            path="tables"
            element={
              <>
                <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Tables />
              </>
            }
          />
          <Route
            path="settings"
            element={
              <>
                <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Settings />
              </>
            }
          />
          <Route
            path="ui/alerts"
            element={
              <>
                <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Alerts />
              </>
            }
          />
          <Route
            path="ui/buttons"
            element={
              <>
                <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Buttons />
              </>
            }
          />
        </Route>

        {/* Catch-All Route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
