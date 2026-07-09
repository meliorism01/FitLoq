import DashboardCard from "@components/dashboard/DashboardCard";
import SectionHeader from "@components/dashboard/SectionHeader";

import TimelineItem from "../TimelineItem/TimelineItem";
import MealCard from "../MealCard/MealCard";

import { nutritionData } from "../../data/nutrition";

function MealsTimeline() {
  return (
    <DashboardCard>

      <SectionHeader
        title="Meal Timeline"
        subtitle="Track your meals throughout the day"
      />

      <div className="mt-8 space-y-8">

        {nutritionData.meals.map((meal, index) => (
          <TimelineItem
            key={meal.id}
            last={index === nutritionData.meals.length - 1}
          >
            <MealCard meal={meal} />
          </TimelineItem>
        ))}

      </div>

    </DashboardCard>
  );
}

export default MealsTimeline;