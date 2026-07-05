import { motion } from "framer-motion";
import { Camera, Sparkles, UtensilsCrossed, Brain } from "lucide-react";

import Container from "@components/layout/Container";
import Button from "@components/ui/Button";

import PhoneMockup from "./PhoneMockup";

const FEATURES = [
  {
    icon: Camera,
    title: "Instant Food Recognition",
    description: "Detect Indian meals in seconds using AI.",
  },
  {
    icon: UtensilsCrossed,
    title: "Accurate Nutrition",
    description: "Calories, protein, carbs and fats instantly.",
  },
  {
    icon: Brain,
    title: "Smart AI Suggestions",
    description: "Personalized recommendations based on your goals.",
  },
  {
    icon: Sparkles,
    title: "Built for India",
    description: "Optimized for Indian cuisine and eating habits.",
  },
];

function AIShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-200/20 blur-3xl" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              🤖 AI Powered Scanner
            </div>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-ink-900">
              Point.
              <br />

              Scan.
              <br />

              Track.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-ink-500">
              Simply point your camera at any meal and let FitLoq
              identify Indian foods, calculate nutrition and
              recommend healthier choices instantly.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-5">
              {FEATURES.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                      <Icon
                        size={22}
                        className="text-emerald-600"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold text-ink-900">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm text-ink-500">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10">
              <Button size="lg">
                Explore AI Scanner
              </Button>
            </div>
          </motion.div>

          {/* RIGHT */}

          <PhoneMockup />
        </div>
      </Container>
    </section>
  );
}

export default AIShowcase;