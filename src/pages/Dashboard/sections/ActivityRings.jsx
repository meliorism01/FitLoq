import DashboardCard from "@components/dashboard/DashboardCard";
import SectionHeader from "@components/dashboard/SectionHeader";

import ActivityRing from "@components/dashboard/ActivityRing";

function ActivityRings() {
  return (
    <DashboardCard>

      <SectionHeader
        title="Daily Progress"
        subtitle="Today's activity"
      />

      <div className="mt-8 flex justify-around">

        <ActivityRing
          label="Calories"
          value={78}
          color="#ef4444"
        />

        <ActivityRing
          label="Water"
          value={83}
          color="#0ea5e9"
        />

        <ActivityRing
          label="Workout"
          value={65}
          color="#10b981"
        />

      </div>

    </DashboardCard>
  );
}

export default ActivityRings;