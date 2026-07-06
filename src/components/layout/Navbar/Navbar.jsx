import { NavLink, Link } from "react-router-dom";
import Container from "@components/layout/Container";
import Button from "@components/ui/Button";
import { NAV_LINKS, ROUTES } from "@constants/routes";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-white/90 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            to={ROUTES.HOME}
            className="text-3xl font-bold text-gradient-emerald"
          >
            Fitलोक
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">

            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-200 font-medium ${
                    isActive
                      ? "text-primary-600"
                      : "text-ink-700 hover:text-primary-500"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

          </div>

          {/* Right Buttons */}
          <div className="hidden lg:flex items-center gap-4">

  <Link to={ROUTES.LOGIN}>
    <Button variant="secondary">
      Login
    </Button>
  </Link>

  <Link to={ROUTES.REGISTER}>
    <Button>
      Get Started
    </Button>
  </Link>

</div>

          {/* Mobile Placeholder */}
          <div className="lg:hidden">

            <button
              className="rounded-xl border border-surface-border p-2"
            >
              ☰
            </button>

          </div>

        </nav>
      </Container>
    </header>
  );
}

export default Navbar;