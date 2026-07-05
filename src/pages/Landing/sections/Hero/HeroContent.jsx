import { motion } from "framer-motion";
import Button from "@components/ui/Button";

function HeroContent() {
  return (
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
        Track calories, nutrition, workouts, hydration and AI-powered coaching
        in one beautifully crafted fitness platform designed for India.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <Button size="lg">
          Start Your Journey
        </Button>

        <Button variant="secondary" size="lg">
          Explore Features
        </Button>
      </div>

      {/* Stats */}
      <div className="mt-10 flex flex-wrap gap-8">
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
            Workouts
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
          "🍛 Nutrition",
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
  );
}

export default HeroContent;