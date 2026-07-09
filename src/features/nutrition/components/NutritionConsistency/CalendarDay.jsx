function CalendarDay({ day, score }) {
  let ring =
    "border-slate-200 text-slate-400";

  if (score >= 90)
    ring =
      "border-emerald-500 text-emerald-700";

  else if (score >= 75)
    ring =
      "border-yellow-400 text-yellow-700";

  else if (score > 0)
    ring =
      "border-red-400 text-red-600";

  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-full border-2 font-semibold transition hover:scale-105 ${ring}`}
    >
      {day}
    </div>
  );
}

export default CalendarDay;