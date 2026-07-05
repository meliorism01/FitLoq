import { motion } from "framer-motion";

function ScanAnimation() {
  return (
    <>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Animated Scan Line */}
      <motion.div
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-[3px] bg-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.9)]"
      />

      {/* Scanning Text */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-emerald-700 backdrop-blur"
      >
        🔍 Scanning Food...
      </motion.div>
    </>
  );
}

export default ScanAnimation;