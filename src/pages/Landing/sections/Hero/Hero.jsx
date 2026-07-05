// // import Container from "@components/layout/Container";
// // import Card from "@components/ui/Card";
// // import Button from "@components/ui/Button";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import ProgressRing from "@components/ui/ProgressRing";

// // function Hero() {
// //     const { scrollY } = useScroll();

// // const indicatorOpacity = useTransform(
// //   scrollY,
// //   [0, 250],
// //   [1, 0]
// // );
// //   return (
// //     <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-mesh py-20 flex">
// //       {/* Background Glow */}
// //       <div className="absolute inset-0 pointer-events-none overflow-hidden">
// //         <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
// //         <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-3xl" />
// //       </div>

// //       <Container>
// //         <div className="flex min-h-[calc(100vh-80px)] flex-col-reverse items-center justify-center gap-16 lg:flex-row">
// //           <motion.div
// //             initial={{ opacity: 0, y: 40 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.7 }}
// //             className="max-w-2xl"
// //           >
// //             {/* Badge */}
// //             <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
// //               ✨ AI Powered • Built for Indian Nutrition
// //             </div>

// //             {/* Heading */}
// //             <h1 className="mt-6 text-5xl font-bold leading-tight text-ink-900 lg:text-7xl">
// //               Your AI Fitness
// //               <br />
// //               <span className="text-gradient-emerald">
// //                 Companion
// //               </span>
// //               <br />
// //               <span className="text-ink-700 text-4xl lg:text-5xl font-semibold">
// //                 Built for Indian Nutrition
// //               </span>
// //             </h1>

// //             {/* Subtitle */}
// //             <p className="mt-6 max-w-xl text-lg leading-8 text-ink-500">
// //               Track calories, workouts, nutrition, water intake and AI-powered
// //               health insights in one beautifully designed platform built for
// //               India.
// //             </p>

// //             {/* Buttons */}
// //             <div className="mt-8 flex flex-wrap gap-4">
// //               <Button size="lg">
// //                 Start Your Journey
// //               </Button>

// //               <Button variant="secondary" size="lg">
// //                 Explore Features
// //               </Button>
// //             </div>

// //             {/* Social Proof */}
// //             <div className="mt-8 flex flex-wrap gap-8">
// //               <div>
// //                 <h3 className="text-2xl font-bold text-ink-900">
// //                   10K+
// //                 </h3>
// //                 <p className="text-sm text-ink-500">
// //                   Meals Logged
// //                 </p>
// //               </div>

// //               <div>
// //                 <h3 className="text-2xl font-bold text-ink-900">
// //                   5K+
// //                 </h3>
// //                 <p className="text-sm text-ink-500">
// //                   Workouts Completed
// //                 </p>
// //               </div>

// //               <div>
// //                 <h3 className="text-2xl font-bold text-ink-900">
// //                   98%
// //                 </h3>
// //                 <p className="text-sm text-ink-500">
// //                   Goal Success
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Feature Chips */}
// //             <div className="mt-10 flex flex-wrap gap-3">
// //               {[
// //                 "🤖 AI Coach",
// //                 "🥗 Nutrition",
// //                 "💪 Workout",
// //                 "📈 Analytics",
// //               ].map((chip) => (
// //                 <div
// //                   key={chip}
// //                   className="rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-medium shadow-soft"
// //                 >
// //                   {chip}
// //                 </div>
// //               ))}
// //             </div>
// //           </motion.div>

// //           {/* RIGHT CARD */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 40 }}
// //             animate={{
// //               opacity: 1,
// //               x: 0,
// //               y: [0, -10, 0],
// //             }}
// //             transition={{
// //               opacity: { duration: 0.8 },
// //               x: { duration: 0.8 },
// //               y: {
// //                 duration: 4,
// //                 repeat: Infinity,
// //                 ease: "easeInOut",
// //               },
// //             }}
// //             className="w-full max-w-md"
// //           >
// //             <Card
// //               hover
// //               className="space-y-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
// //             >
              
