import { forwardRef } from "react";
import clsx from "clsx";

const Input = forwardRef(
  (
    {
      label,
      error,
      helperText,
      className = "",
      type = "text",
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-ink-700">
            {label}
          </label>
        )}

        <input
          ref={ref}
          type={type}
          className={clsx(
            "w-full rounded-2xl border border-surface-border bg-white px-4 py-3",
            "text-ink-900 placeholder:text-ink-400",
            "transition-all duration-200",
            "focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none",
            error && "border-danger-500 focus:ring-danger-100",
            className
          )}
          {...props}
        />

        {helperText && !error && (
          <p className="mt-2 text-sm text-ink-500">{helperText}</p>
        )}

        {error && (
          <p className="mt-2 text-sm text-danger-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;