import {
  Sparkles,
  ArrowRight,
} from "lucide-react";

import DashboardCard from "@components/dashboard/DashboardCard";
import SectionHeader from "@components/dashboard/SectionHeader";

import { dashboardData } from "@data/dashboard";

function AIInsights() {
  const ai = dashboardData.aiInsight;

  return (
    <DashboardCard className="h-full">

      <SectionHeader
        title="AI Coach"
        subtitle="Personalized recommendation"
      />

      <div className="space-y-5">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-primary-100 p-3">

            <Sparkles
              className="text-primary-600"
              size={22}
            />

          </div>

          <div>

            <h3 className="font-semibold">
              {ai.title}
            </h3>

            <p className="text-sm text-ink-500">
              {ai.confidence}% confidence
            </p>

          </div>

        </div>

        <p className="leading-7 text-ink-700">
          {ai.message}
        </p>

        <div className="rounded-2xl bg-surface-bg p-4">

          <p className="text-xs uppercase tracking-wide text-ink-500">
            Suggested Meal
          </p>

          <h3 className="mt-2 font-semibold">
            🍗 {ai.recommendation}
          </h3>

          <p className="mt-2 text-sm text-ink-500">
            {ai.mealTime}
          </p>

        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-600 py-3 font-semibold text-white transition hover:bg-primary-700">

          Ask AI

          <ArrowRight size={18} />

        </button>

      </div>

    </DashboardCard>
  );
}

export default AIInsights;