import React from "react";
import { Navigate, Outlet, Route, RouteProps } from "react-router-dom";

function PrivateRoute(props: RouteProps) {
  // Check if user is logged
  // If yes => show route
  // Otherwise, redirect to loggin
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
