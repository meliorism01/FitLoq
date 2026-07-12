import { Play } from "lucide-react";

function CurrentExercise({ exercise }) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8 shadow-[0_0_60px_rgba(34,211,238,0.18)]">

      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/20 blur-[90px]" />

      <div className="relative z-10">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              Current Exercise
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white">
              {exercise.name}
            </h2>

            <p className="mt-3 text-lg text-blue-100">
              {exercise.sets} × {exercise.reps} • {exercise.weight}
            </p>

          </div>

          <div className="rounded-2xl bg-cyan-500/20 px-5 py-4 text-center">

            <p className="text-xs uppercase tracking-widest text-cyan-300">
              Rest
            </p>

            <h3 className="mt-1 text-3xl font-bold text-white">
              90s
            </h3>

          </div>

        </div>

        <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 text-lg font-bold text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]">

          <Play size={22} />

          Start Exercise

        </button>

      </div>

    </div>
  );
}

export default CurrentExercise;