import { Search, Bell, Moon, User } from "lucide-react";

function TopNavbar() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-surface-border bg-white px-8">

      {/* Search */}

      <div className="relative w-full max-w-md">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400"
        />

        <input
          type="text"
          placeholder="Search workouts, meals..."
          className="w-full rounded-2xl border border-surface-border bg-surface-bg py-3 pl-12 pr-4 outline-none transition focus:border-primary-500"
        />

      </div>

      {/* Right */}

      <div className="ml-8 flex items-center gap-4">

        <button className="rounded-xl p-3 transition hover:bg-surface-bg">
          <Bell size={20} />
        </button>

        <button className="rounded-xl p-3 transition hover:bg-surface-bg">
          <Moon size={20} />
        </button>

        <button className="flex items-center gap-3 rounded-2xl border border-surface-border px-3 py-2 transition hover:bg-surface-bg">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-emerald text-white">
            <User size={18} />
          </div>

          <div className="hidden text-left lg:block">

            <p className="text-sm font-semibold">
              Manik
            </p>

            <p className="text-xs text-ink-500">
              Fitness Explorer
            </p>

          </div>

        </button>

      </div>

    </header>
  );
}

export default TopNavbar;