import { Link } from "react-router-dom";

import {
  SIDEBAR_ITEMS,
  BOTTOM_SIDEBAR_ITEMS,
} from "@constants/navigation";

import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-surface-border bg-white">

      {/* Logo */}
      <div className="flex h-20 items-center border-b border-surface-border px-6">

        <Link
          to="/"
          className="text-3xl font-bold text-gradient-emerald"
        >
          Fitलोक
        </Link>

      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">

        <div className="space-y-2">

          {SIDEBAR_ITEMS.map((item) => (
            <SidebarItem
              key={item.label}
              {...item}
            />
          ))}

        </div>

      </nav>

      {/* Bottom */}
      <div className="border-t border-surface-border p-4">

        <div className="mb-6 rounded-2xl bg-gradient-emerald p-4 text-white">

          <p className="text-sm opacity-90">
            Today's Progress
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            72%
          </h3>

          <p className="mt-1 text-sm opacity-80">
            Keep going 🔥
          </p>

        </div>

        <div className="space-y-2">

          {BOTTOM_SIDEBAR_ITEMS.map((item) => (
            <SidebarItem
              key={item.label}
              {...item}
            />
          ))}

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;