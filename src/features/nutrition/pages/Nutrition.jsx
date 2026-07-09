import NutritionHero from "../components/NutritionHero/NutritionHero";
import MacroOverview from "../components/MacroOverview/MacroOverview";
import QuickActions from "../components/QuickActions/QuickActions";
import MealsTimeline from "../components/MealsTimeline/MealsTimeline";
import NutritionCoach from "../components/NutritionCoach/NutritionCoach";
import NutritionForecast from "../components/NutritionForecast/NutritionForecast";

function Nutrition() {
  return (
    <div className="space-y-8">
      <NutritionHero />

      <MacroOverview />

      <QuickActions />

      <MealsTimeline />

      <NutritionCoach />

      <NutritionForecast />
    </div>
  );
}

export default Nutrition;