export default function Website() {
  const services = [
    {
      title: 'Emergency Plumbing',
      description:
        'Fast-response emergency plumbing solutions for burst pipes, leaks, overflowing toilets, water damage, and urgent plumbing problems that cannot wait.',
      icon: '🚨',
    },
    {
      title: 'Drain Cleaning',
      description:
        'Professional drain cleaning and clog removal services for kitchens, bathrooms, showers, floor drains, and commercial systems.',
      icon: '🛠️',
    },
    {
      title: 'Water Heater Services',
      description:
        'Installation, repair, maintenance, and replacement of traditional and tankless water heater systems.',
      icon: '🔥',
    },
    {
      title: 'Pipe Repair & Repiping',
      description:
        'Reliable pipe inspections, leak detection, pipe repair, and full home repiping solutions for older properties.',
      icon: '🔧',
    },
    {
      title: 'Residential Plumbing',
      description:
        'Complete plumbing services for homeowners including fixtures, kitchens, bathrooms, and new plumbing installations.',
      icon: '🏠',
    },
    {
      title: 'Commercial Plumbing',
      description:
        'Professional plumbing solutions for offices, restaurants, retail buildings, and commercial properties throughout Florida.',
      icon: '🏢',
    },
  ]

  return (
    <div className="bg-white text-slate-800 font-sans overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 py-4 text-sm font-medium border-b border-slate-200">
            <div className="flex items-center gap-2 text-slate-700">
              <span>📞</span>
              <a href="tel:3862608105" className="hover:text-blue-700">
                (386) 260-8105
              </a>
            </div>

            <div className="flex items-center gap-2 text-slate-700 break-all text-center lg:text-left">
              <span>✉️</span>
              <a
                href="mailto:anthonyarias@aaplumbingandelectricalllc.com"
                className="hover:text-blue-700"
              >
                anthonyarias@aaplumbingandelectricalllc.com
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between py-6 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-3xl bg-blue-900 text-white flex items-center justify-center text-3xl font-black shadow-xl">
                AA
              </div>

              <div>
                <h1 className="text-2xl md:text-3xl font-black text-blue-950 leading-tight uppercase">
                  AA Plumbing & Electrical LLC
                </h1>

                <p className="text-slate-600 font-semibold uppercase tracking-wide">
                  Professional Plumbing & Electrical Services Across Florida
                </p>
              </div>
            </div>

            <nav className="flex flex-wrap justify-center items-center gap-6 font-bold uppercase text-sm text-slate-700">
              <a href="#home" className="hover:text-blue-700 transition">
                Home
              </a>

              <a href="#services" className="hover:text-blue-700 transition">
                Services
              </a>

              <a href="#about" className="hover:text-blue-700 transition">
                About
              </a>

              <a href="#contact" className="hover:text-blue-700 transition">
                Contact
              </a>

              <a
                href="#contact"
                className="bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition shadow-lg"
              >
                Free Estimate
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1800&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-blue-950/75"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-40 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-950 px-5 py-2 rounded-full font-bold uppercase text-sm mb-8">
              Trusted Florida Plumbing Experts
            </div>

            <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight uppercase mb-8">
              Professional Plumbing & Electrical Solutions You Can Depend On
            </h2>

            <p className="text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl">
              AA Plumbing & Electrical LLC provides dependable residential and commercial
              plumbing services with fast response times, honest pricing,
              and high-quality workmanship. From emergency repairs to
              complete plumbing installations, we deliver reliable
              solutions designed to protect your property and keep your
              plumbing systems running efficiently.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="#contact"
                className="bg-yellow-400 text-blue-950 px-8 py-5 rounded-xl font-black uppercase hover:bg-yellow-300 transition"
              >
                Request Service
              </a>

              <a
                href="tel:3862608105"
                className="border-2 border-white text-white px-8 py-5 rounded-xl font-black uppercase hover:bg-white hover:text-blue-950 transition"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 lg:p-12">
            <h3 className="text-3xl font-black text-blue-950 uppercase mb-6">
              Why Homeowners Choose AA Plumbing & Electrical LLC
            </h3>

            <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
              <div className="flex gap-4">
                <span className="text-2xl">✔</span>
                <p>
                  Experienced plumbing professionals committed to quality
                  workmanship and dependable service.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">✔</span>
                <p>
                  Fast scheduling and emergency plumbing support when you
                  need immediate assistance.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">✔</span>
                <p>
                  Residential and commercial plumbing solutions tailored
                  to your property and budget.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">✔</span>
                <p>
                  Honest communication, transparent pricing, and customer
                  satisfaction focused service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-5xl font-black text-blue-900 mb-3">
              10+
            </h3>
            <p className="font-semibold text-slate-600 uppercase">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-blue-900 mb-3">
              24/7
            </h3>
            <p className="font-semibold text-slate-600 uppercase">
              Emergency Service
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-blue-900 mb-3">
              100%
            </h3>
            <p className="font-semibold text-slate-600 uppercase">
              Customer Focused
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-blue-900 mb-3">
              500+
            </h3>
            <p className="font-semibold text-slate-600 uppercase">
              Completed Projects
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-blue-950 uppercase mb-8">
              Complete Plumbing & Electrical Services
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed">
              AA Plumbing & Electrical LLC delivers dependable plumbing services for
              homeowners and businesses throughout Florida. Whether you
              need emergency repairs, maintenance, installations, or full
              plumbing upgrades, our experienced team is committed to
              providing professional service and long-lasting results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-300 border border-slate-200"
              >
                <div className="text-5xl mb-6">{service.icon}</div>

                <h3 className="text-2xl font-black text-blue-950 uppercase mb-5">
                  {service.title}
                </h3>

                <p className="text-slate-700 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl lg:text-6xl font-black text-blue-950 uppercase mb-8 leading-tight">
              Trusted Plumbing & Electrical Professionals Serving Florida
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              At AA Plumbing & Electrical LLC, we believe quality workmanship and honest
              service should be the foundation of every project. Our team
              is committed to helping homeowners and businesses solve
              plumbing issues quickly, efficiently, and professionally.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              From small plumbing repairs to larger commercial projects,
              we approach every job with attention to detail, clear
              communication, and a dedication to customer satisfaction.
              We understand how important reliable plumbing systems are
              for your home or business, which is why we work hard to
              provide dependable solutions you can trust.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-10">
              Our mission is to provide professional plumbing services
              that combine reliability, fast response times, and
              long-lasting results. We proudly serve communities across
              Florida with integrity and professionalism.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-100 rounded-2xl p-6">
                <h3 className="font-black text-blue-950 text-xl mb-2">
                  Licensed Professionals
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Skilled plumbing experts dedicated to safe and reliable
                  workmanship.
                </p>
              </div>

              <div className="bg-slate-100 rounded-2xl p-6">
                <h3 className="font-black text-blue-950 text-xl mb-2">
                  Fast Response Times
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Prompt scheduling and dependable emergency support when
                  you need it most.
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-3xl min-h-[650px] bg-cover bg-center shadow-2xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop')",
            }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl lg:text-6xl font-black uppercase leading-tight mb-8">
            Need Reliable Plumbing & Electrical Service?
          </h2>

          <p className="text-xl text-slate-300 leading-relaxed mb-10">
            Contact AA Plumbing & Electrical LLC today for professional residential and
            commercial plumbing solutions. Our team is ready to help with
            repairs, installations, maintenance, and emergency plumbing
            services.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="tel:3862608105"
              className="bg-yellow-400 text-blue-950 px-8 py-5 rounded-xl font-black uppercase hover:bg-yellow-300 transition"
            >
              Call (386) 260-8105
            </a>

            <a
              href="#contact"
              className="border-2 border-white px-8 py-5 rounded-xl font-black uppercase hover:bg-white hover:text-blue-950 transition"
            >
              Request A Quote
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-5xl font-black text-blue-950 uppercase mb-8">
              Request A Free Estimate
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-10">
              Have a plumbing issue or need professional installation
              services? Contact AA Plumbing & Electrical LLC today to schedule service or
              request a free estimate. We are committed to delivering
              dependable solutions and excellent customer care.
            </p>

            <div className="space-y-6 text-lg text-slate-700">
              <div className="flex gap-4 items-start">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="font-black text-blue-950 uppercase mb-1">
                    Phone
                  </h3>
                  <p>(386) 260-8105</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl">✉️</span>
                <div>
                  <h3 className="font-black text-blue-950 uppercase mb-1">
                    Email
                  </h3>
                  <p>
                    anthonyarias@aaplumbingandelectricalllc.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-black text-blue-950 uppercase mb-1">
                    Location
                  </h3>
                  <p>
                    510 SW 4TH AVE, HALLANDALE BEACH, FL 33009
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-slate-200">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />

              <textarea
                rows="6"
                placeholder="Tell us about your plumbing project or issue"
                className="w-full border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-900"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-950 hover:bg-blue-900 text-white py-5 rounded-xl font-black uppercase transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-900 flex items-center justify-center text-white font-black text-2xl">
                AA
              </div>

              <div>
                <h3 className="text-white text-xl font-black uppercase">
                  AA Plumbing & Electrical LLC
                </h3>

                <p className="text-slate-400">
                  Professional Plumbing & Electrical Services
                </p>
              </div>
            </div>

            <p className="leading-relaxed">
              AA Plumbing & Electrical LLC proudly provides dependable residential and
              commercial plumbing services throughout Florida with a
              commitment to professionalism, quality workmanship, and
              customer satisfaction.
            </p>
          </div>

          <div>
            <h3 className="text-white font-black uppercase mb-6 text-lg">
              Quick Links
            </h3>

            <div className="space-y-3">
              <a href="#home" className="block hover:text-white transition">
                Home
              </a>

              <a
                href="#services"
                className="block hover:text-white transition"
              >
                Services
              </a>

              <a href="#about" className="block hover:text-white transition">
                About
              </a>

              <a
                href="#contact"
                className="block hover:text-white transition"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-black uppercase mb-6 text-lg">
              Contact Information
            </h3>

            <div className="space-y-4 leading-relaxed">
              <p>📞 (386) 260-8105</p>

              <p>
                ✉️ anthonyarias@aaplumbingandelectricalllc.com
              </p>

              <p>
                📍 510 SW 4TH AVE, HALLANDALE BEACH, FL 33009
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500 px-6">
          © 2026 AA Plumbing & Electrical LLC. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
