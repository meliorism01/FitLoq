import ProgressRing from "@components/ui/ProgressRing";

function MacroCard({
  emoji,
  title,
  value,
  progress,
}) {
  return (
    <div className="rounded-2xl border border-surface-border bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="flex items-center justify-between">

        <div>
          <p className="font-medium">
            {emoji} {title}
          </p>

          <p className="mt-1 text-sm text-ink-500">
            {value}
          </p>
        </div>

        <ProgressRing
          value={progress}
          size={54}
          strokeWidth={6}
        />

      </div>
    </div>
  );
}

export default MacroCard;