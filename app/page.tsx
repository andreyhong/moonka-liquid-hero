import SculptureHero from "@/components/ui/liquid-sculpture-hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111110] text-[#F1EFEA]">
      {/* Hero Section with Liquid WebGL Particle Sculpture */}
      <SculptureHero
        theme="dark"
        brand="MOONKA The Label"
        backdropText="MOONKA"
        eyebrow="Jakarta Haute Couture — Modern Silk & Structured Silhouettes"
        headline={"Elegance in Motion,\nSculpted with Craft."}
        headlineAccent="Sculpted with Craft."
        body="Eksplorasi siluet busana kontemporer dengan presisi atelier tinggi. Koleksi eksklusif kebaya modern dan dress premium untuk setiap momen prestisius Anda."
        primaryCta={{
          label: "Konsultasi VIP WhatsApp",
          href: "https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20tertarik%20konsultasi%20pembuatan%20website%20eksklusif%20MOONKA",
        }}
        secondaryCta={{
          label: "Lihat Lookbook",
          href: "#collection",
        }}
        navLinks={[
          { label: "Koleksi", href: "#collection" },
          { label: "Atelier & Craft", href: "#craft" },
          { label: "Bespoke Fitting", href: "#bespoke" },
          { label: "Portfolio", href: "https://portfolio.andreydigital.site" },
        ]}
        navCta={{
          label: "Private Appointment",
          href: "https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20ingin%20jadwalkan%20private%20appointment",
        }}
        hint="Gerakkan kursor pada siluet cairan"
        hintTouch="Sentuh siluet untuk interaksi partikel"
      />

      {/* Section #collection: Curated Haute Couture Lookbook */}
      <section id="collection" className="relative py-28 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-3">
              Curated Lookbook 2026
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">
              The Autumn/Winter <span className="font-serif italic text-[#e6d5b8]">Collection</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            Setiap karya dirancang one-of-a-kind dengan draping sutra murni, bordir tangan artisan, dan struktur siluet yang membentuk lekuk tubuh dengan sempurna.
          </p>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 p-6 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/40 hover:-translate-y-1">
            <div className="h-72 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 flex flex-col justify-between p-6 border border-white/5">
              <span className="text-xs tracking-widest uppercase text-zinc-500 font-mono">EDITION 01</span>
              <div>
                <h3 className="text-2xl font-serif text-white mb-1">Liquid Draped Gown</h3>
                <p className="text-xs text-zinc-400">Mulberry Silk & Metallic Filament Weave</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <span className="text-xs text-zinc-500 block">Status</span>
                <span className="text-sm text-zinc-200">Bespoke Atelier Order</span>
              </div>
              <a
                href="https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20tertarik%20inquire%20Liquid%20Draped%20Gown"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-medium border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
              >
                Inquire &rarr;
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 p-6 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/40 hover:-translate-y-1">
            <div className="h-72 rounded-xl bg-gradient-to-br from-zinc-900 to-[#1a1714] flex flex-col justify-between p-6 border border-white/5">
              <span className="text-xs tracking-widest uppercase text-zinc-500 font-mono">EDITION 02</span>
              <div>
                <h3 className="text-2xl font-serif text-white mb-1">Structured Modern Kebaya</h3>
                <p className="text-xs text-zinc-400">Hand-Embroidery & Modern Corsetry</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <span className="text-xs text-zinc-500 block">Status</span>
                <span className="text-sm text-zinc-200">Limited Signature</span>
              </div>
              <a
                href="https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20tertarik%20inquire%20Structured%20Modern%20Kebaya"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-medium border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
              >
                Inquire &rarr;
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 p-6 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/40 hover:-translate-y-1">
            <div className="h-72 rounded-xl bg-gradient-to-br from-[#1c1c1f] to-zinc-950 flex flex-col justify-between p-6 border border-white/5">
              <span className="text-xs tracking-widest uppercase text-zinc-500 font-mono">EDITION 03</span>
              <div>
                <h3 className="text-2xl font-serif text-white mb-1">Celestial Evening Silhouette</h3>
                <p className="text-xs text-zinc-400">French Tulle & Hand-Applied Pearls</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <span className="text-xs text-zinc-500 block">Status</span>
                <span className="text-sm text-zinc-200">Private Fitting Only</span>
              </div>
              <a
                href="https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20tertarik%20inquire%20Celestial%20Evening%20Silhouette"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-medium border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
              >
                Inquire &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section #craft: Atelier & Craftsmanship */}
      <section id="craft" className="relative py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/10">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-3">
            The Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            Precision of Engineering, <br />
            <span className="font-serif italic text-[#e6d5b8]">Patience of Haute Couture.</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed font-light text-base">
            Kami memadukan estetika haute couture tradisional dengan fluiditas digital modern. Tidak ada produksi massal—setiap helai kain diukur secara anatomis untuk menghasilkan siluet yang memperkuat karakter elegan setiap pemakainya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-3xl font-serif text-[#d4af37] block mb-4">01</span>
            <h4 className="text-lg font-medium text-white mb-2">Artisanal Fabric Selection</h4>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              Hanya menggunakan sutra murbei murni, brokat Prancis, dan material pilihan berstandar rumah mode internasional.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-3xl font-serif text-[#d4af37] block mb-4">02</span>
            <h4 className="text-lg font-medium text-white mb-2">Bespoke Body Contouring</h4>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              Pola korset internal ergonomis yang menopang postur tubuh dengan sempurna namun tetap nyaman untuk bergerak.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-3xl font-serif text-[#d4af37] block mb-4">03</span>
            <h4 className="text-lg font-medium text-white mb-2">Hand-Finished Embellishments</h4>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              Setiap mutiara air tawar dan manik kristal dipasang manual satu demi satu oleh pengrajin berpengalaman belasan tahun.
            </p>
          </div>
        </div>
      </section>

      {/* Section #bespoke: Private Appointment */}
      <section id="bespoke" className="relative py-28 px-6 md:px-16 max-w-5xl mx-auto text-center border-t border-white/10">
        <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-3">
          VIP Consultation
        </span>
        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
          Schedule Your <span className="font-serif italic text-[#e6d5b8]">Private Atelier Session</span>
        </h2>
        <p className="max-w-xl mx-auto text-zinc-400 mb-10 font-light text-base leading-relaxed">
          Konsultasikan ide gaun impian Anda secara langsung. Tim kami siap merancang konsep sketsa dan pengukuran personal untuk acara istimewa Anda.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20ingin%20jadwalkan%20private%20appointment%20MOONKA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-[#e6d5b8] transition-colors"
          >
            Chat WhatsApp Andrey Hong (088299258629) &rarr;
          </a>
          <a
            href="https://portfolio.andreydigital.site"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors"
          >
            Lihat Portfolio Lainnya &rarr;
          </a>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="border-t border-white/10 py-12 px-6 md:px-16 text-center text-xs text-zinc-500 font-light flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          &copy; 2026 MOONKA The Label. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href="https://home.andreydigital.site" className="text-zinc-400 hover:text-white transition-colors">
            home.andreydigital.site
          </a>
          <a href="https://portfolio.andreydigital.site" className="text-zinc-400 hover:text-white transition-colors">
            portfolio.andreydigital.site
          </a>
          <a href="https://wa.me/6288299258629" className="text-zinc-400 hover:text-white transition-colors">
            WhatsApp 088299258629
          </a>
        </div>
      </footer>
    </main>
  );
}
