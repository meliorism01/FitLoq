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
import Button from "@components/ui/Button";
import Card from "@components/ui/Card";

function Landing() {
  return (
    <div className="min-h-screen bg-surface-bg flex items-center justify-center px-6">

      <Card
        hover
        padding="lg"
        className="w-full max-w-xl text-center"
      >

        <h1 className="text-6xl font-display font-bold text-gradient-emerald">
          Fitलोक
        </h1>

        <p className="mt-5 text-lg text-ink-500">
          Your AI Fitness Companion
        </p>

        <div className="mt-10">
          <Button size="lg">
            Get Started
          </Button>
        </div>

      </Card>

    </div>
  );
}

export default Landing;