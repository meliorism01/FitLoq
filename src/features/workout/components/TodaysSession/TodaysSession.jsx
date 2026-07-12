import DashboardCard from "@components/dashboard/DashboardCard";

import SessionHeader from "./SessionHeader";
import CompletedExercise from "./CompletedExercise";
import CurrentExercise from "./CurrentExercise";
import UpcomingExercise from "./UpcomingExercise";

import { todaysExercises } from "../../data/workout";

function TodaysSession() {
  const completed = todaysExercises.filter(
    (exercise) => exercise.completed
  );

  const current = todaysExercises.find(
    (exercise) => !exercise.completed
  );

  const upcoming = todaysExercises.filter(
    (exercise) =>
      !exercise.completed &&
      exercise.id !== current.id
  );

  return (
    <DashboardCard
      className="
  overflow-hidden
  rounded-[36px]
  bg-gradient-to-br
  from-slate-950
  via-blue-950
  to-slate-900
  px-10
  py-14
"
    >

      <SessionHeader />

      <div className="space-y-5">

        {completed.map((exercise) => (
          <CompletedExercise
            key={exercise.id}
            exercise={exercise}
          />
        ))}

        <CurrentExercise exercise={current} />

        {upcoming.map((exercise) => (
          <UpcomingExercise
            key={exercise.id}
            exercise={exercise}
          />
        ))}

      </div>

    </DashboardCard>
  );
}

export default TodaysSession;