import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { ROUTES } from "@constants/routes";

import AuthHeader from "@components/auth/AuthHeader";
import AuthButton from "@components/auth/AuthButton";
import AuthFooter from "@components/auth/AuthFooter";

function VerifyOTP() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(
    Array(6).fill("")
  );

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];

    newOtp[index] = value;

    setOtp(newOtp);

    if (
      value &&
      index < 5
    ) {
      document
        .getElementById(`otp-${index + 1}`)
        ?.focus();
    }
  };

  const handleSubmit = () => {
    navigate(ROUTES.RESET_PASSWORD);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <AuthHeader
        title="Verify OTP"
        subtitle="Enter the 6-digit code sent to your email."
      />

      <div className="mt-10 flex justify-between gap-3">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            maxLength={1}
            value={digit}
            onChange={(e) =>
              handleChange(
                e.target.value,
                index
              )
            }
            className="h-14 w-14 rounded-xl border text-center text-xl font-semibold outline-none focus:border-emerald-500"
          />
        ))}
      </div>

      <div className="mt-8">
        <AuthButton
          onClick={handleSubmit}
        >
          Verify OTP
        </AuthButton>
      </div>

      <AuthFooter
        text="Didn't receive the code?"
        action="Resend"
        to="#"
      />
    </motion.div>
  );
}

export default VerifyOTP;