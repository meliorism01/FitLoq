import { useEffect, useState } from "react";
import {
  Search,
  Bell,
  Moon,
  User,
} from "lucide-react";

function TopNavbar() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const container = document.getElementById("dashboard-scroll");

    if (!container) return;

    const handleScroll = () => {
      setCompact(container.scrollTop > 40);
    };

    container.addEventListener("scroll", handleScroll);

    return () =>
      container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 flex items-center justify-between border-b border-surface-border bg-white/80 backdrop-blur-xl transition-all duration-300

      ${
        compact
          ? "h-16 px-6 shadow-sm"
          : "h-20 px-8"
      }`}
    >
      {/* Search */}

      <div
        className={`relative transition-all duration-300 ${
          compact
            ? "max-w-sm"
            : "max-w-md"
        } w-full`}
      >
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400"
        />

        <input
          type="text"
          placeholder="Search workouts, meals..."
          className={`w-full rounded-2xl border border-surface-border bg-surface-bg pl-12 pr-4 outline-none transition-all duration-300 focus:border-primary-500

          ${
            compact
              ? "py-2"
              : "py-3"
          }`}
        />
      </div>

      {/* Right */}

      <div
        className={`ml-8 flex items-center transition-all duration-300 ${
          compact
            ? "gap-2"
            : "gap-4"
        }`}
      >
        <button className="rounded-xl p-2 hover:bg-surface-bg transition">
          <Bell size={compact ? 18 : 20} />
        </button>

        <button className="rounded-xl p-2 hover:bg-surface-bg transition">
          <Moon size={compact ? 18 : 20} />
        </button>

        <button
          className={`flex items-center rounded-2xl border border-surface-border transition-all duration-300 hover:bg-surface-bg

          ${
            compact
              ? "gap-2 px-2 py-1"
              : "gap-3 px-3 py-2"
          }`}
        >
          <div
            className={`flex items-center justify-center rounded-full bg-gradient-emerald text-white transition-all duration-300

            ${
              compact
                ? "h-8 w-8"
                : "h-10 w-10"
            }`}
          >
            <User size={compact ? 15 : 18} />
          </div>

          <div className="hidden lg:block text-left">

            <p
              className={`font-semibold transition-all duration-300 ${
                compact
                  ? "text-xs"
                  : "text-sm"
              }`}
            >
              Manik
            </p>

            {!compact && (
              <p className="text-xs text-ink-500">
                Fitness Explorer
              </p>
            )}

          </div>

        </button>

      </div>

    </header>
  );
}

export default TopNavbar;