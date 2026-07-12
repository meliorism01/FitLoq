import Bodybuilder from "@assets/images/workout/bodybuilder.png";

function MuscleFigure() {
  return (
    <div className="relative z-10 flex justify-center">

      {/* Glow Behind Body */}
      <div className="absolute top-1/2 h-[420px] w-[250px] -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[80px]" />

      {/* Main Image */}
      <img
        src={Bodybuilder}
        alt="Muscle Activation"
        className="
          relative
          h-[560px]
          object-contain
          drop-shadow-[0_0_60px_rgba(34,211,238,0.45)]
          transition-transform
          duration-500
          hover:scale-105
        "
      />

     

    </div>
  );
}

export default MuscleFigure;