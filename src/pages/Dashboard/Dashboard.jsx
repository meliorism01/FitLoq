import { motion } from "framer-motion";

import Greeting from "./sections/Greeting";
import StatsRow from "./sections/StatsRow";
import WorkoutCard from "./sections/WorkoutCard";
import WaterTracker from "./sections/WaterTracker";
import WeeklyCharts from "./sections/WeeklyCharts";
import RecentMeals from "./sections/RecentMeals";
import AIInsights from "./sections/AIInsights";
import Achievements from "./sections/Achievements";
import HabitTracker from "./sections/HabitTracker";
import ActivityRings from "./sections/ActivityRings";
import Hero from "@components/dashboard/Hero";

function Dashboard() {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
     <Hero />

<StatsRow />

<div className="grid items-stretch gap-6 lg:grid-cols-3">

  <div className="lg:col-span-2">
    <WeeklyCharts />
  </div>

  <div className="h-full">
    <AIInsights />
  </div>

</div>

<div className="grid gap-6 lg:grid-cols-2">

  <WorkoutCard />

  <WaterTracker />

</div>

<div className="grid gap-6 lg:grid-cols-2">

  <RecentMeals />

  <HabitTracker />

</div>

<ActivityRings />

<Achievements />
    </motion.div>
  );
}

export default Dashboard;