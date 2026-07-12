function StatCard({
  icon: Icon,
  label,
  value,
  iconColor = "text-blue-400",
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">

      <Icon
        size={26}
        className={iconColor}
      />

      <p className="mt-4 text-sm text-blue-100">
        {label}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-white">
        {value}
      </h3>

    </div>
  );
}

export default StatCard;