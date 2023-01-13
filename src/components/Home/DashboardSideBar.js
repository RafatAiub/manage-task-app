import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSideBar = () => {
  return (
    <div className="drawer drawer-mobile bg-accent ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center"></div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 mt-14 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <NavLink to="/dashboard/tasks">Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/members">Members</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSideBar;
