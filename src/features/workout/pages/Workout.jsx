import WorkoutHero from "../components/WorkoutHero/WorkoutHero";
import TodaysSession from "../components/TodaysSession";
import MuscleActivation from "../components/MuscleActivation";
import PersonalRecords from "../components/PersonalRecords";

function Workout() {
  return (
    <div className="space-y-8">
      <WorkoutHero />

      <TodaysSession />

      <MuscleActivation />

      <PersonalRecords />
    </div>
  );
}

export default Workout;