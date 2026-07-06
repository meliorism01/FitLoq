import { motion } from "framer-motion";
import DashboardCard from "@components/dashboard/DashboardCard";

function Greeting() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <DashboardCard className="bg-gradient-emerald text-white">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-lg opacity-90">
              {today}
            </p>

            <h1 className="mt-3 text-4xl font-bold">
              {greeting}, Manik 👋
            </h1>

            <p className="mt-3 max-w-lg text-white/90">
              You're doing amazing. Stay consistent and
              finish today's goals.
            </p>

          </div>

          <div className="hidden lg:flex h-28 w-28 items-center justify-center rounded-full bg-white/15 text-5xl backdrop-blur">
            🔥
          </div>

        </div>

      </DashboardCard>
    </motion.div>
  );
}

export default Greeting;