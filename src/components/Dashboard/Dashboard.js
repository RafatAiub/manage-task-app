import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "../Home/DashboardSideBar";

const Dashboard = () => {
  return (
    <DashboardSideBar>
      <h1 className="text-2xl">Welcome to the Dashboard</h1>
      <Outlet />
    </DashboardSideBar>
  );
};

export default Dashboard;
