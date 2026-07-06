import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <main className="min-h-screen bg-surface-bg">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Panel */}

        <section className="hidden bg-gradient-emerald-blue lg:flex items-center justify-center p-16">

          <div className="max-w-lg text-white">

            <h1 className="text-5xl font-bold leading-tight">
              Welcome to
              <br />
              FitLoq
            </h1>

            <p className="mt-8 text-lg leading-8 opacity-90">
              Your AI-powered fitness companion designed for smarter
              nutrition, personalized workouts and healthier habits.
            </p>

            <div className="mt-16 space-y-5">

              <div>✅ AI Food Recognition</div>

              <div>✅ Smart Workout Plans</div>

              <div>✅ Real-time Progress Tracking</div>

              <div>✅ Indian Nutrition Database</div>

            </div>

          </div>

        </section>

        {/* Right Panel */}

        <section className="flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </section>

      </div>
    </main>
  );
}

export default AuthLayout;