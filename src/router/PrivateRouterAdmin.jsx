import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouteAdmin = ({ roles, page }) => {
  if (!roles) {
    return (
      <div>
        <Navigate to="/sign-in" />
      </div>
    );
  }
  if (roles === "user") {
    return (
      <div>
        <Navigate to="/" />
      </div>
    );
  }

  return page;
};

export default PrivateRouteAdmin;
