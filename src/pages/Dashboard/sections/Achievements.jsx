import { ChevronRight } from "lucide-react";

import DashboardCard from "@components/dashboard/DashboardCard";
import SectionHeader from "@components/dashboard/SectionHeader";

import { dashboardData } from "@data/dashboard";

function Achievements() {
  return (
    <DashboardCard>

      <SectionHeader
        title="Achievements"
        subtitle="Keep pushing your limits"
      />

      <div className="mt-5 space-y-4">

        {dashboardData.achievements.map((achievement) => (

          <div
            key={achievement.id}
            className="flex items-center justify-between rounded-2xl border border-surface-border p-4 transition hover:bg-surface-bg"
          >

            <div className="flex items-center gap-4">

              <div className="text-3xl">
                {achievement.icon}
              </div>

              <div>

                <h3 className="font-semibold">
                  {achievement.title}
                </h3>

                <p className="text-sm text-ink-500">
                  {achievement.description}
                </p>

              </div>

            </div>

            <div>

              {achievement.unlocked ? (
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Unlocked
                </span>
              ) : (
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                  Locked
                </span>
              )}

            </div>

          </div>

        ))}

      </div>

      <button
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-surface-border py-3 font-semibold transition hover:bg-surface-bg"
      >

        View All

        <ChevronRight size={18} />

      </button>

    </DashboardCard>
  );
}

export default Achievements;