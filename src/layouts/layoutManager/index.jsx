import React from "react";
import Sidebar from "../sidebar";

const LayoutManager = ({ page: Page }) => {
  return (
    <div className="flex w-screen">
      <Sidebar />
      <div className="p-2">
        {" "}
        <Page />
      </div>
    </div>
  );
};

export default LayoutManager;
