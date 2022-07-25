import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "@/features/Loading/Loading";

// const Home = lazy(
//   () => import(/* webpackChunkName: "home-component" */ "@/features/Home/Home")
// );
// const About = lazy(
//   () =>
//     import(/* webpackChunkName: "about-component" */ "@/features/About/About")
// );

const LoadableComponentHome = Loadable({
  loader: () =>
    import(/* webpackChunkName: "home-component" */ "@/features/Home/Home"),
  loading: Loading,
});

const LoadableComponentAbout = Loadable({
  loader: () =>
    import(/* webpackChunkName: "about-component" */ "@/features/About/About"),
  loading: Loading,
});

const router: RouteObject[] = [
  {
    path: "/",
    element: <LoadableComponentHome />,
  },
  {
    path: "/about",
    element: <LoadableComponentAbout />,
  },
];

export default router;
