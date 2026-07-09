import DashboardCard from "@components/dashboard/DashboardCard";
import SectionHeader from "@components/dashboard/SectionHeader";

import StreakCard from "./StreakCard";
import CalendarDay from "./CalendarDay";
import Legend from "./Legend";

import { nutritionData } from "../../data/nutrition";

const weekdays = [
  "Mo",
  "Tu",
  "We",
  "Th",
  "Fr",
  "Sa",
  "Su",
];

function NutritionConsistency() {
  const { consistency } = nutritionData;

  return (
    <DashboardCard>

      <SectionHeader
        title="Nutrition Consistency"
        subtitle="Build healthy habits every day"
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <StreakCard
          value={consistency.currentStreak}
          label="Current Streak 🔥"
        />

        <StreakCard
          value={consistency.bestStreak}
          label="Best Streak 🏆"
        />

      </div>

      <h3 className="mt-10 text-center text-xl font-bold">
        {consistency.month}
      </h3>

      <div className="mt-6 grid grid-cols-7 gap-3">

        {weekdays.map((day) => (

          <div
            key={day}
            className="text-center text-sm font-semibold text-ink-500"
          >
            {day}
          </div>

        ))}

        {consistency.calendar.map((item) => (

          <CalendarDay
            key={item.day}
            day={item.day}
            score={item.score}
          />

        ))}

      </div>

      <Legend />

    </DashboardCard>
  );
}

export default NutritionConsistency;