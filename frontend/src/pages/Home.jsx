import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0b1c30] text-white">
     <Navbar/>
      {/* Hero Section */}
      <section className="relative overflow-hidden">

        {/* Background glow */}
        <div className="absolute left-1/2 top-0 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-24 text-center">

          {/* Small badge */}
          <div className="mb-6 rounded-full border border-indigo-400/20 bg-indigo-400/5 px-4 py-2 text-sm text-indigo-300">
            AI-powered software engineering intelligence
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Understand your
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              codebase.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            CodeAtlas analyzes your repository, maps its architecture,
            connects dependencies, and helps you understand your code
            with AI-powered intelligence.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              to="/register"
              className="rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition hover:bg-indigo-600"
            >
              Analyze Repository
            </Link>

            <a
              href="#features"
              className="rounded-lg border border-slate-700 bg-slate-900/30 px-6 py-3 font-medium text-slate-300 transition hover:border-slate-600 hover:text-white"
            >
              Explore Features
            </a>

          </div>

        </div>
      </section>


      {/* Product Preview */}
      <section className="mx-auto max-w-6xl px-6 pb-24">

        <div className="overflow-hidden rounded-xl border border-slate-700/60 bg-[#081728] shadow-2xl shadow-black/20">

          {/* Fake browser header */}
          <div className="flex items-center gap-2 border-b border-slate-700/60 px-5 py-4">

            <div className="h-3 w-3 rounded-full bg-red-400/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <div className="h-3 w-3 rounded-full bg-green-400/70" />

            <div className="ml-4 flex-1 rounded-md bg-slate-900/70 px-4 py-2 text-left text-xs text-slate-500">
              app.codeatlas.dev/repositories/ecommerce
            </div>

          </div>


          {/* Dashboard preview */}
          <div className="grid min-h-[420px] grid-cols-12">

            {/* Sidebar */}
            <div className="col-span-3 border-r border-slate-700/60 p-5">

              <div className="mb-8 text-sm font-semibold text-white">
                ecommerce-platform
              </div>

              <div className="space-y-3 text-sm text-slate-500">
                <div className="rounded-md bg-indigo-500/10 px-3 py-2 text-indigo-300">
                  Overview
                </div>

                <div className="px-3 py-2">
                  Files
                </div>

                <div className="px-3 py-2">
                  Code Search
                </div>

                <div className="px-3 py-2">
                  Architecture
                </div>

                <div className="px-3 py-2">
                  Ask CodeAtlas
                </div>

                <div className="px-3 py-2">
                  Health
                </div>
              </div>

            </div>


            {/* Main dashboard */}
            <div className="col-span-9 p-6">

              <div className="mb-6">
                <h3 className="text-xl font-semibold">
                  Repository Overview
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  AI-powered understanding of your codebase
                </p>
              </div>


              {/* Stats */}
              <div className="grid grid-cols-4 gap-4">

                <div className="rounded-lg border border-slate-700/60 bg-slate-900/30 p-4">
                  <p className="text-xs text-slate-500">Files</p>
                  <p className="mt-2 text-2xl font-semibold">184</p>
                </div>

                <div className="rounded-lg border border-slate-700/60 bg-slate-900/30 p-4">
                  <p className="text-xs text-slate-500">Functions</p>
                  <p className="mt-2 text-2xl font-semibold">621</p>
                </div>

                <div className="rounded-lg border border-slate-700/60 bg-slate-900/30 p-4">
                  <p className="text-xs text-slate-500">Dependencies</p>
                  <p className="mt-2 text-2xl font-semibold">34</p>
                </div>

                <div className="rounded-lg border border-slate-700/60 bg-slate-900/30 p-4">
                  <p className="text-xs text-slate-500">API Routes</p>
                  <p className="mt-2 text-2xl font-semibold">27</p>
                </div>

              </div>


              {/* AI Question Preview */}
              <div className="mt-6 rounded-lg border border-slate-700/60 bg-slate-900/30 p-5">

                <p className="text-sm text-slate-500">
                  Ask CodeAtlas
                </p>

                <p className="mt-3 text-sm text-slate-200">
                  How does authentication work in this project?
                </p>

                <div className="mt-4 border-l-2 border-indigo-400 pl-4">

                  <p className="text-sm leading-6 text-slate-400">
                    Authentication is handled through JWT-based
                    middleware. The login controller validates
                    credentials and generates a token, while protected
                    routes use authentication middleware to verify it.
                  </p>

                  <div className="mt-3 flex gap-2">
                    <span className="rounded bg-indigo-500/10 px-2 py-1 text-xs text-indigo-300">
                      authController.js
                    </span>

                    <span className="rounded bg-indigo-500/10 px-2 py-1 text-xs text-indigo-300">
                      authMiddleware.js
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </section>


      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-6 pb-24"
      >

        <div className="mb-12 text-center">

          <p className="text-sm font-medium text-indigo-400">
            WHAT CODEATLAS UNDERSTANDS
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Your entire codebase, in context.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Explore your repository from structure to individual
            functions, dependencies, and AI-powered explanations.
          </p>

        </div>


        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: 'Repository Intelligence',
              description:
                'Automatically analyze files, languages, dependencies, functions, and APIs.',
            },
            {
              title: 'Code Search',
              description:
                'Find files, functions, classes, and APIs across your entire repository.',
            },
            {
              title: 'Architecture Graph',
              description:
                'Visualize how different parts of your application connect and depend on each other.',
            },
            {
              title: 'AI Codebase Q&A',
              description:
                'Ask questions about your repository and get answers grounded in actual source code.',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-700/60 bg-[#081728] p-6 transition hover:-translate-y-1 hover:border-indigo-400/30"
            >

              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                ◆
              </div>

              <h3 className="font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* Final CTA */}
      <section className="border-t border-slate-800/60">

        <div className="mx-auto max-w-4xl px-6 py-24 text-center">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Stop getting lost in your codebase.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Connect a repository and let CodeAtlas build a map of
            your software.
          </p>

          <Link
            to="/register"
            className="mt-8 inline-block rounded-lg bg-indigo-500 px-6 py-3 font-medium transition hover:bg-indigo-600"
          >
            Get Started
          </Link>

        </div>

      </section>
      <Footer/>

    </div>
  )
}

export default Home