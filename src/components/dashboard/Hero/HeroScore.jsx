function HeroScore() {
  const score = 82;

  return (
    <div className="mt-10 text-center">

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
        Today's Fit Score
      </p>

      <h2 className="mt-3 text-7xl font-black tracking-tight text-white">
        {score}
        <span className="text-4xl text-white/70"> /100</span>
      </h2>

    </div>
  );
}

export default HeroScore;