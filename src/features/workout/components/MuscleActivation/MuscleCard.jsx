function MuscleCard({
  name,
  activation,
  status,
  recovery,
  color,
  glow,
}) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        ${glow}
      `}
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <h3 className="text-xl font-bold text-white">
          {name}
        </h3>

        <span
          className={`
            rounded-full
            bg-gradient-to-r
            ${color}
            px-3
            py-1
            text-xs
            font-semibold
            text-white
          `}
        >
          {status}
        </span>

      </div>

      {/* Percentage */}

      <div className="mt-6 flex items-end justify-between">

        <div>

          <p className="text-sm text-blue-200">
            Activation
          </p>

          <h2 className="text-5xl font-black text-white">
            {activation}%
          </h2>

        </div>

        <div className="text-right">

          <p className="text-sm text-blue-200">
            Recovery
          </p>

          <h4 className="text-lg font-bold text-cyan-300">
            {recovery}
          </h4>

        </div>

      </div>

      {/* Progress */}

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">

        <div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          style={{
            width: `${activation}%`,
          }}
        />

      </div>

    </div>
  );
}

export default MuscleCard;