// //                <div>
// //   <h3 className="text-2xl font-bold text-ink-900">
// //     Good Morning 👋
// //   </h3>

// //   <p className="mt-1 text-sm text-ink-500">
// //     Monday • 6 July
// //   </p>
// // </div>
// //           <div className="rounded-2xl bg-emerald-50 p-4">
// //   <div className="flex items-center justify-between">
// //     <h4 className="font-semibold text-emerald-700">
// //       🎯 Today's Mission
// //     </h4>

// //     <span className="text-sm font-semibold text-emerald-700">
// //       68%
// //     </span>
// //   </div>

// //   <div className="mt-3 h-3 overflow-hidden rounded-full bg-emerald-100">
// //     <div className="h-full w-[68%] rounded-full bg-emerald-500"></div>
// //   </div>
// // </div>    

// //               <div className="space-y-4">
// //                 <div className="flex items-center justify-between rounded-xl border border-surface-border p-3">
// //   <div>
// //     <p className="font-medium">
// //       🔥 Calories
// //     </p>

// //     <p className="text-sm text-ink-500">
// //       1860 / 2400 kcal
// //     </p>
// //   </div>

// //   <ProgressRing
// //     value={78}
// //     size={60}
// //     strokeWidth={6}
// //     label=""
// //   />
// // </div>

// //                 <div className="flex items-center justify-between rounded-xl border border-surface-border p-3">
// //   <div>
// //     <p className="font-medium">🥩 Protein</p>
// //     <p className="text-sm text-ink-500">
// //       132 / 160 g
// //     </p>
// //   </div>

// //   <ProgressRing
// //     value={82}
// //     size={58}
// //     strokeWidth={6}
// //   />
// // </div>

// //                <div className="flex items-center justify-between rounded-xl border border-surface-border p-3">
// //   <div>
// //     <p className="font-medium">🍚 Carbs</p>
// //     <p className="text-sm text-ink-500">
// //       180 / 250 g
// //     </p>
// //   </div>

// //   <ProgressRing
// //     value={72}
// //     size={58}
// //     strokeWidth={6}
// //   />
// // </div>

// //                 <div className="flex items-center justify-between rounded-xl border border-surface-border p-3">
// //   <div>
// //     <p className="font-medium">🥑 Fat</p>
// //     <p className="text-sm text-ink-500">
// //       60 / 70 g
// //     </p>
// //   </div>

// //   <ProgressRing
// //     value={86}
// //     size={58}
// //     strokeWidth={6}
// //   />
// // </div>
// //                <div className="flex items-center justify-between rounded-xl border border-surface-border p-3">
// //   <div>
// //     <p className="font-medium">💧 Water</p>
// //     <p className="text-sm text-ink-500">
// //       2.8 / 4 L
// //     </p>
// //   </div>

// //   <ProgressRing
// //     value={70}
// //     size={58}
// //     strokeWidth={6}
// //   />
// // </div>
// //               </div>

// //               {/* Workout */}
// //              <div className="rounded-2xl bg-orange-50 p-4">
// //   <h4 className="font-semibold text-orange-700">
// //     💪 Today's Workout
// //   </h4>

// //   <p className="mt-2 font-medium">
// //     Push Day
// //   </p>

// //   <p className="text-sm text-ink-500">
// //     5 / 7 Exercises Completed
// //   </p>
// // </div>
// // <div className="rounded-2xl bg-slate-50 p-4">
// //   <h4 className="font-semibold">
// //     🍗 Recent Meal
// //   </h4>

// //   <p className="mt-2 font-medium">
// //     Chicken Rice Bowl
// //   </p>

// //   <p className="text-sm text-ink-500">
// //     650 kcal
// //   </p>
// // </div>
// //               {/* AI Tip */}
// //               <div className="rounded-2xl bg-blue-50 p-4">
// //                 <h4 className="font-semibold text-blue-700">
// //                   💡 AI Tip
// //                 </h4>

