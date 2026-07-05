import { Mail, MapPin } from "lucide-react";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

import Container from "@components/layout/Container";

const PRODUCT = [
  "AI Scanner",
  "Nutrition",
  "Workout Plans",
  "Dashboard",
  "Progress",
];

const COMPANY = [
  "About Us",
  "Roadmap",
  "Blog",
  "Careers",
];

const RESOURCES = [
  "FAQ",
  "Privacy Policy",
  "Terms of Service",
  "Support",
];

const SOCIALS = [
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaXTwitter,
];

function Footer() {
  return (
    <footer className="border-t border-surface-border bg-slate-950 text-white">
      <Container>
        <div className="grid gap-16 py-20 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold text-emerald-400">
              FitLoq
            </h2>

            <p className="mt-5 max-w-md leading-8 text-slate-400">
              India's AI-powered fitness ecosystem built around nutrition,
              smarter workouts, AI insights and healthier habits.
            </p>

            <div className="mt-8 flex gap-4">
              {SOCIALS.map((Icon, index) => (
                <button
                  key={index}
                  className="rounded-xl bg-slate-800 p-3 transition duration-300 hover:bg-emerald-600"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Product */}

          <div>
            <h4 className="text-lg font-semibold">
              Product
            </h4>

            <div className="mt-6 space-y-4">
              {PRODUCT.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-slate-400 transition hover:text-emerald-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}

          <div>
            <h4 className="text-lg font-semibold">
              Company
            </h4>

            <div className="mt-6 space-y-4">
              {COMPANY.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-slate-400 transition hover:text-emerald-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <h4 className="text-lg font-semibold">
              Contact
            </h4>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={18} />
                <span>hello@fitloq.com</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} />
                <span>India</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}

        <div className="flex flex-col items-center justify-between gap-5 border-t border-slate-800 py-8 md:flex-row">

          <p className="text-sm text-slate-500">
            © 2026 FitLoq. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-slate-500">

            {RESOURCES.map((item) => (
              <a
                key={item}
                href="#"
                className="transition hover:text-emerald-400"
              >
                {item}
              </a>
            ))}

          </div>

        </div>

      </Container>
    </footer>
  );
}

export default Footer;