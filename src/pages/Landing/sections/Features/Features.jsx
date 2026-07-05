import Container from "@components/layout/Container";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "🤖",
    title: "AI Coach",
    description:
      "Personalized workout, nutrition and recovery recommendations.",
  },
  {
    icon: "🍛",
    title: "Smart Nutrition",
    description:
      "Track Indian meals with accurate calories and macros.",
  },
  {
    icon: "💪",
    title: "Workout Planner",
    description:
      "Structured training plans designed around your fitness goals.",
  },
  {
    icon: "📈",
    title: "Progress Analytics",
    description:
      "Visual insights into calories, strength and body transformation.",
  },
];

function Features() {
  return (
    <section className="py-28 bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-bold text-ink-900">
            Everything You Need
          </h2>

          <p className="mt-6 text-lg text-ink-500">
            One platform for nutrition, workouts,
            AI coaching and progress tracking.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;