import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthHeader from "@components/auth/AuthHeader";
import AuthInput from "@components/auth/AuthInput";
import PasswordInput from "@components/auth/PasswordInput";

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
  });

  const onSubmit = async (values) => {
    const result = await login(values);

    if (result.success) {
      navigate("/dashboard");
    } else {
      alert(result.message);
    }
  };

  return (
    <div>
      <AuthHeader
        title="Welcome Back 👋"
        subtitle="Sign in to continue your fitness journey."
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
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
            to="/forgot-password"
            className="font-medium text-emerald-600 hover:text-emerald-700"
          >
            Forgot Password?
          </Link>

        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-2xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-ink-500">

        Don't have an account?

        <Link
          to="/signup"
          className="ml-2 font-semibold text-emerald-600"
        >
          Create Account
        </Link>

      </p>
    </div>
  );
}

export default Login;