import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <div class="w-full navbar bg-base-300 lg:px-20 fixed top-0 z-50">
          <label
            tabIndex="0"
            for="my-drawer-2"
            class="btn btn-ghast drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>

          <div class="flex-1 px-2 mx-2 text-2xl">Clean Co.</div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal gap-x-2">
              <li>
                <NavLink to="dashboard" className="rounded-lg">
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/tasks" className="rounded-lg">
                  Tasks
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/members" className="rounded-lg">
                  Members
                </NavLink>
              </li>

              <li class="dropdown dropdown-hover dropdown-end ">
                <label
                  tabindex="0"
                  class="btn btn-primary  btn-outline rounded-lg "
                >
                  logout
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
