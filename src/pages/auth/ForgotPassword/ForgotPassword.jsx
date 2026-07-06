import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ROUTES } from "@constants/routes";

import AuthHeader from "@components/auth/AuthHeader";
import AuthInput from "@components/auth/AuthInput";
import AuthButton from "@components/auth/AuthButton";
import AuthFooter from "@components/auth/AuthFooter";

import { forgotPasswordSchema } from "@schemas/authSchemas";

function ForgotPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values) => {
    console.log(values);

    // Backend later
    navigate(ROUTES.VERIFY_OTP);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <AuthHeader
        title="Forgot Password?"
        subtitle="Enter your email to receive a verification code."
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

        <AuthButton type="submit">
          Send OTP
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

export default ForgotPassword;