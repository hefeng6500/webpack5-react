import React, { Suspense, lazy } from "react";
import { useRoutes, RouteObject } from "react-router-dom";

const RouteTable: SyncRoute.Routes[] = [
  {
    path: "/",
    component: lazy(() => import("@/Layout")),
    children: [
      {
        path: "/",
        component: lazy(() => import("@/features/Home/Home")),
      },
      {
        path: "about",
        component: lazy(() => import("@/features/About/About")),
      },
    ],
  },
];

const syncRouter = (table: SyncRoute.Routes[]): RouteObject[] => {
  const mRouteTable: RouteObject[] = [];
  table.forEach((route) => {
    mRouteTable.push({
      path: route.path,
      element: (
        <Suspense fallback={<div>路由加载ing...</div>}>
          <route.component />
        </Suspense>
      ),
      children: route.children && syncRouter(route.children),
    });
  });
  return mRouteTable;
};

export default () => useRoutes(syncRouter(RouteTable));