// //                 <p className="mt-2 text-sm leading-6 text-ink-700">
// //                   You're only <strong>28g</strong> away from today's protein
// //                   goal.
// //                   <br />
// //                   One grilled chicken breast will complete today's target.
// //                 </p>
// //               </div>
// //             </Card>
// //           </motion.div>
// //         </div>
// //       </Container>
// // {/* Scroll Indicator */}
// // <motion.div
// //   animate={{ y: [0, 10, 0] }}
// //   transition={{
// //     duration: 2,
// //     repeat: Infinity,
// //     ease: "easeInOut",
// //   }}
// //   className="fixed bottom-6 left-1/2 z-[999] flex -translate-x-1/2 flex-col items-center"
// // >
// //   <p className="mb-2 text-sm font-medium text-gray-600">
// //     Scroll to Explore
// //   </p>

// //   <span className="text-3xl text-emerald-600">
// //     ↓
// //   </span>
// // </motion.div>
// //     </section>
// //   );
// // }



// // export default Hero;
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// import Container from "@components/layout/Container";
// import Card from "@components/ui/Card";
// import Button from "@components/ui/Button";
// import ProgressRing from "@components/ui/ProgressRing";

// function Hero() {
//   const heroRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const indicatorOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.35],
//     [1, 0]
//   );

//   return (
//     <section
//       ref={heroRef}
//       className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-mesh py-20"
//     >
//       {/* Background Glow */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-20 -top-32 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

//         <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-3xl" />
//       </div>

//       <Container>
//         <div className="flex min-h-[calc(100vh-80px)] flex-col-reverse items-center justify-center gap-16 lg:flex-row"></div>
//         {/* LEFT CONTENT */}
// <motion.div
//   initial={{ opacity: 0, y: 40 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.7 }}
//   className="max-w-2xl"
// >
//   {/* Badge */}
//   <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
//     ✨ AI Powered • Built for Indian Nutrition
//   </div>

//   {/* Heading */}
//   <h1 className="mt-6 text-5xl font-bold leading-tight text-ink-900 lg:text-7xl">
//     Your AI Fitness
//     <br />
//     <span className="text-gradient-emerald">
//       Companion
//     </span>
//     <br />
//     <span className="text-ink-700 text-4xl lg:text-5xl font-semibold">
//       Built for Indian Nutrition
//     </span>
//   </h1>

//   {/* Subtitle */}
//   <p className="mt-6 max-w-xl text-lg leading-8 text-ink-500">
//     Track calories, workouts, nutrition, water intake and AI-powered
//     health insights in one beautifully designed platform built for
//     India.
//   </p>

//   {/* Buttons */}
//   <div className="mt-8 flex flex-wrap gap-4">
//     <Button size="lg">
//       Start Your Journey
//     </Button>

//     <Button variant="secondary" size="lg">
//       Explore Features
//     </Button>
//   </div>

//   {/* Social Proof */}
//   <div className="mt-8 flex flex-wrap gap-8">
//     <div>
//       <h3 className="text-2xl font-bold text-ink-900">
//         10K+
//       </h3>

//       <p className="text-sm text-ink-500">
//         Meals Logged
//       </p>
//     </div>

//     <div>
//       <h3 className="text-2xl font-bold text-ink-900">
//         5K+
//       </h3>

//       <p className="text-sm text-ink-500">
//         Workouts Completed
//       </p>
//     </div>

//     <div>
//       <h3 className="text-2xl font-bold text-ink-900">
//         98%
//       </h3>

//       <p className="text-sm text-ink-500">
//         Goal Success
//       </p>
//     </div>
//   </div>

