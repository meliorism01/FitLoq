import clsx from "clsx";

function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
}) {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={clsx(
        "rounded-3xl bg-surface-card border border-surface-border shadow-card transition-all duration-300",
        paddings[padding],
        hover && "hover:-translate-y-1 hover:shadow-lift",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;