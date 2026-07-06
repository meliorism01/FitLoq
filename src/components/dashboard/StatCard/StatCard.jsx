import DashboardCard from "../DashboardCard";
import AnimatedCounter from "@components/ui/AnimatedCounter";

function StatCard({
  title,
  value,
  unit,
  icon,
  color = "text-primary-600",
}) {
  return (
    <DashboardCard>

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-ink-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">

            {typeof value === "number" ? (
  <AnimatedCounter end={value} />
) : (
  value
)}

            {unit && (
              <span className="ml-1 text-lg font-medium">
                {unit}
              </span>
            )}

          </h2>

        </div>

        <div className={color}>

          {icon}

        </div>

      </div>

    </DashboardCard>
  );
}

export default StatCard;