function HeroCalories() {
  return (
    <div className="mt-10 flex items-end justify-between">

      <div>

        <p className="text-sm uppercase tracking-wider text-white/70">
          Consumed
        </p>

        <h2 className="mt-2 text-5xl font-black text-white">
          1820
        </h2>

        <p className="mt-1 text-white/80">
          kcal
        </p>

      </div>

      <div className="text-right">

        <p className="text-sm uppercase tracking-wider text-white/70">
          Remaining
        </p>

        <h2 className="mt-2 text-4xl font-bold text-white">
          580
        </h2>

        <p className="mt-1 text-white/80">
          kcal
        </p>

      </div>

    </div>
  );
}

export default HeroCalories;