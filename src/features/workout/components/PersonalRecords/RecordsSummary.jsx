import { Trophy, Flame, TrendingUp } from "lucide-react";
import { summary } from "./recordsData";

function RecordsSummary() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {/* Strongest Lift */}

      <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-cyan-500/20 p-3">
            <Trophy
              size={24}
              className="text-cyan-300"
            />
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Strongest Lift
          </p>
        </div>

        <h3 className="mt-6 text-3xl font-bold text-white">
          {summary.strongestLift}
        </h3>

        <p className="mt-2 text-lg text-blue-100">
          {summary.strongestValue}
        </p>
      </div>

      {/* Total PR */}

      <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-blue-500/20 p-3">
            <Flame
              size={24}
              className="text-blue-300"
            />
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-blue-300">
            Total PRs
          </p>
        </div>

        <h3 className="mt-6 text-5xl font-black text-white">
          {summary.totalPRs}
        </h3>

        <p className="mt-2 text-blue-100">
          Lifetime Personal Records
        </p>
      </div>

      {/* Monthly */}

      <div className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-emerald-500/20 p-3">
            <TrendingUp
              size={24}
              className="text-emerald-300"
            />
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
            Monthly Progress
          </p>
        </div>

        <h3 className="mt-6 text-5xl font-black text-white">
          +{summary.monthlyPRs}
        </h3>

        <p className="mt-2 text-blue-100">
          New Personal Records
        </p>
      </div>
    </div>
  );
}

export default RecordsSummary;