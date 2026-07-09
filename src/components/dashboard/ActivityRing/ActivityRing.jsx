function ActivityRing({
  label,
  value,
  color,
  size = 120,
  stroke = 10,
}) {
  const radius = (size - stroke) / 2;

  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">

      <div className="relative">

        <svg
          width={size}
          height={size}
          className="-rotate-90"
        >

          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#E5E7EB"
            strokeWidth={stroke}
          />

          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000"
          />

        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <span className="text-2xl font-bold">
            {value}%
          </span>

        </div>

      </div>

      <p className="mt-3 font-semibold">

        {label}

      </p>

    </div>
  );
}

export default ActivityRing;