import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function AISuggestion() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="rounded-2xl bg-blue-50 p-4"
    >
      <div className="flex items-center gap-2">
        <Sparkles
          size={18}
          className="text-blue-600"
        />

        <h4 className="font-semibold text-blue-700">
          AI Recommendation
        </h4>
      </div>

      <p className="mt-3 text-sm leading-6 text-ink-700">
        You're slightly low on protein today.
      </p>

      <div className="mt-3 rounded-xl bg-white p-3">
        <p className="font-medium">
          🍗 Add one grilled chicken breast
        </p>

        <p className="mt-1 text-sm text-emerald-600">
          +28g Protein • +220 kcal
        </p>
      </div>
    </motion.div>
  );
}

export default AISuggestion;