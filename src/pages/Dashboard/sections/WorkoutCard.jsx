import {
  Clock3,
  ListChecks,
  PlayCircle,
} from "lucide-react";

import DashboardCard from "@components/dashboard/DashboardCard";
import SectionHeader from "@components/dashboard/SectionHeader";

import { dashboardData } from "@data/dashboard";

function WorkoutCard() {
  const workout = dashboardData.workout;

  return (
    <DashboardCard>

      <SectionHeader
        title="Today's Workout"
        subtitle="Your scheduled workout"
      />

      <div className="space-y-5">

        <h2 className="text-3xl font-bold">
          {workout.title}
        </h2>

        <div className="flex items-center gap-6 text-ink-500">

          <div className="flex items-center gap-2">

            <Clock3 size={18} />

            {workout.duration}

          </div>

          <div className="flex items-center gap-2">

            <ListChecks size={18} />

            {workout.exercises} Exercises

          </div>

        </div>

        <button className="mt-3 flex items-center gap-2 rounded-2xl bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700">

          <PlayCircle size={20} />

          Start Workout

        </button>

      </div>

    </DashboardCard>
  );
}

export default WorkoutCard;