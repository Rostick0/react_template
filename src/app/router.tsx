import React, { FC } from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));

export const ROUTE_NAMES = {
  main: "/",
};

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTE_NAMES.main} element={<Home />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
