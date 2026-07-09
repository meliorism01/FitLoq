function MealCard({ meal }) {
  return (
    <div className="rounded-3xl border border-surface-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-xl font-bold">
            {meal.icon} {meal.title}
          </h3>

          <p className="mt-1 text-sm text-ink-500">
            {meal.time}
          </p>

        </div>

        <div className="rounded-xl bg-emerald-50 px-4 py-2">

          <p className="font-semibold text-emerald-700">
            {meal.calories} kcal
          </p>

        </div>

      </div>

      <div className="mt-5 flex flex-wrap gap-2">

        {meal.foods.length ? (
          meal.foods.map((food) => (
            <span
              key={food}
              className="rounded-full bg-surface-bg px-3 py-1 text-sm"
            >
              {food}
            </span>
          ))
        ) : (
          <button className="rounded-xl border border-dashed border-emerald-400 px-4 py-2 text-sm font-medium text-emerald-600 transition hover:bg-emerald-50">
            + Add Meal
          </button>
        )}

      </div>

      {meal.completed && (
        <div className="mt-5 flex items-center justify-between text-sm">

          <span className="text-ink-500">
            Protein
          </span>

          <span className="font-semibold">
            {meal.protein} g
          </span>

        </div>
      )}

    </div>
  );
}

export default MealCard;