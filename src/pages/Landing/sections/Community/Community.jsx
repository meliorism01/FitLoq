import { motion } from "framer-motion";
import { Users, Trophy, Dumbbell, ArrowRight } from "lucide-react";

import Container from "@components/layout/Container";
import Button from "@components/ui/Button";

import CommunityCard from "./CommunityCard";

const MEMBERS = [
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    name: "Rahul Sharma",
    role: "Software Engineer",
    achievement:
      "Lost 14 kg in 6 months while enjoying Indian meals without following restrictive diets.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    name: "Priya Mehta",
    role: "Medical Student",
    achievement:
      "Built a consistent workout routine and gained strength while balancing a hectic schedule.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    name: "Arjun Verma",
    role: "Fitness Enthusiast",
    achievement:
      "Completed a 120-day streak and transformed both fitness habits and nutrition.",
  },
];

function Community() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative text-center"
        >
          <div className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            🌍 Community
          </div>

          <h2 className="mt-6 text-5xl font-bold text-ink-900">
            Join India's Fastest Growing
            <br />
            Fitness Community
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink-500">
            Thousands of people are transforming their health with FitLoq every
            single day.
          </p>

          {/* Stats */}

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-soft">
              <Users className="mx-auto mb-4 text-emerald-600" size={34} />

              <h3 className="text-4xl font-bold">25K+</h3>

              <p className="mt-2 text-ink-500">
                Active Users
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-soft">
              <Dumbbell className="mx-auto mb-4 text-blue-600" size={34} />

              <h3 className="text-4xl font-bold">420K+</h3>

              <p className="mt-2 text-ink-500">
                Workouts Completed
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-soft">
              <Trophy className="mx-auto mb-4 text-orange-500" size={34} />

              <h3 className="text-4xl font-bold">3.2M+</h3>

              <p className="mt-2 text-ink-500">
                Meals Logged
              </p>
            </div>
          </div>

          {/* Stories */}

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {MEMBERS.map((member) => (
              <CommunityCard
                key={member.name}
                {...member}
              />
            ))}
          </div>

          {/* Challenge */}

          <div className="mt-20 rounded-[32px] bg-gradient-emerald-blue p-10 text-white shadow-lift">
            <h3 className="text-3xl font-bold">
              🔥 Weekly Challenge
            </h3>

            <p className="mt-4 text-lg opacity-90">
              Complete 5 workouts this week and unlock the
              <strong> Consistency Champion</strong> badge.
            </p>

            <div className="mt-8">
              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-slate-100"
              >
                Join the Challenge

                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Community;