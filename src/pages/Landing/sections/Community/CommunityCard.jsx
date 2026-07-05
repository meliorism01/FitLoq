import { motion } from "framer-motion";

function CommunityCard({
  image,
  name,
  role,
  achievement,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-surface-border bg-white p-6 shadow-soft"
    >
      <img
        src={image}
        alt={name}
        className="h-20 w-20 rounded-full object-cover"
      />

      <h3 className="mt-4 text-xl font-semibold text-ink-900">
        {name}
      </h3>

      <p className="text-sm text-emerald-600">
        {role}
      </p>

      <p className="mt-4 text-sm leading-7 text-ink-500">
        "{achievement}"
      </p>
    </motion.div>
  );
}

export default CommunityCard;