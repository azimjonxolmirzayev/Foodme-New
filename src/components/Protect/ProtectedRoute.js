import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const csrfToken = Cookies.get("access");
  const user_data = Cookies.get("user_data");

  if (!csrfToken || !user_data) {
    Cookies.remove("access");
    Cookies.remove("user_data");
    Cookies.remove("refresh");

    return <Navigate to="/" replace />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;
