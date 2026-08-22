import ParticleOrb from './ParticleOrb'

const features = [
  {
    title: 'Repository intelligence',
    description:
      'Understand files, modules, frameworks and the structure of your entire repository.',
    position: 'left-top',
  },
  {
    title: 'Dependency mapping',
    description:
      'See how modules, services and packages depend on one another.',
    position: 'left-middle',
  },
  {
    title: 'Code relationships',
    description:
      'Trace functions, classes and APIs across your codebase.',
    position: 'left-bottom',
  },
  {
    title: 'Architecture discovery',
    description:
      'Automatically uncover the architecture hidden inside your repository.',
    position: 'right-top',
  },
  {
    title: 'AI code understanding',
    description:
      'Ask questions and receive answers grounded in your actual source code.',
    position: 'right-middle',
  },
  {
    title: 'Context-aware search',
    description:
      'Find the exact code and relationships you need without digging through files.',
    position: 'right-bottom',
  },
]

const FeatureItem = ({ feature }) => {
  const isLeft =
    feature.position.startsWith('left')

  return (
    <div
      className={`flex items-start gap-4 ${
        isLeft
          ? 'flex-row-reverse text-right'
          : 'text-left'
      }`}
    >

      <div
        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500`}
      />

      <div>

        <h3 className="text-sm font-medium text-slate-200">
          {feature.title}
        </h3>

        <p className="mt-2 max-w-xs text-xs leading-5 text-slate-600">
          {feature.description}
        </p>

      </div>

    </div>
  )
}

const CodebaseSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-6 py-32">

      <div className="mx-auto max-w-7xl">

        <div className="relative grid min-h-[760px] grid-cols-1 items-center lg:grid-cols-3">


          {/* Left features */}

          <div className="hidden space-y-20 lg:block">

            {features
              .filter((feature) =>
                feature.position.startsWith('left')
              )
              .map((feature) => (
                <FeatureItem
                  key={feature.title}
                  feature={feature}
                />
              ))}

          </div>


          {/* Center */}

          <div className="relative flex flex-col items-center justify-center">

            <ParticleOrb />

            <div className="pointer-events-none absolute bottom-4 text-center">

              <h2 className="text-5xl font-normal tracking-tight text-white">
                Meet your
                <br />
                codebase.
              </h2>

              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.45em] text-slate-600">
                YOUR SOFTWARE, IN CONTEXT
              </p>

            </div>

          </div>


          {/* Right features */}

          <div className="hidden space-y-20 lg:block">

            {features
              .filter((feature) =>
                feature.position.startsWith('right')
              )
              .map((feature) => (
                <FeatureItem
                  key={feature.title}
                  feature={feature}
                />
              ))}

          </div>

        </div>


        {/* Mobile features */}

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:hidden">

          {features.map((feature) => (
            <FeatureItem
              key={feature.title}
              feature={feature}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default CodebaseSection