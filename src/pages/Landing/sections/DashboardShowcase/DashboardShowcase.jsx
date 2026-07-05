import Container from "@components/layout/Container";
import DashboardPreview from "./DashboardPreview";

function DashboardShowcase() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-bold text-ink-900">
            Everything You Need
            <span className="text-gradient-emerald">
              {" "}in One Dashboard
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-ink-500">
            Track nutrition, workouts, hydration,
            AI recommendations and daily goals
            from one beautiful dashboard.
          </p>
        </div>

        <div className="mt-20">
          <DashboardPreview />
        </div>
      </Container>
    </section>
  );
}

export default DashboardShowcase;