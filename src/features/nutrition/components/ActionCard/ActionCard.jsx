import { ArrowRight } from "lucide-react";

function ActionCard({
  icon,
  title,
  description,
  buttonText,
  gradient,
}) {
  return (
    <div
      className={`group rounded-3xl p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${gradient}`}
    >
      <div className="mb-6 text-5xl">
        {icon}
      </div>

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-white/90 leading-7">
        {description}
      </p>

      <button className="mt-8 flex items-center gap-2 font-semibold">
        {buttonText}

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </div>
  );
}

export default ActionCard;