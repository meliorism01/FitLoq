import {
  Clock3,
  Flame,
  Dumbbell,
} from "lucide-react";

import { todaysWorkout } from "../../data/workout";

import StatCard from "./StatCard";

function StatsSection() {
  return (
    <div className="grid gap-5 md:grid-cols-3">

      <StatCard
        icon={Clock3}
        label="Duration"
        value={todaysWorkout.duration}
        iconColor="text-cyan-400"
      />

      <StatCard
        icon={Flame}
        label="Calories"
        value={`${todaysWorkout.calories} kcal`}
        iconColor="text-orange-400"
      />

      <StatCard
        icon={Dumbbell}
        label="Volume"
        value={todaysWorkout.volume}
        iconColor="text-blue-400"
      />

    </div>
  );
}

export default StatsSection;