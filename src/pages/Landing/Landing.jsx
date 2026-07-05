import Navbar from "../../components/layout/Navbar";
import Hero from "./sections/Hero";
import DashboardShowcase from "./sections/DashboardShowcase";
import AIShowcase from "./sections/AIShowcase";
import Features from "./sections/Features";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <DashboardShowcase />
      <AIShowcase />
      <Features />
    </>
  );
}

export default Landing;