import HeroHeader from "./HeroHeader";
import HeroScore from "./HeroScore";
import HeroProgress from "./HeroProgress";
import HeroSummary from "./HeroSummary";
import HeroActions from "./HeroActions";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="rounded-3xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 p-8 shadow-2xl"
>
    <section className="rounded-3xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 p-8 shadow-2xl">
<div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

<div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-teal-300/10 blur-3xl" />
      <HeroHeader />

      <HeroScore />

      <HeroProgress />

      <HeroSummary />

      <HeroActions />

    </section>
    </motion.section>
  );
}

export default Hero;