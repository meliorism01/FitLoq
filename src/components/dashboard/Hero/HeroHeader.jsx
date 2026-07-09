import { Flame } from "lucide-react";

function HeroHeader() {
  const now = new Date();

  const greeting =
    now.getHours() < 12
      ? "Good Morning"
      : now.getHours() < 18
      ? "Good Afternoon"
      : "Good Evening";

  const date = now.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  const time = now.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="flex items-start justify-between">

      <div>

        <h1 className="text-4xl font-bold text-white">
          👋 {greeting}, Manik
        </h1>

        <p className="mt-2 text-white/80">
          {date} • {time}
        </p>

      </div>

      <div className="flex items-center gap-2 rounded-2xl bg-white/15 px-4 py-2 backdrop-blur-md">

        <Flame
          size={20}
          className="text-orange-300"
        />

        <span className="font-semibold text-white">
          12 Day Streak
        </span>

      </div>

    </div>
  );
}

export default HeroHeader;