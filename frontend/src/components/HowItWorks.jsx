import ParticleOrb from './ParticleOrb'

const steps = [
  {
    number: '01',
    title: 'Connect your repository',
    description:
      'Connect a GitHub repository and let CodeAtlas securely inspect your project structure.',
  },
  {
    number: '02',
    title: 'Build your software map',
    description:
      'CodeAtlas analyzes files, dependencies, modules, APIs and relationships across the codebase.',
  },
  {
    number: '03',
    title: 'Understand and explore',
    description:
      'Search your code, explore the architecture and ask AI questions using your repository context.',
  },
]

const HowItWorks = () => {
  return (
    <section className="min-h-screen bg-black px-6 py-32">

      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">


        {/* Left */}

        <div>

          <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-slate-600">
            HOW IT WORKS
          </p>

          <h2 className="mt-6 max-w-xl text-5xl font-normal leading-tight tracking-tight text-white sm:text-6xl">
            Understand your
            <br />
            software.
          </h2>


          <div className="mt-14">

            {steps.map((step) => (
              <div
                key={step.number}
                className="border-t border-slate-900 py-8"
              >

                <div className="flex gap-7">

                  <span className="font-mono text-xs text-slate-700">
                    {step.number}
                  </span>

                  <div>

                    <h3 className="text-base font-medium text-slate-200">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>


        {/* Right visualization */}

        <div className="flex min-h-[550px] items-center justify-center">

          <div className="relative">

            <ParticleOrb />

            {/* subtle glow */}

            <div className="pointer-events-none absolute inset-0 rounded-full bg-white/[0.02] blur-3xl" />

          </div>

        </div>

      </div>

    </section>
  )
}

export default HowItWorks