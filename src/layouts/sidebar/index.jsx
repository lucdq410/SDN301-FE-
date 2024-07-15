import React from "react";
import { NavLink } from "react-router-dom";
import Dashboard from "../../pages/admin/Dashboard";

const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open w-auto">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side bg-gray-800 text-white">
        {" "}
        {/* Changed background and text color */}
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-gray-900 w-80 p-4 m-4 h-24 rounded-2xl"></div>{" "}
        {/* Changed background color */}
        <ul className="menu text-white w-80 p-4 m-4">
          {" "}
          {/* Changed text color */}
          <li>
            <NavLink to="/mv/dashboard" className="side-nav-item py-4 my-4">
              dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/mv/halls" className="side-nav-item py-4 my-4">
              Hall {/* Corrected label */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/mv/movies" className="side-nav-item py-4 my-4">
              movies {/* Corrected label */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/mv/screenings" className="side-nav-item py-4 my-4">
              screenings {/* Corrected label */}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Sidebar } from "primereact/sidebar";
// import { Menu } from "primereact/menu";

// const CustomSidebar = () => {
//   const items = [
//     { label: "Dashboard", icon: "pi pi-fw pi-home", to: "/mv/dashboard" },
//     { label: "Hall", icon: "pi pi-fw pi-ticket", to: "/mv/halls" },
//     { label: "Movies", icon: "pi pi-fw pi-video", to: "/mv/movies" },
//     { label: "Screens", icon: "pi pi-fw pi-desktop", to: "/mv/screens" },
//   ];

//   const renderMenuItems = () => {
//     return items.map((item) => (
//       <li key={item.to} className="menu-item">
//         <NavLink to={item.to} className="menu-link" activeClassName="active">
//           <span className="menu-icon pi pi-fw" aria-hidden="true"></span>
//           <span className="menu-text">{item.label}</span>
//         </NavLink>
//       </li>
//     ));
//   };

//   return (
//     <Sidebar visible={true} position="left" style={{ height: "100vh" }}>
//       <ul className="menu">{renderMenuItems()}</ul>
//     </Sidebar>
//   );
// };

// export default CustomSidebar;
