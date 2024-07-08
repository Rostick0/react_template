import React, { FC } from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Add = lazy(() => import("../pages/Add"));

export const ROUTE_NAMES = {
  main: "/",
  add: "/add",
};

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTE_NAMES.main} element={<Home />}></Route>
        <Route path={ROUTE_NAMES.add} element={<Add />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
