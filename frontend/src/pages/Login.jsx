import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import assets from '../assets/assets'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Login = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
  e.preventDefault()

  if (!formData.email || !formData.password) {
    toast.error('Please fill in all fields')
    return
  }

  toast.success('Login successful!')

  console.log(formData)

  navigate('/dashboard')
}

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#0b1c30] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-0 flex-1">

        <div className="grid h-full lg:grid-cols-2">

          {/* Left Section */}
          <div className="hidden border-r border-slate-700/50 p-10 lg:flex lg:flex-col">

            {/* Center Content */}
            <div className="flex flex-1 items-center">

              <div className="max-w-lg">

                <p className="mb-5 text-sm font-medium text-indigo-400">
                  CODE INTELLIGENCE
                </p>

                <h1 className="text-4xl font-bold leading-[1.15] xl:text-5xl">
                  Understand your

                  <span className="block">
                    codebase.
                  </span>

                  <span className="mt-2 block text-slate-400">
                    Build with
                    <br />
                    confidence.
                  </span>
                </h1>

                <p className="mt-7 max-w-md text-base leading-7 text-slate-500">
                  CodeAtlas helps developers explore repositories,
                  understand architecture, trace dependencies and
                  interact with their codebase using AI.
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
                className="mb-8 block lg:hidden"
              >
                <img
                  src={assets.logo}
                  alt="CodeAtlas"
                  className="h-8 w-auto"
                />
              </Link>


              {/* Heading */}
              <div className="mb-7">

                <h2 className="text-3xl font-bold">
                  Welcome back
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Sign in to continue to CodeAtlas.
                </p>

              </div>


              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* Email */}
                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
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
                    className="w-full rounded-lg border border-slate-700 bg-[#081728] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                  />

                </div>


                {/* Password */}
                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-slate-300"
                    >
                      Password
                    </label>

                    <a
                      href="#"
                      className="text-xs text-indigo-400 transition hover:text-indigo-300"
                    >
                      Forgot password?
                    </a>

                  </div>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-lg border border-slate-700 bg-[#081728] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                  />

                </div>


                {/* Sign In */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
                >
                  Sign in
                </button>

              </form>


              {/* Divider */}
              <div className="my-6 flex items-center gap-4">

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


              {/* Register */}
              <p className="mt-6 text-center text-sm text-slate-500">

                Don't have an account?{' '}

                <Link
                  to="/register"
                  className="font-medium text-indigo-400 hover:text-indigo-300"
                >
                  Create one
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

export default Login