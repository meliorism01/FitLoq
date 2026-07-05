import Container from "@components/layout/Container";
import Card from "@components/ui/Card";
import Button from "@components/ui/Button";
import { motion } from "framer-motion";
import ProgressRing from "@components/ui/ProgressRing";

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-mesh py-20 flex items-center">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-3xl" />
      </div>

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
              ✨ AI Powered • Built for Indian Nutrition
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-5xl font-bold leading-tight text-ink-900 lg:text-7xl">
              Your AI Fitness
              <br />
              <span className="text-gradient-emerald">
                Companion
              </span>
              <br />
              <span className="text-ink-700 text-4xl lg:text-5xl font-semibold">
                Built for Indian Nutrition
              </span>
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
                Start Your Journey
              </Button>

              <Button variant="secondary" size="lg">
                Explore Features
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <h3 className="text-2xl font-bold text-ink-900">
                  10K+
                </h3>
                <p className="text-sm text-ink-500">
                  Meals Logged
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-ink-900">
                  5K+
                </h3>
                <p className="text-sm text-ink-500">
                  Workouts Completed
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-ink-900">
                  98%
                </h3>
                <p className="text-sm text-ink-500">
                  Goal Success
                </p>
              </div>
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
              className="space-y-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
            >
              <div>
                <h3 className="text-xl font-semibold text-ink-900">
                  Good Morning 👋
                </h3>

                <p className="text-sm text-ink-500">
                  Today's Overview
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-xl border border-surface-border p-3">
  <div>
    <p className="font-medium">
      🔥 Calories
    </p>

    <p className="text-sm text-ink-500">
      1860 / 2400 kcal
    </p>
  </div>

  <ProgressRing
    value={78}
    size={60}
    strokeWidth={6}
    label=""
  />
</div>

                <div className="flex items-center justify-between rounded-xl border border-surface-border p-3">
  <div>
    <p className="font-medium">🥩 Protein</p>
    <p className="text-sm text-ink-500">
      132 / 160 g
    </p>
  </div>

  <ProgressRing
    value={82}
    size={58}
    strokeWidth={6}
  />
</div>

               <div className="flex items-center justify-between rounded-xl border border-surface-border p-3">
  <div>
    <p className="font-medium">🍚 Carbs</p>
    <p className="text-sm text-ink-500">
      180 / 250 g
    </p>
  </div>

  <ProgressRing
    value={72}
    size={58}
    strokeWidth={6}
  />
</div>

                <div className="flex items-center justify-between rounded-xl border border-surface-border p-3">
  <div>
    <p className="font-medium">🥑 Fat</p>
    <p className="text-sm text-ink-500">
      60 / 70 g
    </p>
  </div>

  <ProgressRing
    value={86}
    size={58}
    strokeWidth={6}
  />
</div>
               <div className="flex items-center justify-between rounded-xl border border-surface-border p-3">
  <div>
    <p className="font-medium">💧 Water</p>
    <p className="text-sm text-ink-500">
      2.8 / 4 L
    </p>
  </div>

  <ProgressRing
    value={70}
    size={58}
    strokeWidth={6}
  />
</div>
              </div>

              {/* Workout */}
              <div className="rounded-2xl bg-emerald-50 p-4">
                <h4 className="font-semibold text-emerald-700">
                  Today's Workout
                </h4>

                <p className="mt-2 text-sm text-ink-700">
                  Push Day • 5 / 7 Exercises Completed
                </p>
              </div>

              {/* AI Tip */}
              <div className="rounded-2xl bg-blue-50 p-4">
                <h4 className="font-semibold text-blue-700">
                  💡 AI Tip
                </h4>

                <p className="mt-2 text-sm leading-6 text-ink-700">
                  You're only <strong>28g</strong> away from today's protein
                  goal.
                  <br />
                  One grilled chicken breast will complete today's target.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-sm text-ink-500">
          Scroll to Explore
        </p>

        <div className="mt-2 text-2xl text-emerald-600">
          ↓
        </div>
      </motion.div>
    </section>
  );
}



export default Hero;