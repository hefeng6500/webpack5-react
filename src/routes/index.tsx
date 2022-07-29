import React, { Suspense, lazy } from "react";
import { useRoutes, RouteObject } from "react-router-dom";

import Home from "@/features/home/home";
import Layout from "@/layout";

const routes: AsyncRoute.Routes[] = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        index: true,
        component: Home,
      },
      {
        path: "about",
        component: lazy(
          () =>
            import(
              /* webpackChunkName: "about-chunk" */ "@/features/about/about"
            )
        ),
      },
    ],
  },
];

const asyncRouter = (table: AsyncRoute.Routes[]): RouteObject[] => {
  const RoutesTable: RouteObject[] = [];

  table.forEach((route) => {
    RoutesTable.push({
      path: route.path,
      element: (
        <Suspense fallback={<div>loading...</div>}>
          <route.component />
        </Suspense>
      ),
      children: route.children && asyncRouter(route.children),
    });
  });

  return RoutesTable;
};

export default () => useRoutes(asyncRouter(routes));
