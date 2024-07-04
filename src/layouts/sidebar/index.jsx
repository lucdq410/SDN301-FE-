import React from "react";
import { NavLink } from "react-router-dom";
import Dashboard from "../../pages/admin/Dashboard";

const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open w-auto">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
      <div className="drawer-side bg-slate-300">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="bg-slate-700 w-80 p-4 m-4 h-24 rounded-2xl"></div>

        <ul className="menu text-base-content w-80 p-4 m-4">
          {/* Sidebar content here */}
          <li>
            <NavLink to="/mv/dashboard" className="side-nav-item py-4 my-4">
              Sidebar Item 1
            </NavLink>
          </li>
          <li>
            <NavLink to="/mv/hall" className="side-nav-item py-4 my-4">
              Sidebar Item 1
            </NavLink>
          </li>
          <li>
            <NavLink to="/mv/screens" className="side-nav-item py-4 my-4">
              Sidebar Item 1
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
