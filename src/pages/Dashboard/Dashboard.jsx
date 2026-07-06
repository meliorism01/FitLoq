import Greeting from "./sections/Greeting";
import MicroRings from "./sections/MicroRings";
import WorkoutCard from "./sections/WorkoutCard";
import WaterTracker from "./sections/WaterTracker";
import WeeklyCharts from "./sections/WeeklyCharts";
import RecentMeals from "./sections/RecentMeals";
import AIInsights from "./sections/AIInsights";
import Achievements from "./sections/Achievements";
import HabitTracker from "./sections/HabitTracker";

function Dashboard() {
  return (
    <div className="space-y-8">

      <Greeting />

      <MicroRings />

      <div className="grid gap-6 lg:grid-cols-2">

        <WorkoutCard />

        <WaterTracker />

      </div>

      <WeeklyCharts />

      <div className="grid gap-6 lg:grid-cols-2">

        <RecentMeals />

        <AIInsights />

      </div>

      <Achievements />

       <HabitTracker />

    </div>
  );
}

export default Dashboard;