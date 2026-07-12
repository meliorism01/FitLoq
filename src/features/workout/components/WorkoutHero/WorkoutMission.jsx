import { todaysWorkout } from "../../data/workout";

function WorkoutMission() {
  return (
    <div>

      <h2 className="text-6xl font-extrabold text-white">
        💪 {todaysWorkout.title}
      </h2>

      <p className="mt-3 text-3xl text-blue-200">
        {todaysWorkout.subtitle}
      </p>

    </div>
  );
}

export default WorkoutMission;