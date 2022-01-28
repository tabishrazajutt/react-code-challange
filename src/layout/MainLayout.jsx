import React from "react";
import { Outlet } from "react-router-dom";

/**
 * @description Component that renders main layout component
 * @returns {HTMLElement}
 */
const MainLayout = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default MainLayout;
