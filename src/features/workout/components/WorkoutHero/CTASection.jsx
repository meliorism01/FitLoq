import { ArrowRight } from "lucide-react";

function CTASection() {
  return (
    <button
      className="
      group
      flex
      items-center
      justify-center
      gap-3
      rounded-2xl
      bg-gradient-to-r
      from-cyan-400
      to-blue-500
      px-8
      py-5
      text-lg
      font-bold
      text-white
      shadow-xl
      shadow-cyan-500/30
      transition-all
      duration-300
      hover:scale-[1.03]
      hover:shadow-cyan-400/50
    "
    >
      ▶ Continue Workout

      <ArrowRight
        className="transition-transform group-hover:translate-x-1"
        size={22}
      />
    </button>
  );
}

export default CTASection;