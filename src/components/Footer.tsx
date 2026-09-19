import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white">

      <div className="section-container grid gap-10 py-12 md:grid-cols-4">

        {/* Brand */}
        <div>
          <img
            src={Logo}
            alt="Dev Stack"
            className="w-36"
          />

          <p className="mt-4 max-w-xs text-xs leading-6 text-slate-500">
           Curated tools, technologies, and resources for developers building
modern software.
          </p>

          <div className="mt-4 flex gap-4 text-xs font-semibold text-slate-500">
            <a href="https://github.com">
              GitHub
            </a>

            <a href="https://twitter.com">
              Twitter
            </a>

            <a href="https://linkedin.com">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-bold text-slate-900">
            Product
          </h3>

          <ul className="mt-4 grid gap-3 text-xs text-slate-500">
            <li>
              <a href="#technologies">
                Home
              </a>
            </li>
            <li>
              <a href="#technologies">
                Technologies
              </a>
            </li>

            <li>
              <a href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-slate-900">
            Company
          </h3>

          <ul className="mt-4 grid gap-3 text-xs text-slate-500">
            <li>
              <a href="#about">
                About
              </a>
            </li>

            <li>
              <a href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a href="#contact">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-slate-900">
            Legal
          </h3>

          <ul className="mt-4 grid gap-3 text-xs text-slate-500">
            <li>
              <a href="#privacy">
                Privacy policy
              </a>
            </li>

            <li>
              <a href="#terms">
                Terms of services
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-100">

        <div className="section-container flex flex-col justify-between gap-3 py-5 text-xs text-slate-400 sm:flex-row">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#privacy">
              Privacy
            </a>

            <a href="#terms">
              Terms
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;