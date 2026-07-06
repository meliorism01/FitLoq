import {
  Flame,
  Beef,
  Droplets,
  Dumbbell,
} from "lucide-react";

import { dashboardData } from "@data/dashboard";

import StatCard from "@components/dashboard/StatCard";

function StatsRow() {
  const stats = dashboardData.stats;

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title={stats[0].title}
        value={stats[0].value}
        unit={` / ${stats[0].target} ${stats[0].unit}`}
        icon={<Flame size={32} />}
        color="text-orange-500"
      />

      <StatCard
        title={stats[1].title}
        value={stats[1].value}
        unit={` / ${stats[1].target} ${stats[1].unit}`}
        icon={<Beef size={32} />}
        color="text-red-500"
      />

      <StatCard
        title={stats[2].title}
        value={stats[2].value}
        unit={` / ${stats[2].target} ${stats[2].unit}`}
        icon={<Droplets size={32} />}
        color="text-blue-500"
      />

      <StatCard
        title={stats[3].title}
        value={stats[3].value}
        icon={<Dumbbell size={32} />}
        color="text-emerald-500"
      />

    </div>
  );
}

export default StatsRow;