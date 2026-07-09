function StreakCard({
  value,
  label,
}) {
  return (
    <div className="flex-1 rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 p-6 text-white">

      <h2 className="text-5xl font-black">
        {value}
      </h2>

      <p className="mt-2">
        {label}
      </p>

    </div>
  );
}

export default StreakCard;