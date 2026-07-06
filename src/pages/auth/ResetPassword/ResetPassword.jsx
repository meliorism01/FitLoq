import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ROUTES } from "@constants/routes";

import AuthHeader from "@components/auth/AuthHeader";
import PasswordInput from "@components/auth/PasswordInput";
import AuthButton from "@components/auth/AuthButton";
import AuthFooter from "@components/auth/AuthFooter";

import { resetPasswordSchema } from "@schemas/authSchemas";

function ResetPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onTouched",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async () => {
    // Backend later
    navigate(ROUTES.LOGIN);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <AuthHeader
        title="Create New Password"
        subtitle="Your new password must be different from the previous one."
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-5"
      >
        <PasswordInput
          label="New Password"
          placeholder="Enter new password"
          error={errors.password?.message}
          {...register("password")}
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm new password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        <AuthButton type="submit">
          Reset Password
        </AuthButton>
      </form>

      <AuthFooter
        text="Remember your password?"
        action="Back to Login"
        to={ROUTES.LOGIN}
      />
    </motion.div>
  );
}

export default ResetPassword;