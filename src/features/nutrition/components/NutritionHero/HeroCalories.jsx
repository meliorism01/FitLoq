import { nutritionData } from "../../data/nutrition";

function HeroCalories() {
  const { consumed, goal } = nutritionData.calories;
  const remaining = goal - consumed;

  return (
    <div className="mt-10 text-center">

      <p className="text-sm uppercase tracking-widest text-white/70">
        Today's Calories
      </p>

      <h2 className="mt-3 text-5xl font-black text-white">
        {consumed}
        <span className="text-3xl font-semibold text-white/80">
          {" "}
          / {goal} kcal
        </span>
      </h2>

      <p className="mt-3 text-lg text-white/90">
        {remaining} kcal remaining
      </p>

    </div>
  );
}

export default HeroCalories;