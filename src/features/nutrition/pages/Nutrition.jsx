import NutritionHero from "../components/NutritionHero/NutritionHero";
import MacroOverview from "../components/MacroOverview/MacroOverview";
import QuickActions from "../components/QuickActions/QuickActions";
import MealsTimeline from "../components/MealsTimeline/MealsTimeline";
import NutritionCoach from "../components/NutritionCoach/NutritionCoach";
import NutritionConsistency from "../components/NutritionConsistency/NutritionConsistency";

function Nutrition() {
  return (
    <div className="space-y-8">
      <NutritionHero />

      <MacroOverview />

      <QuickActions />

      <MealsTimeline />

      <NutritionCoach />

      <NutritionConsistency />
    </div>
  );
}

export default Nutrition;