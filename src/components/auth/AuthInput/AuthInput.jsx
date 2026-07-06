import { forwardRef } from "react";

const AuthInput = forwardRef(function AuthInput(
  {
    label,
    type = "text",
    placeholder,
    error,
    required = false,
    className = "",
    ...props
  },
  ref
) {
  return (
    <div className="mb-5">
      <label
        htmlFor={props.name}
        className="mb-2 block text-sm font-semibold text-ink-700"
      >
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <input
        ref={ref}
        id={props.name}
        type={type}
        placeholder={placeholder}
        autoComplete={type === "email" ? "email" : undefined}
        spellCheck={false}
        {...props}
        className={`w-full rounded-2xl border px-4 py-3 outline-none transition-all duration-200 ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-surface-border focus:border-emerald-500"
        } ${className}`}
      />

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
});

export default AuthInput;