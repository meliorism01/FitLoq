import { muscleData } from "./muscleData";
import MuscleCard from "./MuscleCard";

function MuscleStats() {
  return (
    <div className="space-y-6">

      <div>

        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          Muscle Performance
        </p>

        <h2 className="mt-2 text-4xl font-bold text-white">
          Today's Analysis
        </h2>

      </div>

      {muscleData.map((muscle) => (
        <MuscleCard
          key={muscle.id}
          {...muscle}
        />
      ))}

    </div>
  );
}

export default MuscleStats;