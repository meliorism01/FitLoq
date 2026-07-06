import { Routes, Route } from "react-router-dom";

import Landing from "@pages/Landing/Landing";

import AuthLayout from "@layouts/AuthLayout";

import Login from "@pages/Auth/Login";
import Signup from "@pages/Auth/Signup";
import ForgotPassword from "@pages/Auth/ForgotPassword";
import VerifyOTP from "@pages/Auth/VerifyOTP";
import ResetPassword from "@pages/Auth/ResetPassword";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Landing */}
      <Route path="/" element={<Landing />} />

      {/* Authentication */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        <Route
          path="/verify-otp"
          element={<VerifyOTP />}
        />
        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;