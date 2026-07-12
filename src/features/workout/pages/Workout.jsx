import WorkoutHero from "../components/WorkoutHero/WorkoutHero";
import TodaysSession from "../components/TodaysSession";
import MuscleActivation from "../components/MuscleActivation";

function Workout() {
  return (
    <div className="space-y-8">
      <WorkoutHero />

      <TodaysSession />

      <MuscleActivation />
    </div>
  );
}

export default Workout;