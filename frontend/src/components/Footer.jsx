import { Link } from 'react-router-dom'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <footer className="border-t border-slate-900 bg-black">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7">

        <Link to="/">
          <img
            src={assets.logo}
            alt="CodeAtlas"
            className="h-11 w-auto"
          />
        </Link>

        <p className="text-xs text-slate-700">
          © {new Date().getFullYear()} CodeAtlas
        </p>

        <a
          href="https://github.com/Rupali2507/code-atlas"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-slate-600 transition hover:text-white"
        >
          GitHub
        </a>

      </div>

    </footer>
  )
}

export default Footer