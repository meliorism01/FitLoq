function MacroCard({
  icon,
  title,
  consumed,
  goal,
  color,
}) {
  const percentage = Math.min(
    Math.round((consumed / goal) * 100),
    100
  );

  const remaining = Math.max(goal - consumed, 0);

  return (
    <div className="rounded-2xl border border-surface-border bg-white p-5 shadow-sm transition hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <span className="text-3xl">
            {icon}
          </span>

          <div>

            <h3 className="font-semibold">
              {title}
            </h3>

            <p className="text-sm text-ink-500">
              {consumed} / {goal} g
            </p>

          </div>

        </div>

        <span className="font-bold text-ink-700">
          {percentage}%
        </span>

      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-surface-bg">

        <div
          className={`h-full rounded-full ${color}`}
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="mt-3 text-sm text-ink-500">

        {remaining === 0
          ? "Goal achieved ✅"
          : `${remaining} g left`}

      </p>

    </div>
  );
}

export default MacroCard;