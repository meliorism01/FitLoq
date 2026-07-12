import DashboardCard from "@components/dashboard/DashboardCard";

import GreetingSection from "./GreetingSection";
import WorkoutBadge from "./WorkoutBadge";
import WorkoutMission from "./WorkoutMission";
import ProgressSection from "./ProgressSection";
import StatsSection from "./StatsSection";
import CTASection from "./CTASection";
import HeroIllustration from "./HeroIllustration";
import WorkoutChips from "./WorkoutChips";

function WorkoutHero() {
  return (
    <DashboardCard
  className="
  overflow-hidden
  rounded-[36px]
  bg-gradient-to-br
  from-slate-950
  via-blue-950
  to-slate-900
px-12 py-4
  shadow-2xl
"
>

      <div className="grid items-center gap-14 xl:grid-cols-[1.3fr_0.7fr]">
        {/* LEFT */}

        <div className="space-y-8">

          <GreetingSection />

          <WorkoutBadge />

          <WorkoutMission />

          <WorkoutChips />

          <ProgressSection />

          <StatsSection />

          <CTASection />

        </div>

        {/* RIGHT */}

        <HeroIllustration />

      </div>

    </DashboardCard>
  );
}

export default WorkoutHero;