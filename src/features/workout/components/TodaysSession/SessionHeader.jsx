import { CalendarDays } from "lucide-react";
import { todaysExercises } from "../../data/workout";

function SessionHeader() {
  const completed = todaysExercises.filter(
    (exercise) => exercise.completed
  ).length;

  const progress = Math.round(
    (completed / todaysExercises.length) * 100
  );

  return (
    <div className="mb-8">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xl font-bold uppercase tracking-[0.2em] text-cyan-400">
  Today's Session
</p>
          <h2 className="mt-3 text-[2.8rem] font-extrabold tracking-tight text-white">
            Complete Your Push Workout
          </h2>

          <p className="mt-2 text-blue-200">
            Stay focused and finish every exercise.
          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">

          <div className="flex items-center gap-3">

            <CalendarDays className="text-cyan-400" />

            <div>

              <h3 className="text-2xl font-bold text-white">
                {completed}/{todaysExercises.length}
              </h3>

              <p className="text-xs uppercase tracking-widest text-cyan-300">
                Completed
              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">

        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}

export default SessionHeader;