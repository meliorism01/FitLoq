import { nutritionData } from "../../data/nutrition";

function HeroHeader() {
  return (
    <div className="flex items-start justify-between">

      <div>

        <h1 className="text-4xl font-bold text-white">
          🍎 Today's Nutrition
        </h1>

        <p className="mt-2 text-white/80">
          {nutritionData.date}
        </p>

      </div>

      <div className="rounded-2xl bg-white/15 px-5 py-3 backdrop-blur-md">

        <p className="text-sm text-white/70">
          Nutrition Score
        </p>

        <h2 className="text-3xl font-bold text-white">
          {nutritionData.score}
        </h2>

      </div>

    </div>
  );
}

export default HeroHeader;