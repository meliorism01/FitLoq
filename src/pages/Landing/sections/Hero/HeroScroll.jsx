import { motion } from "framer-motion";

function HeroScroll({ visible }) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 20,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="pointer-events-none fixed bottom-8 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex flex-col items-center">
        <p className="mb-3 text-sm font-medium text-ink-500">
          Scroll to Explore
        </p>

        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-primary-500">
          <motion.div
            animate={{
              y: [2, 14, 2],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-1 h-2 w-2 rounded-full bg-primary-500"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default HeroScroll;