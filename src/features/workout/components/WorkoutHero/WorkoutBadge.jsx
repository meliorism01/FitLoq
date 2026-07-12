import { Dumbbell } from "lucide-react";
import { todaysWorkout } from "../../data/workout";

function WorkoutBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-blue-500/30">

      <Dumbbell size={18} />

      {todaysWorkout.workoutType} DAY

    </div>
  );
}

export default WorkoutBadge;