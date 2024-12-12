import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthedLayout from "./components/layouts/authed/Authed";
import AuthLayout from "./components/layouts/auth/Auth";
import HomePage from "./pages/home/Home";

const LargeDashboardPage = React.lazy(() =>
  import("./pages/dashboard/Dashboard")
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <AuthedRoute>
                <LargeDashboardPage />
              </AuthedRoute>
            }
          />
          <Route
            path="/"
            element={
              <AuthRoute>
                <HomePage />
              </AuthRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;

const AuthRoute = ({ children }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

const AuthedRoute = ({ children }) => {
  return <AuthedLayout>{children}</AuthedLayout>;
};
