import Bodybuilder from "@assets/images/workout/bodybuilder.png";

function HeroIllustration() {
  return (
    <div className="relative flex h-full items-center justify-center">

      {/* Glow */}

      <div className="absolute h-96 w-96 rounded-full bg-cyan-500/20 blur-[100px]" />

      {/* Image */}

      <img
        src={Bodybuilder}
        alt="Workout Focus"
       className="
  relative
  z-10
  h-[1100px]
  w-auto
  object-contain
"
      />

    </div>
  );
}

export default HeroIllustration;