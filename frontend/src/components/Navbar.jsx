import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'

const Navbar = () => {
  return (
    <nav className="w-full border-b border-white/10 ">
           <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6'>
            {/* logo */}
                <Link to="/" className='flex items-center'>
                     <img src={assets.logo} alt="CodeAtlas" className='h-15 w-auto' />
                </Link>

            {/* Nav Links */}

                <div className='hidden items-center gap-8 md:flex'>

                    <a href="#features" className='text-sm text-gray-400 transition hover:text-white'>
                        Features
                    </a>
                    <a href="#how-it-works" className='text-sm text-gray-400 transition hover:text-white'>
                        How it works 
                    </a>
                    <a href="#github" className='text-sm ext-gray-400 transition hover:text-white'>
                        GitHub
                    </a>
                </div>
                {/* Authentication */}
                <div className='flex items-cnter gap-3'>
                    <Link to="/login" className='px-4 py-2 text-sm font-medium text-gray-300 transition hover:text-white'>
                       Sign in
                    </Link>
                    <Link to="/register" className='rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-600'>
                       Get Started
                    </Link>
                </div>
           </div>
    </nav>
  )
}

export default Navbar