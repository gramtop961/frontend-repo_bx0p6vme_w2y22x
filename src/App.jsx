import { useState } from 'react';
import Spline from '@splinetool/react-spline';

function App() {
  const [showPricing, setShowPricing] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="w-full bg-white text-gray-900">
      {/* HERO */}
      <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black" />
        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 md:px-12">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-white/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-sm font-medium">Trusted by Manufacturers Across India</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Premium Metal Products Delivered in 48-72 Hours
            </h1>
            <p className="mt-4 text-lg text-white/90 md:text-xl">
              Certified metal fabrication for construction, manufacturing & industrial projects across India
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                '[X]+ Years Experience',
                '[X]+ Happy Clients',
                '[X]% On-Time Delivery',
                '[X],000+ Parts Delivered',
              ].map((item) => (
                <span key={item} className="rounded-full bg-amber-400 px-3 py-1 text-sm font-semibold text-black">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToProducts}
                className="rounded-md bg-amber-500 px-6 py-3 text-base font-semibold text-black shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
              >
                Browse Products
              </button>
              <a
                href="tel:+91XXXXXXXXXX"
                className="rounded-md border border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:border-white/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black"
              >
                Call Us Now
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/90">
              <span className="flex items-center gap-2"><Check /> ISO Certified</span>
              <span className="flex items-center gap-2"><Check /> Quality Guaranteed</span>
              <span className="flex items-center gap-2"><Check /> Trusted by [X]+ Companies</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full bg-amber-400/95 text-black">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-3 text-sm font-semibold md:flex-row md:text-base">
            <span>📦 [X] Orders Received Today!</span>
            <span>⚡ Average Response Time: 2 Hours</span>
            <span>📅 Next Day Delivery Available</span>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="text-center text-xs font-semibold tracking-widest text-gray-500">WE SOURCE PREMIUM STEEL FROM INDIA'S LEADING MILLS</h2>
          <div className="mt-6 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:grid-cols-6">
            {['TATA Steel','JSW Steel','SAIL','Jindal Steel','AMNS India','Essar Steel'].map((name) => (
              <div key={name} className="flex h-20 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3 text-center text-sm font-semibold text-gray-800">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl">How it works?</h3>
            <p className="mt-2 text-gray-600">Our simple 5-step process</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <HowCard icon={<DocIcon />} title="Step 1: Register with us" desc="Quick registration by entering your basic information" />
            <HowCard icon={<FactoryIcon />} title="Step 2: Select preferred mills" desc="Choose from TATA, JSW, SAIL & other trusted mills" />
            <HowCard icon={<CartIcon />} title="Step 3: Select products & order" desc="Browse catalog, get instant pricing, place your order" />
            <HowCard icon={<CardIcon />} title="Step 4: Pay securely" desc="Multiple payment options with secure gateway" />
            <HowCard icon={<BoxIcon />} title="Step 5: Track & receive" desc="Real-time tracking and timely delivery to your doorstep" />
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section id="products" className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl">Premium Steel from Certified Mills</h3>
            <p className="mt-2 text-gray-600">Sourced from TATA, JSW, SAIL & top mills. Mill Test Certificates included with every order.</p>
          </div>
          <div className="mt-10 mx-auto max-w-4xl text-center">
            <h4 className="text-2xl font-bold">Comprehensive Metal Solutions for Critical Applications</h4>
            <p className="mt-2 text-gray-600">Every product certified to IS/ISO standards with complete traceability. Mill test certificates, chemical composition analysis, and mechanical property documentation included with every order.</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {['Hot Rolled','Cold Rolled','Galvanized','Color Coated'].map((f) => (
              <button key={f} className="rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50">
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              sold="[X]"
              imageLabel="Hot Rolled Steel Coils"
              category="STRUCTURAL STEEL"
              name="Hot Rolled Coils - Grade E350A"
              specs={[
                'Thickness Range: [X] - [XX] mm',
                'Width: [XXX] - [XXXX] mm',
                'Grade: IS 2062 E350A',
                'Application: Structural',
              ]}
              delivery="🚚 2-5 Days Delivery"
              onQuote={() => setShowPricing(true)}
            />
            <ProductCard
              sold="[X]"
              imageLabel="Hot Rolled Steel Sheets"
              category="HIGH STRENGTH STEEL"
              name="Hot Rolled Sheets - Grade HS 345"
              specs={[
                'Thickness Range: [X] - [XX] mm',
                'Width: [XXX] - [XXXX] mm',
                'Grade: IS 5518 HS 345',
                'Application: Heavy Structures',
              ]}
              delivery="🚚 2-5 Days Delivery"
              onQuote={() => setShowPricing(true)}
            />
            <ProductCard
              sold="[X]"
              imageLabel="Steel Plates"
              category="STRUCTURAL STEEL"
              name="Steel Plates - Grade E250BR"
              specs={[
                'Thickness Range: [X] - [XX] mm',
                'Width: [XXX] - [XXXX] mm',
                'Grade: IS 2062 E250BR',
                'Application: Heavy Fabrication',
              ]}
              delivery="🚚 3-6 Days Delivery"
              onQuote={() => setShowPricing(true)}
            />
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">WHY SANDEEP METAL WORKS</span>
            <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Enterprise-Grade Steel Supply Chain Management</h3>
            <p className="mt-2 text-gray-600">Three decades of operational excellence serving India's most demanding construction, automotive, and manufacturing projects. Every order backed by ISO certification and technical expertise.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Feature icon={<Check />} title="Quality Assurance & Certification" desc="ISO 9001:2015 certified operations. Every shipment includes complete traceability documentation—mill test certificates, chemical composition analysis, and mechanical property documentation for complete traceability and compliance." />
            <Feature icon={<TruckIcon />} title="Rapid Fulfillment Logistics" desc="Strategically located warehouses across India enable 48-72 hour delivery to major metros. Dedicated logistics partnerships ensure on-time delivery for time-critical projects." />
            <Feature icon={<ChartIcon />} title="Real-Time Order Tracking" desc="Enterprise-grade tracking system provides complete visibility from order placement to delivery. SMS and email notifications keep stakeholders informed at every stage." />
            <Feature icon={<ToolsIcon />} title="Technical Support & Consultation" desc="Experienced metallurgical engineers available for material selection guidance. Alternates recommendations and specification consultation at no additional cost." />
            <Feature icon={<PaymentIcon />} title="Flexible Payment Terms" desc="Credit facilities available for established accounts. Multiple payment options including bank transfer, LC, and post-delivery settlement schedules for large projects." />
            <Feature icon={<BoltIcon />} title="[X]+ Years Industry Expertise" desc="Three decades serving construction, automotive, and manufacturing sectors. Deep understanding of compliance standards across all applications." />
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl">What Our Clients Say</h3>
            <p className="mt-2 text-gray-600">Trusted by [X]+ companies across India</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Testimonial
              quote="Sandeep Metal Works has been our go-to supplier for the past [X] years. Their quality is consistent, delivery is always on time, and the team is incredibly responsive. Highly recommended!"
              name="[Client Name]"
              title="Project Manager, [Construction Company Name]"
            />
            <Testimonial
              quote="We needed [XXX] tons of steel urgently for our [project type]. Sandeep Metal Works delivered everything within 48 hours without compromising on quality. Exceptional service!"
              name="[Client Name]"
              title="Operations Head, [Manufacturing Company Name]"
            />
            <Testimonial
              quote="The product catalog makes ordering so easy. Specifications are clear, prices are competitive, and the tracking system keeps us updated throughout. Best steel supplier we've worked with!"
              name="[Client Name]"
              title="Procurement Manager, [Infrastructure Company Name]"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">KNOWLEDGE BASE</span>
            <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions</h3>
            <p className="mt-2 text-gray-600">Comprehensive answers to technical specifications, certification requirements, logistics, and ordering processes.</p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
            {faqList.map((q, idx) => (
              <div key={q.q} className="px-6 py-4">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="flex w-full items-center justify-between py-2 text-left">
                  <span className="font-semibold text-gray-900">{q.q}</span>
                  <span className="text-gray-500">{openFaq === idx ? '-' : '+'}</span>
                </button>
                {openFaq === idx && <p className="mt-2 text-sm text-gray-600">{q.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-14 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,white,transparent_35%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-white md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to Elevate Your Steel Supply Chain?</h3>
            <p className="mt-3 text-white/80">Join [X]+ industry leaders who trust Sandeep Metal Works for mission-critical steel requirements. ISO-certified quality, guaranteed delivery, and expert technical support.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="tel:+91XXXXXXXXXX" className="rounded-md bg-amber-500 px-6 py-3 font-semibold text-black shadow-lg transition hover:bg-amber-400">
                📞 Call: [+91 XXXXX XXXXX]
              </a>
              <button onClick={scrollToProducts} className="rounded-md border border-white/30 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:border-white/60 hover:bg-white/10">
                View Product Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4 md:px-12">
          <div>
            <h4 className="text-lg font-bold">Sandeep Metal Works</h4>
            <p className="mt-2 text-sm text-white/80">ISO 9001:2015 certified steel supplier serving India's construction, automotive, and manufacturing sectors for over [X] years. Precision-engineered solutions backed by technical expertise and operational excellence.</p>
            <div className="mt-3 flex gap-2 text-xs text-white/70">
              <span className="rounded-full bg-white/10 px-2 py-1">ISO 9001:2015</span>
              <span className="rounded-full bg-white/10 px-2 py-1">ISO 45001:2018</span>
            </div>
          </div>
          <div>
            <h5 className="text-sm font-semibold tracking-wider text-white/80">Products</h5>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Structural Steel</li>
              <li>Stainless Steel</li>
              <li>Galvanized Steel</li>
              <li>Specialty Grades</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold tracking-wider text-white/80">Resources</h5>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Technical Specifications</li>
              <li>Certifications</li>
              <li>Case Studies</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold tracking-wider text-white/80">Contact</h5>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Phone: [+91 XXXXX XXXXX]</li>
              <li>Email: [sales@sandeepmetalworks.com]</li>
              <li>Address: [Industrial Area, City Name, State, India]</li>
              <li>Hours: Mon-Sat: 9:00 AM - 7:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-white/60">© {new Date().getFullYear()} Sandeep Metal Works. All rights reserved.</div>
      </footer>

      {/* WhatsApp Floating */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>

      {/* INSTANT PRICING MODAL */}
      {showPricing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-2xl font-bold">Get Instant Pricing</h4>
                <p className="mt-1 text-sm text-gray-600">No waiting. No calls. Your quote in 30 seconds.</p>
              </div>
              <button onClick={() => setShowPricing(false)} className="rounded-md p-2 text-gray-500 hover:bg-gray-100">✕</button>
            </div>
            <form className="mt-5 grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Product Type *</label>
                <select className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-amber-500 focus:outline-none">
                  <option>Select Product</option>
                  <option>Hot Rolled Coils - E350A</option>
                  <option>Hot Rolled Sheets - HS 345</option>
                  <option>Steel Plates - E250BR</option>
                </select>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Quantity (Tons) *</label>
                  <input type="number" placeholder="Enter tons" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Thickness (mm)</label>
                  <input type="text" placeholder="e.g., 2.5" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Delivery City *</label>
                <select className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-amber-500 focus:outline-none">
                  <option>Select City</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bengaluru</option>
                  <option>Hyderabad</option>
                  <option>Pune</option>
                  <option>Chennai</option>
                </select>
              </div>
              <button type="button" onClick={() => alert('Pricing calculated! (demo)')} className="mt-2 w-full rounded-md bg-amber-500 py-3 font-semibold text-black shadow hover:bg-amber-400">Calculate My Price 🚀</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* Reusable components */
function ProductCard({ sold, imageLabel, category, name, specs, delivery, onQuote }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between px-4 pt-4 text-xs">
        <span className="rounded-full bg-amber-100 px-2 py-1 font-semibold text-amber-800">{sold} sold</span>
        <span className="text-gray-500">{delivery}</span>
      </div>
      <div className="mt-4 h-40 w-full bg-gray-100 object-cover text-center text-xs text-gray-500">
        <div className="flex h-full w-full items-center justify-center">{imageLabel}</div>
      </div>
      <div className="space-y-2 p-4">
        <span className="text-[11px] font-bold tracking-wider text-amber-700">{category}</span>
        <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
          {specs.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <button onClick={onQuote} className="mt-3 w-full rounded-md border border-amber-500 bg-amber-50 py-2 font-semibold text-amber-700 transition hover:bg-amber-100">
          Request Quote
        </button>
      </div>
    </div>
  );
}

function HowCard({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
          {icon}
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="mt-1 text-emerald-500">{icon}</div>
        <div>
          <h5 className="text-lg font-semibold text-gray-900">{title}</h5>
          <p className="mt-1 text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonial({ quote, name, title }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <div className="text-amber-500">⭐⭐⭐⭐⭐</div>
        <p className="mt-3 text-gray-700">“{quote}”</p>
      </div>
      <div className="mt-4 text-sm font-semibold text-gray-900">{name}</div>
      <div className="text-xs text-gray-600">{title}</div>
    </div>
  );
}

/* Icons (inline SVG to avoid external deps) */
function Check() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function DocIcon() {return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>);} 
function FactoryIcon(){return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21V10l6 4V10l6 4V8l6 4v9H3z"/></svg>);} 
function CartIcon(){return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>);} 
function CardIcon(){return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>);} 
function BoxIcon(){return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12l8.73-5.04"/></svg>);} 
function TruckIcon(){return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/><path d="M3 17V6a2 2 0 0 1 2-2h9v13"/><path d="M13 8h5l3 3v6h-8"/></svg>);} 
function ChartIcon(){return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><rect x="7" y="8" width="3" height="7"/><rect x="12" y="5" width="3" height="10"/><rect x="17" y="11" width="3" height="4"/></svg>);} 
function ToolsIcon(){return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a4 4 0 1 0-5.4 5.4l8 8a2 2 0 1 0 2.8-2.8l-8-8z"/><path d="M7 7l3 3"/></svg>);} 
function PaymentIcon(){return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M7 15h3"/></svg>);} 
function BoltIcon(){return (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>);} 

const faqList = [
  { q: 'What steel grades and specifications do you supply?', a: 'We supply a wide range including IS 2062 (E250/E350), stainless series, galvanized, HR/CR, and specialty grades. Detailed spec sheets are available upon request.' },
  { q: 'What certifications and documentation are included with orders?', a: 'Every shipment includes Mill Test Certificates (MTC), chemical composition analysis, and mechanical properties as required.' },
  { q: 'What are your delivery timelines and logistics capabilities?', a: 'Standard dispatch within 48–72 hours for metros; expedited options may be available depending on inventory and location.' },
  { q: 'Do you provide custom cutting, slitting, and processing services?', a: 'Yes, we offer cutting, slitting, shearing, and other processing services based on project needs.' },
  { q: 'What are your minimum order quantities and pricing structures?', a: 'MOQ varies by product. Pricing depends on grade, thickness, tonnage, and destination. Instant quote tool provides indicative pricing.' },
  { q: 'What quality control measures ensure specification compliance?', a: 'Incoming material inspection, batch traceability, and final QA with documented MTCs ensure compliance.' },
  { q: 'What payment terms and methods are available for enterprise clients?', a: 'We support bank transfers, LC, and credit facilities for approved accounts.' },
  { q: 'How do I track my order after placement?', a: 'You will receive tracking updates via SMS/email and can request status at any time.' },
];

export default App;
