function RecordCard({ record }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-2xl font-bold text-white">
            {record.exercise}
          </h3>

          <p className="mt-2 text-blue-100">
            Personal Best
          </p>

        </div>

        <div className="text-right">

          <h2 className="text-4xl font-black text-white">
            {record.value}
          </h2>

          <span
            className={`
              mt-3
              inline-flex
              rounded-full
              bg-gradient-to-r
              ${record.color}
              px-4
              py-2
              text-sm
              font-semibold
              text-white
            `}
          >
            {record.improvement}
          </span>

        </div>

      </div>

      <div className="mt-6">

        <div className="mb-3 flex items-center justify-between">

          <span className="text-blue-200">
            Strength Level
          </span>

          <span className="font-semibold text-cyan-300">
            {record.level}
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">

          <div
            className={`h-full rounded-full bg-gradient-to-r ${record.color}`}
            style={{
              width: `${record.progress}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}

export default RecordCard;