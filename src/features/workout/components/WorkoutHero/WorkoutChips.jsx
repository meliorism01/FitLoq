import {
  Clock3,
  Activity,
  Target,
} from "lucide-react";

import { todaysWorkout } from "../../data/workout";

function WorkoutChips() {
  return (
    <div className="flex flex-wrap gap-4">

      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur">
        <Clock3 size={18} className="text-blue-300" />
        <span>{todaysWorkout.duration}</span>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur">
        <Activity size={18} className="text-green-300" />
        <span>Intermediate</span>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur">
        <Target size={18} className="text-orange-300" />
        <span>{todaysWorkout.totalExercises} Exercises</span>
      </div>

    </div>
  );
}

export default WorkoutChips;