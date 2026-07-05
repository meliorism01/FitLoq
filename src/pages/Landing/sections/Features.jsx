import { motion } from "framer-motion";
import Container from "@components/layout/Container";
import Card from "@components/ui/Card";

const features = [
  {
    icon: "🤖",
    title: "AI Coach",
    description:
      "Receive personalized workout, nutrition, and recovery guidance powered by AI.",
  },
  {
    icon: "🍛",
    title: "Smart Nutrition",
    description:
      "Track Indian meals with accurate macros, calories, and nutrition insights.",
  },
  {
    icon: "💪",
    title: "Workout Planner",
    description:
      "Create and follow structured workout plans tailored to your fitness goals.",
  },
  {
    icon: "📊",
    title: "Progress Analytics",
    description:
      "Visualize your calories, macros, workouts, and body progress with interactive charts.",
  },
];

function Features() {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold text-ink-900 lg:text-5xl">
            Everything You Need
            <span className="text-gradient-emerald"> in One App</span>
          </h2>

          <p className="mt-5 text-lg text-ink-500">
            Fitलोक combines AI coaching, nutrition, workouts, and progress
            tracking into one seamless fitness experience.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Card
                hover
                className="h-full text-center transition-all duration-300"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-ink-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-ink-500">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;