import { motion } from "framer-motion";

import HeroHeader from "./HeroHeader";
import HeroCalories from "./HeroCalories";
import HeroProgress from "./HeroProgress";
import HeroInsight from "./HeroInsight";

function NutritionHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 p-8 shadow-2xl"
    >
      <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-yellow-200/20 blur-3xl" />

      <HeroHeader />

      <HeroCalories />

      <HeroProgress />

      <HeroInsight />
    </motion.section>
  );
}

export default NutritionHero;