import { forwardRef } from "react";

import Container from "@components/layout/Container";

import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

const Hero = forwardRef(function Hero(_, ref) {
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-mesh"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-32 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-3xl" />
      </div>

      <Container>
        <div className="flex min-h-[calc(100vh-80px)] flex-col-reverse items-center justify-center gap-16 py-20 lg:flex-row">

          <HeroContent />

          <HeroDashboard />

        </div>
      </Container>
    </section>
  );
});

export default Hero;