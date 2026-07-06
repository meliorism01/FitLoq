import { Plus } from "lucide-react";

import DashboardCard from "@components/dashboard/DashboardCard";
import SectionHeader from "@components/dashboard/SectionHeader";

import { dashboardData } from "@data/dashboard";

function RecentMeals() {
  return (
    <DashboardCard className="h-full">

      <SectionHeader
        title="Recent Meals"
        subtitle="Today's nutrition"
      />

      <div className="mt-5 space-y-4">

        {dashboardData.meals.map((meal) => (

          <div
            key={meal.id}
            className="rounded-2xl border border-surface-border p-4 transition hover:bg-surface-bg"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-ink-500">

                  {meal.icon} {meal.type}

                </p>

                <h3 className="mt-1 font-semibold">

                  {meal.name}

                </h3>

              </div>

              <div className="text-right">

                <p className="font-semibold">

                  {meal.calories} kcal

                </p>

                <p className="text-sm text-emerald-600">

                  {meal.protein}g Protein

                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

      <button
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-primary-500 py-3 font-semibold text-primary-600 transition hover:bg-primary-50"
      >

        <Plus size={18} />

        Log Meal

      </button>

    </DashboardCard>
  );
}

export default RecentMeals;