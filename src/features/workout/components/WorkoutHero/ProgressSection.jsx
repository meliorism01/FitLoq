import { todaysWorkout } from "../../data/workout";

function ProgressSection() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <div className="mb-4 flex items-center justify-between">

        <h3 className="text-lg font-semibold text-white">
          Workout Progress
        </h3>

        <span className="text-3xl font-bold text-blue-400">
          {todaysWorkout.progress}%
        </span>

      </div>

      <div className="h-4 overflow-hidden rounded-full bg-white/10">

        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-300 transition-all duration-700"
          style={{
            width: `${todaysWorkout.progress}%`,
          }}
        />

      </div>

      <p className="mt-4 text-lg text-blue-100">

        {todaysWorkout.completedExercises} / {todaysWorkout.totalExercises} Exercises Completed

      </p>

    </div>
  );
}

export default ProgressSection;