import DashboardCard from "@components/dashboard/DashboardCard";

import GreetingSection from "./GreetingSection";
import WorkoutBadge from "./WorkoutBadge";
import WorkoutMission from "./WorkoutMission";
import ProgressSection from "./ProgressSection";
import StatsSection from "./StatsSection";
import CTASection from "./CTASection";
import HeroIllustration from "./HeroIllustration";

function WorkoutHero() {
  return (
    <DashboardCard className="space-y-6">
      <GreetingSection />
      <WorkoutBadge />
      <WorkoutMission />
      <ProgressSection />
      <StatsSection />
      <CTASection />
      <HeroIllustration />
    </DashboardCard>
  );
}

export default WorkoutHero;