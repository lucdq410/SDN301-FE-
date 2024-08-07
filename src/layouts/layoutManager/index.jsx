import React from "react";
import Sidebar from "../sidebar";

const LayoutManager = ({ page: Page }) => {
  return (
    <div className="flex w-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 p-2">
        <Page />
      </div>
    </div>
  );
};

export default LayoutManager;
