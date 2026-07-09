import { Sparkles } from "lucide-react";

function HeroSummary() {
  return (
    <div className="mt-8 flex items-start gap-4 rounded-3xl bg-white/10 p-5 backdrop-blur-md">

      <div className="rounded-2xl bg-white/20 p-3">

        <Sparkles
          size={22}
          className="text-yellow-300"
        />

      </div>

      <div>

        <h3 className="font-semibold text-white">
          AI Daily Brief
        </h3>

        <p className="mt-2 leading-7 text-white/80">
          You're only <strong>24g</strong> away from your protein goal.
          Finish today's workout to push your Fit Score above <strong>90</strong>.
        </p>

      </div>

    </div>
  );
}

export default HeroSummary;