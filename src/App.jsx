import Spline from '@splinetool/react-spline';

function App() {
  const handlePrimary = () => {
    const el = document.getElementById('inquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSecondary = () => {
    window.location.href = 'mailto:sales@sandeepmetalworks.com?subject=Inquiry%20-%20Sandeep%20Metal%20Works';
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 3D Industrial Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle dark gradient for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

      {/* Content */}
      <section className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="max-w-3xl text-left text-white">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-sm font-medium tracking-wide text-white/90">Trusted by Manufacturers Across India</span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Precision Metal Fabrication Built for Reliability and Strength
            </h1>

            {/* Subheadline */}
            <p className="mt-4 text-lg text-white/90 md:text-xl">
              ISO-certified processes. Guaranteed dimensional accuracy.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={handlePrimary}
                className="rounded-md bg-amber-500 px-6 py-3 text-base font-semibold text-black shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Get a Quote"
              >
                Get a Quote
              </button>

              <button
                onClick={handleSecondary}
                className="rounded-md border border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:border-white/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Speak with an Expert"
              >
                Speak with an Expert
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                'Mill Test Certificates Provided',
                '72-Hour Dispatch Guarantee',
                'Pan-India Distribution Network',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-emerald-400"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder target for smooth scroll */}
      <div id="inquiry" className="relative z-10 h-24" />
    </div>
  );
}

export default App;
