import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import StreetView from "../components/StreetView";

/**
 * @description Router Component for whole app
 * @returns {BrowserRouter}
 */
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<StreetView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
