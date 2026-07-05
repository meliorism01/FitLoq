// function Landing() {
//   return (
//     <div className="min-h-screen bg-slate-50 flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-6xl font-bold text-emerald-600">
//           FitLoq
//         </h1>

//         <p className="mt-4 text-xl text-gray-600">
//           Your AI Fitness Companion for Indian Nutrition & Smart Workouts
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Landing;
// import Button from "@components/ui/Button";

// function Landing() {
//   return (
//     <div className="min-h-screen bg-surface-bg flex flex-col items-center justify-center gap-8">

//       <h1 className="text-6xl font-display font-bold text-gradient-emerald">
//         FitLoq
//       </h1>

//       <p className="text-xl text-ink-500">
//         Your AI Fitness Companion for Indian Nutrition
//       </p>

//       <Button>
//         Get Started
//       </Button>

//     </div>
//   );
// }

// export default Landing;
// import Button from "@components/ui/Button";
// import Card from "@components/ui/Card";

// function Landing() {
//   return (
//     <div className="min-h-screen bg-surface-bg flex items-center justify-center px-6">

//       <Card
//         hover
//         padding="lg"
//         className="w-full max-w-xl text-center"
//       >

//         <h1 className="text-6xl font-display font-bold text-gradient-emerald">
//           Fitलोक
//         </h1>

//         <p className="mt-5 text-lg text-ink-500">
//           Your AI Fitness Companion
//         </p>

//         <div className="mt-10">
//           <Button size="lg">
//             Get Started
//           </Button>
//         </div>

//       </Card>

//     </div>
//   );
// }

// export default Landing;
// import Card from "@components/ui/Card";
// import Button from "@components/ui/Button";
// import Input from "@components/ui/Input";
// import Container from "@components/layout/Container";

// function Landing() {
//   return (
//     <div className="min-h-screen bg-surface-bg flex items-center justify-center p-6">

//       <Card
//         hover
//         padding="lg"
//         className="w-full max-w-xl"
//       >

//         <h1 className="text-5xl font-bold text-center text-gradient-emerald">
//           Fitलोक
//         </h1>

//         <p className="mt-3 mb-8 text-center text-ink-500">
//           Your AI Fitness Companion
//         </p>

//         <Input
//           label="Email"
//           placeholder="Enter your email"
//         helperText="Your credentials remain secure and confidential."
//         />

//         <div className="mt-6">
//           <Button className="w-full">
//             Get Started
//           </Button>
//         </div>

//       </Card>

//     </div>
//   );
// }

// export default Landing;
// import Button from "@components/ui/Button";
// import Card from "@components/ui/Card";
// import Input from "@components/ui/Input";
// import Container from "@components/layout/Container";

// function Landing() {
//   return (
//     <div className="min-h-screen bg-surface-bg flex items-center">
//       <Container>
//         <Card
//           hover
//           padding="lg"
//           className="w-full max-w-xl mx-auto text-center"
//         >
//           <h1 className="text-6xl font-display font-bold text-gradient-emerald">
//             Fitलोक
//           </h1>

//           <p className="mt-4 text-lg text-ink-500">
//             Your AI Fitness Companion
//           </p>

//           <div className="mt-8">
//             <Input
//               label="Email Address"
//               type="email"
//               placeholder="Enter your email"
//               helperText="Your credentials remain secure and confidential."
//             />
//           </div>

//           <div className="mt-8">
//             <Button size="lg" className="w-full">
//               Get Started
//             </Button>
//           </div>
//         </Card>
//       </Container>
//     </div>
//   );
// }

// export default Landing;
// import LandingLayout from "@layouts/LandingLayout";

// function Landing() {
//   return (
//     <LandingLayout>
//       {/* Hero Section will come here */}
//     </LandingLayout>
//   );
// }

// export default Landing;
// import LandingLayout from "@layouts/LandingLayout";

// function Landing() {
//   return (
//     <LandingLayout>

//       <section className="min-h-[calc(100vh-80px)] flex items-center justify-center">

//         <h1 className="text-6xl font-bold text-gradient-emerald">
//           Hero Section Coming Next 🚀
//         </h1>

//       </section>

//     </LandingLayout>
//   );
// }

// export default Landing;
import LandingLayout from "@layouts/LandingLayout";
import Hero from "./sections/Hero";

function Landing() {
  return (
    <LandingLayout>
      <Hero />
    </LandingLayout>
  );
}

export default Landing;