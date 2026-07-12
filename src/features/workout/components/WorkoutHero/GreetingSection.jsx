import { Flame } from "lucide-react";
import { todaysWorkout } from "../../data/workout";

function GreetingSection() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";
  let emoji = "🌙";

  if (hour < 12) {
    greeting = "Good Morning";
    emoji = "☀️";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
    emoji = "🌤";
  }

  return (
    <div className="flex items-start justify-between">

      <div>

        <h1 className="text-5xl font-bold text-white">
          {emoji} {greeting}, {todaysWorkout.greetingName}
        </h1>

        <p className="mt-3 text-xl text-blue-100">
          Ready to hit a new PR today?
        </p>

      </div>

      <div className="flex items-center gap-3 rounded-full border border-orange-400/20 bg-orange-500/10 px-5 py-3 backdrop-blur-md">

  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20">
    <Flame size={18} className="text-orange-400" />
  </div>

  <div>
    <h3 className="text-lg font-bold leading-none text-white">
      {todaysWorkout.streak} Days
    </h3>

    <p className="mt-1 text-xs tracking-wide text-blue-100">
      STREAK
    </p>
  </div>

</div>

    </div>
  );
}

export default GreetingSection;