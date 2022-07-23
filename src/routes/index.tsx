import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Home = lazy(() => import("@/features/Home/Home"));
const About = lazy(() => import("@/features/About/About"));

const router: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default router;
