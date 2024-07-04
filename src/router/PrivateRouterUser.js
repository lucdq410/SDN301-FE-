import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouteUser = ({ roles, page }) => {
  if (!roles) {
    return <Navigate to="/sign-in" />;
  }

  return page;
};

export default PrivateRouteUser;
