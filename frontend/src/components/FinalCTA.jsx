import { Link } from 'react-router-dom'

const FinalCTA = () => {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center bg-black px-6">

      <div className="text-center">

        <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-slate-600">
          YOUR CODEBASE, UNDERSTOOD
        </p>

        <h2 className="mt-7 text-5xl font-normal tracking-tight text-white sm:text-6xl lg:text-7xl">
          Stop getting lost
          <br />
          in your code.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-slate-600">
          Connect your repository and let CodeAtlas
          build the map for you.
        </p>

        <Link
          to="/register"
          className="mt-9 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-slate-200"
        >
          Explore CodeAtlas
          <span className="ml-2">
            →
          </span>
        </Link>

      </div>

    </section>
  )
}

export default FinalCTA