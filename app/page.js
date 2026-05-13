export default function Website() {
  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4 text-sm font-semibold text-slate-800 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <span>📞</span>
              <a href="tel:3862608105">(386) 260-8105</a>
            </div>

            <div className="flex items-center gap-3 break-all">
              <span>✉️</span>
              <a href="mailto:anthonyarias@aaplumbingandelectricalllc.com">
                anthonyarias@aaplumbingandelectricalllc.com
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between py-6 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-md border border-slate-200 text-5xl font-black text-blue-800 relative overflow-hidden">
                <span className="absolute text-yellow-500 right-2 top-1 text-4xl">
                  ⚡
                </span>
                AA
              </div>

              <div>
                <h1 className="text-2xl md:text-3xl font-black text-blue-900 leading-tight">
                  PLUMBING &
                </h1>

                <h2 className="text-xl md:text-2xl font-black text-yellow-500">
                  ELECTRICAL LLC
                </h2>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-8 font-bold text-slate-800 uppercase text-sm">
              <a href="#home" className="hover:text-blue-700">
                Home
              </a>

              <a href="#services" className="hover:text-blue-700">
                Services
              </a>

              <a href="#about" className="hover:text-blue-700">
                About
              </a>

              <a href="#contact" className="hover:text-blue-700">
                Contact
              </a>

              <a
                href="#contact"
                className="bg-blue-800 text-white px-6 py-4 rounded-lg hover:bg-blue-900 transition"
              >
                Request a Quote
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="bg-white overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[700px]">
          <div className="flex items-center px-8 lg:px-16 py-16 bg-white">
            <div>
              <h2 className="text-5xl lg:text-7xl font-black text-blue-900 leading-tight uppercase mb-6">
                Expert Plumbing
                <br />
                & Electrical Solutions
              </h2>

              <h3 className="text-2xl lg:text-3xl font-black text-slate-900 uppercase mb-8">
                For Homes & Businesses in Florida
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed mb-10 max-w-xl">
                AA Plumbing and Electrical LLC provides reliable,
                high-quality plumbing and electrical services with a
                commitment to safety, efficiency, and customer
                satisfaction.
              </p>

              <div className="flex flex-wrap gap-5">
                <a
                  href="#contact"
                  className="bg-blue-800 text-white px-8 py-5 rounded-lg font-bold uppercase hover:bg-blue-900 transition"
                >
                  Request a Quote
                </a>

                <a
                  href="tel:3862608105"
                  className="border-2 border-blue-800 text-blue-900 px-8 py-5 rounded-lg font-bold uppercase hover:bg-blue-800 hover:text-white transition"
                >
                  (386) 260-8105
                </a>
              </div>
            </div>
          </div>

          <div
            className="relative bg-cover bg-center min-h-[500px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1600&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40"></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-blue-900 uppercase mb-6">
              Our Services
            </h2>

            <p className="text-slate-700 max-w-3xl mx-auto text-lg">
              Professional plumbing and electrical services for
              residential and commercial properties across Florida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Plumbing Repairs",
                description:
                  "Leak detection, pipe repair, drain cleaning, and fixture installations.",
              },
              {
                title: "Electrical Services",
                description:
                  "Wiring, panel upgrades, lighting installation, and troubleshooting.",
              },
              {
                title: "Commercial Projects",
                description:
                  "Professional solutions for offices, retail spaces, and commercial buildings.",
              },
              {
                title: "Emergency Support",
                description:
                  "Fast-response emergency plumbing and electrical services available.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <div
                  className="h-52 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop')",
                  }}
                />

                <div className="p-8">
                  <h3 className="text-2xl font-black text-blue-900 mb-4 uppercase">
                    {service.title}
                  </h3>

                  <p className="text-slate-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black text-blue-900 uppercase mb-8">
              About Us
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              AA Plumbing and Electrical LLC is committed to delivering
              dependable plumbing and electrical services with
              professionalism, honesty, and quality workmanship.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We proudly serve homeowners and businesses throughout
              Florida with reliable solutions tailored to every project.
            </p>

            <ul className="space-y-4 text-slate-800 font-semibold">
              <li>✔ Licensed & Professional Technicians</li>
              <li>✔ Residential & Commercial Expertise</li>
              <li>✔ Fast Response Times</li>
              <li>✔ Customer Satisfaction Focused</li>
            </ul>
          </div>

          <div
            className="rounded-3xl min-h-[500px] bg-cover bg-center shadow-2xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop')",
            }}
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-black uppercase mb-8">
              Request a Quote
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Need plumbing or electrical services? Contact AA Plumbing
              and Electrical LLC today for a professional quote.
            </p>

            <div className="space-y-6 text-lg">
              <p>📞 (386) 260-8105</p>
              <p>
                ✉️ anthonyarias@aaplumbingandelectricalllc.com
              </p>
              <p>
                📍 510 SW 4TH AVE, HALLANDALE BEACH, FL 33009
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 text-slate-900 shadow-2xl">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-slate-300 rounded-xl px-5 py-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-slate-300 rounded-xl px-5 py-4"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-slate-300 rounded-xl px-5 py-4"
              />

              <textarea
                rows="5"
                placeholder="Describe your project"
                className="w-full border border-slate-300 rounded-xl px-5 py-4"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-blue-950 py-5 rounded-xl font-black uppercase transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-blue-700 flex items-center justify-center text-white font-extrabold text-xl">
                AA
              </div>

              <div>
                <h3 className="text-white font-bold text-lg">
                  AA Plumbing & Electrical LLC
                </h3>

                <p>
                  Serving homes and businesses across Florida
                </p>
              </div>
            </div>

            <p>
              © 2026 AA Plumbing and Electrical LLC. All rights
              reserved.
            </p>

            <p>
              510 SW 4TH AVE, HALLANDALE BEACH, FL 33009
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <div className="space-y-2">
              <a href="#home" className="block hover:text-white">
                Home
              </a>

              <a
                href="#services"
                className="block hover:text-white"
              >
                Services
              </a>

              <a href="#about" className="block hover:text-white">
                About
              </a>

              <a
                href="#contact"
                className="block hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact Info
            </h3>

            <div className="space-y-2">
              <p>(386) 260-8105</p>

              <p>
                anthonyarias@aaplumbingandelectricalllc.com
              </p>

              <p>Hallandale Beach, Florida</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}