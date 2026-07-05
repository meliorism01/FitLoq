import Navbar from "@components/layout/Navbar";

function LandingLayout({ children }) {
  return (
    <div className="min-h-screen bg-surface-bg">
      <Navbar />

      <main>{children}</main>
    </div>
  );
}

export default LandingLayout;