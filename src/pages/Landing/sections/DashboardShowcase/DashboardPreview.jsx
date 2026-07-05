import { motion } from "framer-motion";
import Card from "@components/ui/Card";
import MacroCard from "./MacroCard";

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <Card className="mx-auto max-w-6xl rounded-3xl p-8 shadow-lift">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-bold text-ink-900">
              Good Morning 👋
            </h3>

            <p className="mt-1 text-ink-500">
              Here's your fitness summary for today
            </p>
          </div>

          <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Day 24 Streak 🔥
          </div>
        </div>

        {/* Macro Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <MacroCard
            emoji="🔥"
            title="Calories"
            value="1860 / 2400 kcal"
            progress={78}
          />

          <MacroCard
            emoji="🥩"
            title="Protein"
            value="132 / 160 g"
            progress={82}
          />

          <MacroCard
            emoji="🥑"
            title="Fat"
            value="60 / 70 g"
            progress={86}
          />

          <MacroCard
            emoji="💧"
            title="Water"
            value="2.8 / 4 L"
            progress={70}
          />
        </div>

        {/* Bottom Grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Mission */}
          <div className="rounded-2xl bg-emerald-50 p-6">
            <h4 className="font-semibold text-emerald-700">
              🎯 Today's Mission
            </h4>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-emerald-100">
              <div className="h-full w-[68%] rounded-full bg-emerald-500" />
            </div>

            <p className="mt-3 text-sm text-ink-500">
              68% completed
            </p>
          </div>

          {/* Meal */}
          <div className="rounded-2xl bg-slate-50 p-6">
            <h4 className="font-semibold">
              🍛 Recent Meal
            </h4>

            <p className="mt-4 font-semibold">
              Chicken Rice Bowl
            </p>

            <p className="text-sm text-ink-500">
              650 kcal • 42g Protein
            </p>
          </div>

          {/* AI Coach */}
          <div className="rounded-2xl bg-blue-50 p-6">
            <h4 className="font-semibold text-blue-700">
              🤖 AI Coach
            </h4>

            <p className="mt-4 text-sm leading-7 text-ink-700">
              You're only
              <strong> 28g protein </strong>
              away from today's goal.

              Add one grilled chicken breast to complete it.
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default DashboardPreview;