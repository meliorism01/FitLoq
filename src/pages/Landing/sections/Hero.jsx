import Container from "@components/layout/Container";
import Card from "@components/ui/Card";
import Button from "@components/ui/Button";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-gradient-mesh flex items-center py-20">
      <Container>
        <div className="flex flex-col-reverse items-center justify-between gap-16 lg:flex-row">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              🇮🇳 Built for Indian Nutrition
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-5xl font-bold leading-tight text-ink-900 lg:text-7xl">
              Your AI Fitness
              <br />
              <span className="text-gradient-emerald">Companion</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink-500">
              Track calories, workouts, nutrition, water intake and AI-powered
              health insights in one beautifully designed platform built for
              India.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">
                Get Started
              </Button>

              <Button variant="secondary" size="lg">
                Explore Features
              </Button>
            </div>

            {/* Feature Chips */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "🤖 AI Coach",
                "🥗 Nutrition",
                "💪 Workout",
                "📈 Analytics",
              ].map((chip) => (
                <div
                  key={chip}
                  className="rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-medium shadow-soft"
                >
                  {chip}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            <Card className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-ink-900">
                  Good Morning 👋
                </h3>
                <p className="text-sm text-ink-500">
                  Today's Overview
                </p>
              </div>

              <div className="space-y-4">
                <Progress title="🔥 Calories" value="1860 / 2400 kcal" percent="78%" />
                <Progress title="🥩 Protein" value="132 / 160 g" percent="82%" />
                <Progress title="🍚 Carbs" value="180 / 250 g" percent="72%" />
                <Progress title="🥑 Fat" value="60 / 70 g" percent="86%" />
                <Progress title="💧 Water" value="2.8 / 4 L" percent="70%" />
              </div>

              <div className="rounded-2xl bg-emerald-50 p-4">
                <h4 className="font-semibold text-emerald-700">
                  Today's Workout
                </h4>

                <p className="mt-2 text-sm text-ink-700">
                  Push Day • 5 / 7 Exercises
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-4">
                <h4 className="font-semibold text-blue-700">
                  AI Tip
                </h4>

                <p className="mt-2 text-sm text-ink-700">
                  You're only <strong>28g</strong> away from today's protein
                  goal.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Progress({ title, value, percent }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-surface-border p-3">
      <div>
        <p className="font-medium text-ink-900">{title}</p>
        <p className="text-sm text-ink-500">{value}</p>
      </div>

      <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
        {percent}
      </div>
    </div>
  );
}

export default Hero;