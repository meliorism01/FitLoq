import { ArrowRight, Sparkles } from "lucide-react";

function HeroActions() {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row">

      <button
        className="group flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-emerald-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        Continue Workout

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

      <button
        className="group flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
      >
        <Sparkles size={18} />

        Ask AI
      </button>

    </div>
  );
}

export default HeroActions;