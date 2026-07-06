import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

import DashboardCard from "@components/dashboard/DashboardCard";
import SectionHeader from "@components/dashboard/SectionHeader";

import { dashboardData } from "@data/dashboard";

function WeeklyCharts() {
  return (
    <DashboardCard className="h-full">
      <SectionHeader
        title="Weekly Progress"
        subtitle="Calories consumed this week"
      />

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
       <LineChart
  data={dashboardData.weeklyProgress}
  margin={{
    top: 10,
    right: 20,
    left: 20,
    bottom: 5,
  }}
>
            <CartesianGrid
  stroke="#E5E7EB"
  vertical={false}
/>

           <XAxis
  dataKey="day"
  tickLine={false}
  axisLine={false}
  padding={{
    left: 10,
    right: 10,
  }}
/>

            <Tooltip />

            <Line
  type="monotone"
  dataKey="calories"
  stroke="#10b981"
  strokeWidth={4}
  dot={{
    r: 5,
    fill: "#10b981",
  }}
  activeDot={{
    r: 7,
  }}
/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </DashboardCard>
  );
}

export default WeeklyCharts;