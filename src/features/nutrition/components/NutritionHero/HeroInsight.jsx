import { Sparkles } from "lucide-react";

import { nutritionData } from "../../data/nutrition";

function HeroInsight() {
  return (
    <div className="mt-8 flex gap-4 rounded-3xl bg-white/10 p-5 backdrop-blur-md">

      <div className="rounded-2xl bg-white/20 p-3">

        <Sparkles
          className="text-yellow-300"
          size={22}
        />

      </div>

      <div>

        <h3 className="font-semibold text-white">
          AI Insight
        </h3>

        <p className="mt-2 leading-7 text-white/90">
          {nutritionData.insight}
        </p>

      </div>

    </div>
  );
}

export default HeroInsight;