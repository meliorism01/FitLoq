import {
  Flame,
  Plus,
  CheckCircle2,
  Circle,
} from "lucide-react";

import DashboardCard from "@components/dashboard/DashboardCard";
import SectionHeader from "@components/dashboard/SectionHeader";

import { dashboardData } from "@data/dashboard";

function HabitTracker() {
  const habits = dashboardData.habits;

  return (
    <DashboardCard className="h-full">

      <SectionHeader
        title="Habit Tracker"
        subtitle="Build consistency"
      />

      <div className="mt-6">

        <div className="mb-6 flex items-center gap-3">

          <div className="rounded-xl bg-orange-100 p-3">

            <Flame
              size={22}
              className="text-orange-500"
            />

          </div>

          <div>

            <p className="text-sm text-ink-500">
              Current Streak
            </p>

            <h2 className="text-2xl font-bold">
              {habits.streak} Days
            </h2>

          </div>

        </div>

        <div className="space-y-4">

          {habits.items.map((habit) => (

            <div
              key={habit.id}
              className="flex items-center justify-between"
            >

              <span className="font-medium">

                {habit.name}

              </span>

              {habit.completed ? (

                <CheckCircle2
                  className="text-emerald-500"
                  size={22}
                />

              ) : (

                <Circle
                  className="text-gray-400"
                  size={22}
                />

              )}

            </div>

          ))}

        </div>

        <div className="mt-8">

          <p className="mb-3 text-sm font-semibold">
            Weekly Consistency
          </p>

          <div className="flex justify-between">

            {["M","T","W","T","F","S","S"].map(
              (day, index) => (

                <div
                  key={day + index}
                  className="flex flex-col items-center gap-2"
                >

                  <span className="text-xs text-ink-500">
                    {day}
                  </span>

                  <div
                    className={`h-4 w-4 rounded-full ${
                      habits.weekly[index]
                        ? "bg-emerald-500"
                        : "bg-gray-300"
                    }`}
                  />

                </div>

              )
            )}

          </div>

        </div>

        <button
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-primary-500 py-3 font-semibold text-primary-600 transition hover:bg-primary-50"
        >

          <Plus size={18} />

          Add Habit

        </button>

      </div>

    </DashboardCard>
  );
}

export default HabitTracker;