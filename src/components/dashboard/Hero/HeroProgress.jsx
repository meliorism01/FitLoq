function HeroProgress() {
  const score = 82;

  return (
    <div className="mt-8">

      <div className="h-4 overflow-hidden rounded-full bg-white/20">

        <div
          className="h-full rounded-full bg-white transition-all duration-1000"
          style={{
            width: `${score}%`,
          }}
        />

      </div>

      <p className="mt-3 text-center text-white/80">
        Excellent Progress 🚀
      </p>

    </div>
  );
}

export default HeroProgress;