import { Circle } from "lucide-react";
import { Lock } from "lucide-react";

function UpcomingExercise({ exercise }) {
  return (
    <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">

      <div className="flex items-center gap-4">

        <Circle
          size={22}
          className="text-slate-400"
        />

        <div>

          <h3 className="text-lg font-semibold text-white">
            {exercise.name}
          </h3>

          <p className="mt-1 text-blue-100">
            {exercise.sets} × {exercise.reps} • {exercise.weight}
          </p>

        </div>

      </div>

      <div className="flex items-center gap-2 rounded-full bg-slate-800/70 px-4 py-2">

        <Lock
          size={16}
          className="text-slate-300"
        />

        <span className="text-sm text-slate-300">
          Upcoming
        </span>

      </div>

    </div>
  );
}

export default UpcomingExercise;