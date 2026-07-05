import Navbar from "../../components/layout/Navbar";
import Hero from "./sections/Hero";
import DashboardShowcase from "./sections/DashboardShowcase";
import AIShowcase from "./sections/AIShowcase";
import Features from "./sections/Features";
import Community from "./sections/Community";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <DashboardShowcase />
      <AIShowcase />
      <Features />
      <Community />
      <FAQ />
      <Footer />
    </>
  );
}

export default Landing;