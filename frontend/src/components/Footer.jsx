import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-slate-700/40 bg-[#0b1c30]">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-5 text-xs text-slate-500">
        <span>© 2026 CodeAtlas</span>

        <span className="mx-2 text-slate-700">·</span>

        <span>Built for developers</span>

        <span className="mx-2 text-slate-700">·</span>

        <a
          href="https://github.com/Rupali2507/code-atlas"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-white"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer