import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "Technologies",
    "Projects",
    "About",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="section-container">

        {/* Desktop Navbar */}
        <div className="hidden h-[72px] items-center justify-between md:flex">

          {/* Logo */}
          <a href="#home">
            <img
              src={Logo}
              alt="Dev Stack"
              className="w-36"
            />
          </a>

          {/* Menu */}
          <nav>
            <ul className="flex items-center gap-7 text-sm font-medium text-slate-600">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="nav-link"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">

            <button className="px-3 py-2 text-sm font-semibold text-slate-700">
              Sign In
            </button>

            <button className="gradient-bg rounded-full px-5 py-2.5 text-sm font-semibold text-white">
              Sign Up
            </button>

          </div>
        </div>


        {/* Mobile Navbar */}
        <div className="flex h-[68px] items-center justify-between md:hidden">

          {/* Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-xl"
            aria-label="Open menu"
          >
            ☰
          </button>


          {/* Logo */}
          <a href="#home">
            <img
              src={Logo}
              alt="Dev Stack"
              className="w-32"
            />
          </a>


          {/* Sign Up */}
          <button className="gradient-bg rounded-full px-4 py-2 text-xs font-semibold text-white">
            Sign Up
          </button>

        </div>


        {/* Mobile Menu */}
        {open && (
          <nav className="border-t border-slate-100 py-3 md:hidden">

            <ul className="grid gap-1">

              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
                  >
                    {link}
                  </a>
                </li>
              ))}

            </ul>

          </nav>
        )}

      </div>
    </header>
  );
};

export default Nav;