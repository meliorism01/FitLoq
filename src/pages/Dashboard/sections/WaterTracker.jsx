import DashboardCard from "@components/dashboard/DashboardCard";
import SectionHeader from "@components/dashboard/SectionHeader";

import { dashboardData } from "@data/dashboard";

function WaterTracker() {
  const { consumed, goal, unit } = dashboardData.water;

  const percentage = Math.round((consumed / goal) * 100);

  return (
    <DashboardCard className="h-full">
      <SectionHeader
        title="Water Tracker"
        subtitle="Stay hydrated"
      />

      <div className="mt-6">

        <div className="flex items-end gap-2">

          <h2 className="text-5xl font-bold text-sky-500">
            {consumed}
          </h2>

          <span className="mb-2 text-lg text-ink-500">
            / {goal} {unit}
          </span>

        </div>

        <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-sky-500 transition-all duration-700"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

        <p className="mt-3 text-sm text-ink-500">
          {percentage}% of today's goal
        </p>

        <div className="mt-8 flex gap-3">

          <button className="flex-1 rounded-xl bg-sky-500 py-3 font-semibold text-white transition hover:bg-sky-600">
            +250 ml
          </button>

          <button className="flex-1 rounded-xl border border-surface-border py-3 font-semibold transition hover:bg-surface-bg">
            +500 ml
          </button>

        </div>

      </div>
    </DashboardCard>
  );
}

export default WaterTracker;