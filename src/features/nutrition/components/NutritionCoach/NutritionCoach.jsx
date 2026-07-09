import { Sparkles, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

import DashboardCard from "@components/dashboard/DashboardCard";
import SectionHeader from "@components/dashboard/SectionHeader";

import { nutritionData } from "../../data/nutrition";

function NutritionCoach() {
  const { coach } = nutritionData;

  return (
    <DashboardCard>

      <SectionHeader
        title="Daily AI Coach"
        subtitle="Personalized nutrition guidance"
      />

      <div className="mt-6 space-y-6">

        <div className="flex items-center justify-between rounded-2xl bg-emerald-50 p-5">

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-emerald-500 p-3 text-white">
              <Sparkles size={24} />
            </div>

            <div>

              <h3 className="font-bold">
                {coach.greeting}
              </h3>

              <p className="text-sm text-ink-500">
                AI Confidence
              </p>

            </div>

          </div>

          <span className="text-3xl font-bold text-emerald-600">
            {coach.score}%
          </span>

        </div>

        <div className="space-y-3">

          {coach.positives.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-xl bg-emerald-50 p-4"
            >
              <CheckCircle2 className="mt-0.5 text-emerald-600" size={20} />
              <p>{item}</p>
            </div>
          ))}

          {coach.warnings.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-xl bg-orange-50 p-4"
            >
              <AlertTriangle className="mt-0.5 text-orange-500" size={20} />
              <p>{item}</p>
            </div>
          ))}

        </div>

        <div className="rounded-2xl bg-surface-bg p-5">

          <p className="text-xs uppercase tracking-wide text-ink-500">
            Dinner Recommendation
          </p>

          <p className="mt-2 font-medium">
            {coach.recommendation}
          </p>

        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700">

          {coach.button}

          <ArrowRight size={18} />

        </button>

      </div>

    </DashboardCard>
  );
}

export default NutritionCoach;