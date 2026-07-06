import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ROUTES } from "@constants/routes";
import { signupSchema } from "@schemas/authSchemas";

import useAuth from "@hooks/useAuth";

import AuthHeader from "@components/auth/AuthHeader";
import AuthInput from "@components/auth/AuthInput";
import PasswordInput from "@components/auth/PasswordInput";
import AuthButton from "@components/auth/AuthButton";
import AuthFooter from "@components/auth/AuthFooter";
import SocialLogin from "@components/auth/SocialLogin";

function Signup() {
  const navigate = useNavigate();

  const { register: registerUser, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values) => {
    const result = await registerUser(values);

    if (result.success) {
      navigate(ROUTES.HOME);
    } else {
      console.error(result.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <AuthHeader
        title="Create your account 🚀"
        subtitle="Start your AI-powered fitness journey today."
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-5"
      >
        <AuthInput
          label="Full Name"
          placeholder="Enter your full name"
          error={errors.fullName?.message}
          {...register("fullName")}
        />

        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          error={errors.email?.message}
          {...register("email")}
        />

        <PasswordInput
          label="Password"
          placeholder="Create a password"
          error={errors.password?.message}
          {...register("password")}
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            required
            className="mt-1"
          />

          <span className="text-ink-600">
            I agree to the Terms of Service and Privacy Policy.
          </span>
        </label>

        <AuthButton
          type="submit"
          loading={isLoading}
        >
          Create Account
        </AuthButton>

        <SocialLogin />
      </form>

      <AuthFooter
        text="Already have an account?"
        action="Sign In"
        to={ROUTES.LOGIN}
      />
    </motion.div>
  );
}

export default Signup;