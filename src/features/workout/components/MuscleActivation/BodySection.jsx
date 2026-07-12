import MuscleFigure from "./MuscleFigure";

function BodySection() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/80 to-blue-950/80 p-8">

      {/* Background Glow */}
      <div className="absolute h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Decorative Rings */}
      <div className="absolute h-[520px] w-[520px] rounded-full border border-cyan-400/10" />
      <div className="absolute h-[380px] w-[380px] rounded-full border border-cyan-400/10" />

      {/* Heading */}
      <div className="absolute left-8 top-8 z-20">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Today's Focus
        </p>

        <h3 className="mt-2 text-3xl font-bold text-white">
          Chest + Triceps
        </h3>
      </div>

      {/* Figure */}
      <MuscleFigure />

      {/* Bottom Label */}
      <div className="absolute bottom-8 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-3 backdrop-blur-xl">

        <p className="text-sm font-semibold tracking-wide text-cyan-200">
          AI Estimated Muscle Activation
        </p>

      </div>

    </div>
  );
}

export default BodySection;