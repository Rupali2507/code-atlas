import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import assets from '../assets/assets'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Register = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
        e.preventDefault()
        if(formData.name == null || formData.email==null || formData.password==null || formData.confirmPassword==null){
          toast.error('All fields are required')
          return
        }
        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match')
            return
        }

        toast.success('Account created successfully!')

        console.log(formData)

        navigate('/dashboard')
    }

   

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#03070d] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-0 flex-1">

        <div className="grid h-full lg:grid-cols-2">

          {/* Left Section */}
          <div className="hidden border-r border-slate-700/50 p-10 lg:flex lg:flex-col lg:items-center">

            {/* Center Content */}
            <div className="flex flex-1 items-center">

              <div className="max-w-lg">

                <p className="mb-5 text-md font-medium text-indigo-400">
                  YOUR CODEBASE, IN CONTEXT
                </p>

                <h1 className="text-4xl font-bold leading-[1.15] xl:text-5xl">
                  Build a map of

                  <span className="block text-slate-400">
                    your software.
                  </span>
                </h1>

                <p className="mt-7 max-w-md text-base leading-7 text-slate-500">
                  Connect your repository and let CodeAtlas analyze
                  its structure, dependencies, architecture and code.
                </p>

              </div>

            </div>

          </div>


          {/* Right Section */}
          <div className="flex items-center justify-center px-6">

            <div className="w-full max-w-md">

              {/* Mobile Logo */}
              <Link
                to="/"
                className="mb-6 block lg:hidden"
              >
                <img
                  src={assets.logo}
                  alt="CodeAtlas"
                  className="h-8 w-auto"
                />
              </Link>


              {/* Heading */}
              <div className="mb-6">

                <h2 className="text-3xl font-bold">
                  Create your account
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Start understanding your codebase with CodeAtlas.
                </p>

              </div>


              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-3"
              >

                {/* Name */}
                <div>

                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-lg border border-slate-700  px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                  />

                </div>


                {/* Email */}
                <div>

                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-slate-700  px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                  />

                </div>


                {/* Password */}
                <div>

                  <label
                    htmlFor="password"
                    className="mb-1.5 block text-sm font-medium text-slate-300"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    required
                    className="w-full rounded-lg border border-slate-700  px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                  />

                </div>


                {/* Confirm Password */}
                <div>

                  <label
                    htmlFor="confirmPassword"
                    className="mb-1.5 block text-sm font-medium text-slate-300"
                  >
                    Confirm password
                  </label>

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                    className="w-full rounded-lg border border-slate-700  px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                  />

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="mt-2 w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                >
                  Create account
                </button>

              </form>


              {/* Divider */}
              <div className="my-5 flex items-center gap-4">

                <div className="h-px flex-1 bg-slate-800" />

                <span className="text-xs text-slate-600">
                  OR
                </span>

                <div className="h-px flex-1 bg-slate-800" />

              </div>


              {/* GitHub */}
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-lg border border-slate-700 bg-[#081728] px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:text-white"
              >
                Continue with GitHub
              </button>


              {/* Login */}
              <p className="mt-5 text-center text-sm text-slate-500">

                Already have an account?{' '}

                <Link
                  to="/login"
                  className="font-medium text-indigo-400 transition hover:text-indigo-300"
                >
                  Sign in
                </Link>

              </p>

            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Register