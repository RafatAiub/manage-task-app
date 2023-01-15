import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.authenticated("true");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const Protected = (props) => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;
