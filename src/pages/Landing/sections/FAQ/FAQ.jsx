import { motion } from "framer-motion";

import Container from "@components/layout/Container";

import FAQItem from "./FAQItem";

const FAQS = [
  {
    question: "Is FitLoq completely free?",
    answer:
      "Yes. During the beta phase, all core features including AI meal tracking, workout logging, nutrition tracking, and progress analytics are completely free.",
  },
  {
    question: "How accurate is the AI Food Scanner?",
    answer:
      "Our AI is trained to recognize a wide variety of Indian meals and provides highly accurate calorie and macronutrient estimates. Accuracy improves continuously as the model evolves.",
  },
  {
    question: "Does FitLoq support Indian cuisine?",
    answer:
      "Absolutely. FitLoq is built specifically for Indian users with support for common Indian dishes, regional cuisines, homemade meals, and local nutritional values.",
  },
  {
    question: "Can I connect my smartwatch?",
    answer:
      "Yes. Google Fit integration will be available first, followed by Apple Health, Strava, and compatible smartwatch brands including Noise where supported.",
  },
  {
    question: "Will my data sync across devices?",
    answer:
      "Yes. Once you sign in, your workouts, meals, goals, and progress will automatically sync across all your devices.",
  },
  {
    question: "Can I use FitLoq offline?",
    answer:
      "Basic tracking will continue offline. Your data will automatically sync with the cloud once you're connected to the internet again.",
  },
  {
    question: "Is my health data secure?",
    answer:
      "Yes. Your personal data is encrypted during transmission and securely stored. We never sell your personal health information.",
  },
  {
    question: "Will Android and iOS apps be available?",
    answer:
      "Yes. The web platform is launching first, followed by native mobile applications with the same seamless experience.",
  },
];

function FAQ() {
  return (
    <section className="bg-white py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl"
        >
          <div className="text-center">
            <div className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              ❓ Frequently Asked Questions
            </div>

            <h2 className="mt-6 text-5xl font-bold text-ink-900">
              Everything You Need
              <br />
              to Know
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink-500">
              Still have questions? We've answered the most common ones below.
            </p>
          </div>

          <div className="mt-16 space-y-5">
            {FAQS.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default FAQ;