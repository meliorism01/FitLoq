import { CheckCircle2, Trophy } from "lucide-react";

function CompletedExercise({ exercise }) {
  return (
    <div className="group flex items-center justify-between rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-5 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/15">

      <div className="flex items-center gap-4">

        <div className="rounded-full bg-emerald-500/20 p-2">
          <CheckCircle2
            size={26}
            className="text-emerald-400"
          />
        </div>

        <div>

          <h3 className="text-xl font-bold text-white">
            {exercise.name}
          </h3>

          <p className="mt-1 text-blue-100">
            {exercise.sets} × {exercise.reps} • {exercise.weight}
          </p>

        </div>

      </div>

      <div className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2">

        <Trophy
          size={18}
          className="text-yellow-300"
        />

        <span className="text-sm font-semibold text-emerald-200">
          Completed
        </span>

      </div>

    </div>
  );
}

export default CompletedExercise;