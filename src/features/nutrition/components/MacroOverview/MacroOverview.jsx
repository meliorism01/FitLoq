import DashboardCard from "@components/dashboard/DashboardCard";
import SectionHeader from "@components/dashboard/SectionHeader";

import MacroCard from "../MacroCard/MacroCard";

import { nutritionData } from "../../data/nutrition";

const colors = {
  emerald: "bg-emerald-500",
  orange: "bg-orange-500",
  yellow: "bg-yellow-500",
  purple: "bg-purple-500",
};

function MacroOverview() {
  return (
    <DashboardCard>

      <SectionHeader
        title="Daily Macros"
        subtitle="Track today's nutrition targets"
      />

      <div className="mt-6 grid gap-5 md:grid-cols-2">

        {nutritionData.macros.map((macro) => (

          <MacroCard
            key={macro.id}
            icon={macro.icon}
            title={macro.name}
            consumed={macro.consumed}
            goal={macro.goal}
            color={colors[macro.color]}
          />

        ))}

      </div>

    </DashboardCard>
  );
}

export default MacroOverview;