import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ROUTES } from "@constants/routes";

import AuthHeader from "@components/auth/AuthHeader";
import AuthInput from "@components/auth/AuthInput";
import PasswordInput from "@components/auth/PasswordInput";
import SocialLogin from "@components/auth/SocialLogin";
import AuthFooter from "@components/auth/AuthFooter";
import AuthButton from "@components/auth/AuthButton";

import { loginSchema } from "@schemas/authSchemas";
import useAuth from "@hooks/useAuth";

function Login() {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    const result = await login(values);

    if (result.success) {
      navigate(ROUTES.DASHBOARD);
    } else {
      console.error(result.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <AuthHeader
        title="Welcome Back 👋"
        subtitle="Sign in to continue your fitness journey."
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-5"
      >
        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          error={errors.email?.message}
          {...register("email")}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          error={errors.password?.message}
          {...register("password")}
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember Me
          </label>

          <Link
            to={ROUTES.FORGOT_PASSWORD}
            className="font-medium text-primary-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <AuthButton
          type="submit"
          loading={isLoading}
        >
          Sign In
        </AuthButton>

        <SocialLogin />
      </form>

      <AuthFooter
        text="Don't have an account?"
        action="Create Account"
        to={ROUTES.REGISTER}
      />
    </motion.div>
  );
}

export default Login;