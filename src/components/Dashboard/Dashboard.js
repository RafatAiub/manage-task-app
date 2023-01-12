import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardSideBar from "../Home/DashboardSideBar";

const Dashboard = () => {
  const Navigate = useNavigate();
  const [authenticated, setAuthenticate] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setAuthenticate(loggedInUser);
    }
  }, []);
  if (!authenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <DashboardSideBar>
        <h1 className="text-2xl">Welcome to the Dashboard</h1>
        <Outlet />
      </DashboardSideBar>
    );
  }
};

export default Dashboard;
