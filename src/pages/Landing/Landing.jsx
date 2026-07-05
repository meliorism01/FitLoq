import { useRef } from "react";
import { useInView } from "framer-motion";

import LandingLayout from "@layouts/LandingLayout";

import Hero from "./sections/Hero";
import HeroScroll from "./sections/Hero/HeroScroll";
import Features from "./sections/Features";

function Landing() {
  const heroRef = useRef(null);

  const heroVisible = useInView(heroRef, {
    amount: 0.7,
  });

  return (
    <LandingLayout>
      <Hero ref={heroRef} />

      <HeroScroll visible={heroVisible} />

      <Features />
    </LandingLayout>
  );
}

export default Landing;