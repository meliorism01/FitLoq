import { motion } from "framer-motion";
import Card from "@components/ui/Card";
import ProgressRing from "@components/ui/ProgressRing";

function StatRow({ emoji, title, value, progress }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-surface-border p-3">
      <div>
        <p className="font-medium">
          {emoji} {title}
        </p>

        <p className="text-sm text-ink-500">
          {value}
        </p>
      </div>

      <ProgressRing
        value={progress}
        size={58}
        strokeWidth={6}
      />
    </div>
  );
}

function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.8 },
        x: { duration: 0.8 },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="w-full max-w-md"
    >
      <Card
        hover
        className="space-y-5"
      >
        {/* Greeting */}
        <div>
          <h3 className="text-2xl font-bold text-ink-900">
            Good Morning 👋
          </h3>

          <p className="mt-1 text-sm text-ink-500">
            Monday • 6 July
          </p>
        </div>

        {/* Mission */}
        <div className="rounded-2xl bg-emerald-50 p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-emerald-700">
              🎯 Today's Mission
            </h4>

            <span className="font-semibold text-emerald-700">
              68%
            </span>
          </div>

          <div className="mt-3 h-3 overflow-hidden rounded-full bg-emerald-100">
            <div className="h-full w-[68%] rounded-full bg-emerald-500"></div>
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-4">
          <StatRow
            emoji="🔥"
            title="Calories"
            value="1860 / 2400 kcal"
            progress={78}
          />

          <StatRow
            emoji="🥩"
            title="Protein"
            value="132 / 160 g"
            progress={82}
          />

          <StatRow
            emoji="💧"
            title="Water"
            value="2.8 / 4 L"
            progress={70}
          />
        </div>

        {/* AI Tip */}
        <div className="rounded-2xl bg-blue-50 p-4">
          <h4 className="font-semibold text-blue-700">
            💡 AI Coach
          </h4>

          <p className="mt-2 text-sm leading-6 text-ink-700">
            You're only <strong>28g</strong> away from today's protein goal.
            One grilled chicken breast will complete today's target.
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

export default HeroDashboard;