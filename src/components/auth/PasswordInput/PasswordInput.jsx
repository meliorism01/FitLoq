import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = forwardRef(function PasswordInput(
  {
    label,
    placeholder,
    error,
    required = false,
    className = "",
    ...props
  },
  ref
) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-5">
      <label
        htmlFor={props.name}
        className="mb-2 block text-sm font-semibold text-ink-700"
      >
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <div className="relative">
        <input
          ref={ref}
          id={props.name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          autoComplete="current-password"
          {...props}
          className={`w-full rounded-2xl border px-4 py-3 pr-12 outline-none transition-all duration-200 ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-surface-border focus:border-emerald-500"
          } ${className}`}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-500 hover:text-emerald-600"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
});

export default PasswordInput;