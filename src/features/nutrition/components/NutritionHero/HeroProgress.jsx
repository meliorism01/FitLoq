import { nutritionData } from "../../data/nutrition";

function HeroProgress() {
  const { consumed, goal } = nutritionData.calories;
  const progress = (consumed / goal) * 100;

  return (
    <div className="mt-8">

      <div className="h-4 overflow-hidden rounded-full bg-white/20">

        <div
          className="h-full rounded-full bg-white transition-all duration-700"
          style={{ width: `${progress}%` }}
        />

      </div>

    </div>
  );
}

export default HeroProgress;