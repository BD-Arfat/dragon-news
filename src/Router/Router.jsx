import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../LayOuts/HomeLayouts";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
  },
  {
    path: "/news",
    element: <h1>news</h1>,
  },
  {
    path: "/register",
    element: <h1>register</h1>,
  },
  {
    path: "/login",
    element: <h2>Login</h2>,
  },
]);

export default Router;
