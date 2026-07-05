import { motion } from "framer-motion";

import ScanAnimation from "./ScanAnimation";
import NutritionResult from "./NutritionResult";
import AISuggestion from "./AISuggestion";

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="relative w-[340px] rounded-[42px] border-[10px] border-black bg-white p-4 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">

        {/* Dynamic Island */}

        <div className="absolute left-1/2 top-3 h-7 w-36 -translate-x-1/2 rounded-full bg-black" />

        {/* Screen */}

        <div className="overflow-hidden rounded-[32px] bg-white">

          {/* Food Image */}

          <div className="relative h-[280px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80"
              alt="Healthy Meal"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />

            <ScanAnimation />

            <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold backdrop-blur">
              🍛 Rajma Chawal
            </div>

          </div>

          {/* Nutrition */}

          <div className="space-y-4 p-5">

            <div>

              <h3 className="text-xl font-bold text-ink-900">
                AI Detection Complete
              </h3>

              <p className="text-sm text-emerald-600">
                98% Confidence
              </p>

            </div>

            <div className="space-y-3">

              <NutritionResult
                label="Calories"
                value="620 kcal"
              />

              <NutritionResult
                label="Protein"
                value="22 g"
              />

              <NutritionResult
                label="Carbs"
                value="95 g"
              />

              <NutritionResult
                label="Fat"
                value="12 g"
              />

            </div>

            <AISuggestion />

          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default PhoneMockup;