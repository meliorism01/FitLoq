import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "@constants/routes";

import Landing from "@pages/Landing/Landing";

import AuthLayout from "@layouts/AuthLayout";

import Login from "@pages/auth/Login";
import Signup from "@pages/auth/Signup";
import ForgotPassword from "@pages/auth/ForgotPassword";
import VerifyOTP from "@pages/auth/VerifyOTP";
import ResetPassword from "@pages/auth/ResetPassword";

function AppRoutes() {
  return (
    <Routes>
      {/* ===================== */}
      {/* Public Routes */}
      {/* ===================== */}

      <Route path={ROUTES.HOME} element={<Landing />} />

      {/* ===================== */}
      {/* Authentication */}
      {/* ===================== */}

      <Route element={<AuthLayout />}>
        <Route
          path={ROUTES.LOGIN}
          element={<Login />}
        />

        <Route
          path={ROUTES.REGISTER}
          element={<Signup />}
        />

        <Route
          path={ROUTES.FORGOT_PASSWORD}
          element={<ForgotPassword />}
        />

        <Route
          path={ROUTES.VERIFY_OTP}
          element={<VerifyOTP />}
        />

        <Route
          path={ROUTES.RESET_PASSWORD}
          element={<ResetPassword />}
        />
      </Route>

      {/* ===================== */}
      {/* 404 */}
      {/* ===================== */}

      <Route
        path="*"
        element={<Navigate to={ROUTES.HOME} replace />}
      />
    </Routes>
  );
}

export default AppRoutes;