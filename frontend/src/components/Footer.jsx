import { Link } from 'react-router-dom'

import assets from '../assets/assets'

const Footer = () => {
  return (
    <footer className="border-t border-slate-700/50 bg-[#081728]">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col justify-between gap-10 md:flex-row">

          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/" className="inline-block">
              <img
                src={assets.logo}
                alt="CodeAtlas"
                className="h-16 w-auto"
              />
            </Link>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              AI-powered software engineering intelligence
              for understanding, exploring, and navigating
              complex codebases.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">

            <div>
              <h3 className="text-sm font-semibold text-white">
                Product
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-500">
                <a
                  href="#features"
                  className="block transition hover:text-white"
                >
                  Features
                </a>

                <a
                  href="#how-it-works"
                  className="block transition hover:text-white"
                >
                  How it works
                </a>

                <Link
                  to="/register"
                  className="block transition hover:text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Resources
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-500">
                <a
                  href="#"
                  className="block transition hover:text-white"
                >
                  Documentation
                </a>

                <a
                  href="https://github.com/Rupali2507/code-atlas"
                  className="block transition hover:text-white"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  className="block transition hover:text-white"
                >
                  API
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Account
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-500">
                <Link
                  to="/login"
                  className="block transition hover:text-white"
                >
                  Sign in
                </Link>

                <Link
                  to="/register"
                  className="block transition hover:text-white"
                >
                  Create account
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-700/50 pt-6 sm:flex-row">

          <p className="text-xs text-slate-600">
            © 2026 CodeAtlas. Built for developers.
          </p>

          <a
            href="https://github.com/Rupali2507/code-atlas"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 transition hover:text-white"
            >
            <span className="text-sm font-medium">
                GitHub
            </span>
            </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer