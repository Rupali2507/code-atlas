import { Link } from 'react-router-dom'
import assets from '../assets/assets'

const Navbar = () => {
  return (
    <header className="absolute left-0 right-0 top-0 z-50">

      <nav className="flex h-20 items-center justify-between px-8 lg:px-16">

        {/* Logo */}

        <Link to="/">
          <img
            src={assets.logo}
            alt="CodeAtlas"
            className="h-20 w-auto"
          />
        </Link>


        {/* Sign In */}

        <Link
          to="/login"
          className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-slate-200"
        >
          Sign in
        </Link>

      </nav>

    </header>
  )
}

export default Navbar