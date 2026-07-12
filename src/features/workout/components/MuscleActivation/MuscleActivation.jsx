import DashboardCard from "@components/dashboard/DashboardCard";

import BodySection from "./BodySection";
import MuscleStats from "./MuscleStats";
import RecoveryCard from "./RecoveryCard";
import AIInsightCard from "./AIInsightCard";

function MuscleActivation() {
  return (
    <DashboardCard className="overflow-hidden rounded-[36px] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">

      <div className="border-b border-white/10 px-10 py-8">

       <p className="text-xl font-bold uppercase tracking-[0.2em] text-cyan-400">
  Muscle Activation
</p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          AI Muscle Analysis
        </h2>

        <p className="mt-2 max-w-2xl text-lg text-blue-100">
          Based on today's workout, FitLoq estimates muscle fatigue,
          activation, and recovery recommendations.
        </p>

      </div>

      <div className="grid gap-10 p-10 xl:grid-cols-[1.1fr_0.9fr]">

        <BodySection />

        <MuscleStats />

      </div>

      <div className="grid gap-6 border-t border-white/10 bg-black/10 p-8 lg:grid-cols-2">

        <RecoveryCard />

        <AIInsightCard />

      </div>

    </DashboardCard>
  );
}

export default MuscleActivation;