import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthedLayout from "./components/layouts/authed/Authed";
import AuthLayout from "./components/layouts/auth/Auth";
import HomePage from "./pages/home/Home";
import PageNotFound from "./components/not-found/NotFound";
import SettingsPage from "./pages/settings/Settings";

const LargeDashboardPage = React.lazy(() =>
  import("./pages/dashboard/Dashboard")
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Authenticated routes */}
          <Route
            path="/dashboard"
            element={
              <AuthedRoute>
                <LargeDashboardPage />
              </AuthedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <AuthedRoute>
                <SettingsPage />
              </AuthedRoute>
            }
          />
          {/* Public routes */}
          <Route
            path="/"
            element={
              <AuthRoute>
                <HomePage />
              </AuthRoute>
            }
          />
          {/* Catch-all route for undefined paths */}
          <Route
            path="*"
            element={
              <AuthedRoute>
                <PageNotFound />
              </AuthedRoute>
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
