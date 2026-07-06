import { NavLink } from "react-router-dom";
import clsx from "clsx";

function SidebarItem({
  icon: Icon,
  label,
  path,
}) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        clsx(
          "group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200",
          isActive
            ? "bg-gradient-emerald text-white shadow-glow"
            : "text-ink-600 hover:bg-surface-bg hover:text-primary-600"
        )
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            size={20}
            className={clsx(
              "transition-transform duration-200",
              !isActive && "group-hover:scale-110"
            )}
          />

          <span className="font-medium">
            {label}
          </span>
        </>
      )}
    </NavLink>
  );
}

export default SidebarItem;