import clsx from "clsx";

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-200 focus-ring disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-gradient-emerald text-white shadow-glow hover:shadow-lift hover:-translate-y-0.5",

    secondary:
      "bg-surface-card border border-surface-border text-ink-900 shadow-card hover:shadow-lift",

    outline:
      "border border-primary-500 text-primary-600 hover:bg-primary-50",

    ghost:
      "text-ink-700 hover:bg-surface-bg",

    danger:
      "bg-danger-500 text-white hover:bg-danger-600",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={clsx(
        base,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;