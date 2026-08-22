import Navbar from '../components/Navbar'
import ParticleBackground from '../components/ParticleBackground'
import CodebaseSection from '../components/CodebaseSection'
import HowItWorks from '../components/HowItWorks'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="bg-black text-white">

      {/* Hero background */}

      <ParticleBackground />

      <div className="fixed top-0 left-0 z-50 w-full">
    <Navbar />
  </div>


      {/* HERO */}

      <main className="relative">

        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

          <div className="text-center">

            <p className="mb-7 font-mono text-[10px] uppercase tracking-[0.45em] text-slate-500">
              AI-POWERED CODE INTELLIGENCE
            </p>

            <h1 className="text-5xl font-normal tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[80px]">
              Understand your codebase.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              An AI-powered map of your software that helps you
              understand architecture, dependencies and code.
            </p>

            <div className="mt-9">

              <a
                href="/register"
                className="inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-slate-200"
              >
                Explore your codebase
                <span className="ml-2">
                  →
                </span>
              </a>

            </div>

          </div>


          {/* Scroll */}

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">

            <p className="font-mono text-[9px] tracking-[0.45em] text-slate-500">
              SCROLL
            </p>

            <div className="mx-auto mt-3 h-5 w-px bg-slate-800" />

          </div>

        </section>


        {/* CODEBASE */}

        <CodebaseSection />


        {/* HOW IT WORKS */}

        <HowItWorks />


        {/* FINAL CTA */}

        <FinalCTA />

      </main>


      <Footer />

    </div>
  )
}

export default Home