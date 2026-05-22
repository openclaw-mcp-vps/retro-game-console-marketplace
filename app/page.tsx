export default function Home() {
  const faqs = [
    {
      q: "Who is RetroForge for?",
      a: "Hardware makers, retro gaming enthusiasts, and electronics hobbyists who want to buy or sell custom consoles, PCBs, parts, and design files."
    },
    {
      q: "What can I sell on the platform?",
      a: "Custom gaming consoles, replacement parts, PCB designs, 3D print files, firmware, and any homebrew gaming hardware project."
    },
    {
      q: "How does the $19/mo plan work?",
      a: "One flat monthly fee gives you unlimited listings, a maker dashboard, sales analytics, and access to the full buyer marketplace — no per-sale commissions."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#30363d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-xl tracking-tight">RetroForge</span>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="bg-[#58a6ff] text-[#0d1117] font-semibold px-4 py-2 rounded-md text-sm hover:bg-[#79b8ff] transition-colors"
        >
          Get Access
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Maker Marketplace
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
          Build it. List it.<br />
          <span className="text-[#58a6ff]">Sell it.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          RetroForge is the marketplace for homebrew gaming hardware. List custom consoles, parts, PCB designs, and firmware — and reach thousands of retro gaming enthusiasts ready to buy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-3 rounded-md text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Selling — $19/mo
          </a>
          <a
            href="#pricing"
            className="border border-[#30363d] text-[#c9d1d9] font-semibold px-8 py-3 rounded-md text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            See What's Included
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🕹️", title: "Custom Consoles", desc: "Handbuilt gaming hardware from the maker community." },
            { icon: "🔧", title: "Parts & PCBs", desc: "Replacement boards, controllers, and electronic components." },
            { icon: "📐", title: "Design Files", desc: "3D models, schematics, and firmware ready to download." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Flat Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <span className="inline-block bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Maker Plan</span>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited product listings",
              "Maker dashboard & analytics",
              "No per-sale commissions",
              "Integrated Lemon Squeezy payments",
              "Image & spec uploads",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-md hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} RetroForge. Built for makers, by makers.</p>
      </footer>
    </main>
  );
}
