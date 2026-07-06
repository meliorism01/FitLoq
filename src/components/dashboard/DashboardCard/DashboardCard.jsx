import clsx from "clsx";

function DashboardCard({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-surface-border bg-white p-6 shadow-card transition-all duration-300",
        hover &&
          "hover:-translate-y-1 hover:shadow-lift",
        className
      )}
    >
      {children}
    </div>
  );
}

export default DashboardCard;