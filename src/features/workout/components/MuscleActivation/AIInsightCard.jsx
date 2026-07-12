import { Sparkles } from "lucide-react";
import { aiInsight } from "./muscleData";

function AIInsightCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-6 backdrop-blur-xl">

      <div className="flex items-center gap-3">

        <div className="rounded-2xl bg-cyan-500/15 p-3">
          <Sparkles
            size={24}
            className="text-cyan-300"
          />
        </div>

        <h3 className="text-2xl font-bold text-white">
          {aiInsight.title}
        </h3>

      </div>

      <p className="mt-5 leading-7 text-blue-100">
        {aiInsight.description}
      </p>

    </div>
  );
}

export default AIInsightCard;