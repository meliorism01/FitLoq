import { motion } from "framer-motion";
import Card from "@components/ui/Card";

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <Card className="h-full p-8 text-center transition-all duration-300">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-100 text-4xl">
          {icon}
        </div>

        <h3 className="mt-6 text-2xl font-bold text-ink-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-ink-500">
          {description}
        </p>
      </Card>
    </motion.div>
  );
}

export default FeatureCard;