function NutritionResult({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-surface-border bg-slate-50 px-4 py-3">
      <p className="text-sm font-medium text-ink-600">
        {label}
      </p>

      <p className="font-bold text-emerald-600">
        {value}
      </p>
    </div>
  );
}

export default NutritionResult;