//   {/* Feature Chips */}
//   <div className="mt-10 flex flex-wrap gap-3">
//     {[
//       "🤖 AI Coach",
//       "🥗 Nutrition",
//       "💪 Workout",
//       "📈 Analytics",
//     ].map((chip) => (
//       <div
//         key={chip}
//         className="rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-medium shadow-soft"
//       >
//         {chip}
//       </div>
//     ))}
//   </div>
// </motion.div>

// {/* RIGHT CARD */}
// <motion.div
//   initial={{ opacity: 0, x: 40 }}
//   animate={{
//     opacity: 1,
//     x: 0,
//     y: [0, -10, 0],
//   }}
//   transition={{
//     opacity: { duration: 0.8 },
//     x: { duration: 0.8 },
//     y: {
//       duration: 4,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   }}
//   className="w-full max-w-md"
// >
//   <Card
//     hover
//     className="space-y-5 transition-all duration-300"
//   >
//     <div>
//       <h3 className="text-2xl font-bold text-ink-900">
//         Good Morning 👋
//       </h3>

//       <p className="mt-1 text-sm text-ink-500">
//         Monday • 6 July
//       </p>
//     </div>

//     {/* Mission */}
//     <div className="rounded-2xl bg-emerald-50 p-4">
//       <div className="flex items-center justify-between">
//         <h4 className="font-semibold text-emerald-700">
//           🎯 Today's Mission
//         </h4>

//         <span className="text-sm font-semibold text-emerald-700">
//           68%
//         </span>
//       </div>

//       <div className="mt-3 h-3 overflow-hidden rounded-full bg-emerald-100">
//         <div className="h-full w-[68%] rounded-full bg-emerald-500"></div>
//       </div>
//     </div>

//     {/* Rings */}
//     <div className="space-y-4">

//       <div className="flex items-center justify-between rounded-xl border border-surface-border p-3">
//         <div>
//           <p className="font-medium">🔥 Calories</p>
//           <p className="text-sm text-ink-500">
//             1860 / 2400 kcal
//           </p>
//         </div>

//         <ProgressRing value={78} size={58} strokeWidth={6} />
//       </div>

//       <div className="flex items-center justify-between rounded-xl border border-surface-border p-3">
//         <div>
//           <p className="font-medium">🥩 Protein</p>
//           <p className="text-sm text-ink-500">
//             132 / 160 g
//           </p>
//         </div>

//         <ProgressRing value={82} size={58} strokeWidth={6} />
//       </div>

//       <div className="flex items-center justify-between rounded-xl border border-surface-border p-3">
//         <div>
//           <p className="font-medium">💧 Water</p>
//           <p className="text-sm text-ink-500">
//             2.8 / 4L
//           </p>
//         </div>

//         <ProgressRing value={70} size={58} strokeWidth={6} />
//       </div>

//     </div>

//     {/* AI Tip */}
//     <div className="rounded-2xl bg-blue-50 p-4">
//       <h4 className="font-semibold text-blue-700">
//         💡 AI Tip
//       </h4>

//       <p className="mt-2 text-sm leading-6 text-ink-700">
//         You're only <strong>28g</strong> away from today's protein goal.
//         <br />
//         One grilled chicken breast will complete today's target.
//       </p>
//     </div>
//   </Card>
// </motion.div>
//         </div>
//       </Container>

//       {/* Scroll Indicator */}
//       <motion.div
//         style={{
//           opacity: indicatorOpacity,
//         }}
//         animate={{
//           y: [0, 8, 0],
//         }}
//         transition={{
//           y: {
//             duration: 1.8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           },
//         }}
//         className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2"
//       >
//         <div className="flex flex-col items-center">
//           <p className="mb-2 text-sm font-medium text-ink-500">
//             Scroll to Explore
//           </p>

//           {/* Mouse */}
//           <div className="flex h-10 w-6 justify-center rounded-full border-2 border-emerald-500">
//             <motion.div
//               animate={{
//                 y: [2, 14, 2],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="mt-1 h-2 w-2 rounded-full bg-emerald-500"
//             />
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// export default Hero;