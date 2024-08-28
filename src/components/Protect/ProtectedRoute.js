import React from "react";
import { Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const csrfToken = Cookies.get("csrf_token");

  return csrfToken ? <Component {...rest} /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
