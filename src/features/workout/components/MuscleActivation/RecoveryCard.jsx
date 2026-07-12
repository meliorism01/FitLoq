import { ShieldCheck } from "lucide-react";
import { recoverySummary } from "./muscleData";

function RecoveryCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <div className="flex items-center gap-3">

        <div className="rounded-2xl bg-cyan-500/15 p-3">
          <ShieldCheck
            size={24}
            className="text-cyan-400"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Recovery
          </p>

          <h3 className="text-2xl font-bold text-white">
            {recoverySummary.recovery}
          </h3>
        </div>

      </div>

      <div className="mt-6 rounded-2xl bg-cyan-500/10 p-4">

        <p className="text-sm text-cyan-200">
          Recommended Next Workout
        </p>

        <h4 className="mt-2 text-xl font-semibold text-white">
          {recoverySummary.readiness}
        </h4>

      </div>

    </div>
  );
}

export default RecoveryCard;