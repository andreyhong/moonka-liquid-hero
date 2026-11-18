import Link from "next/link";
import SculptureHero from "@/components/ui/liquid-sculpture-hero";
import CraftCards from "@/components/craft-cards";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111110] text-[#F1EFEA]">
      {/* Hero Section with Liquid WebGL Particle Sculpture */}
      <SculptureHero
        theme="dark"
        brand="ANDREY HONG"
        backdropText="ANDREY"
        showCredit={false}
        mobileSculptureScale={0.85}
        eyebrow="AI Creative Designer — AI Video & Generative Visual Specialist"
        headline={"Generative AI Visuals,\nEngineered for Impact."}
        headlineAccent="Engineered for Impact."
        body="Menggabungkan fundamental desain visual 5+ tahun dengan teknologi generative AI mutakhir. Memproduksi video AI UGC, aset komersial e-commerce, dan konten iklan berkonversi tinggi untuk brand global."
        primaryCta={{
          label: "Konsultasi Proyek (WhatsApp)",
          href: "https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20tertarik%20bekerja%20sama%20untuk%20proyek%20AI%20Creative%20Design%20&%20Video",
        }}
        secondaryCta={{
          label: "Eksplorasi Keahlian",
          href: "#collection",
        }}
        navLinks={[
          { label: "Layanan & Karya", href: "#collection" },
          { label: "Alur Kerja AI", href: "#craft" },
          { label: "Kolaborasi", href: "#bespoke" },
          { label: "AI Creative Portfolio", href: "https://portfolio.andreydigital.site" },
        ]}
        navCta={{
          label: "Hire / Diskusi Proyek",
          href: "https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20ingin%20diskusi%20kebutuhan%20visual%20brand%20saya",
        }}
        hint="Gerakkan kursor pada siluet cairan"
        hintTouch="Sentuh siluet untuk interaksi partikel"
      />

      {/* Section #collection: Featured Expertise & Commercial Works */}
      <section id="collection" className="relative py-16 md:py-28 px-5 md:px-16 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-3">
              Commercial Visuals &amp; AI Video Production
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
              AI Creative <span className="font-serif italic text-[#e6d5b8]">Specialization</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            Penerapan generative AI pada alur kerja kreatif nyata: dari prompt engineering, visual ideation, konsistensi karakter &amp; produk, hingga final delivery siap tayang.
          </p>
        </div>

        {/* Services & Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1: AI UGC & Video */}
          <div className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 p-5 md:p-6 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/60 hover:-translate-y-1 flex flex-col justify-between">
            {/* Clickable Card Body */}
            <Link
              href="/projects/island-rituals/"
              className="block cursor-pointer focus:outline-none flex-1"
              title="Buka galeri lengkap karya Island Rituals"
            >
              <div className="h-60 sm:h-72 rounded-xl relative overflow-hidden border border-white/10 group-hover:border-[#d4af37]/40 transition-colors">
                <img
                  src="/projects/island-rituals.jpg"
                  alt="Island Rituals AI UGC Video"
                  className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="text-[11px] tracking-widest uppercase text-white/90 font-mono px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/15 shadow-sm">
                    EXPERTISE 01
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-xl md:text-2xl font-serif text-white mb-1.5 group-hover:text-[#d4af37] transition-colors">
                  AI UGC &amp; Video Ads
                </h3>
                <p className="text-xs text-[#d4af37]/90 font-mono">Google Flow &middot; Veo &middot; Nano Banana &middot; CapCut</p>
              </div>

              <ul className="mt-4 space-y-2 text-xs text-zinc-300 font-light leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37] text-[10px] mt-0.5 flex-shrink-0">◆</span>
                  <span>Pembuatan video iklan bergaya UGC organik (9:16) untuk Island Rituals Nail Serum.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37] text-[10px] mt-0.5 flex-shrink-0">◆</span>
                  <span>Mengubah product brief menjadi video berkonversi tinggi via concept prompting &amp; digital avatar.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37] text-[10px] mt-0.5 flex-shrink-0">◆</span>
                  <span>POV demo produk nyata dengan visual photorealistic dan sinkronisasi audio presisi.</span>
                </li>
              </ul>
            </Link>

            {/* Bottom Row */}
            <div className="flex flex-wrap items-center justify-between pt-4 mt-5 border-t border-white/5 gap-2">
              <Link
                href="/projects/island-rituals/"
                className="flex flex-col group/link"
              >
                <span className="text-xs text-zinc-500 font-medium">Klien: Island Rituals (Bali)</span>
                <span className="text-[11px] text-[#d4af37] font-medium tracking-wide mt-0.5 inline-flex items-center gap-1 group-hover/link:underline">
                  Lihat Seluruh Assets (5 Video) ↗
                </span>
              </Link>
              <div>
                <a
                  href="https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20ingin%20konsultasi%20layanan%20AI%20UGC%20Video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                >
                  Inquire &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: E-Commerce & Ads */}
          <div className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 p-5 md:p-6 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/60 hover:-translate-y-1 flex flex-col justify-between">
            {/* Clickable Card Body */}
            <Link
              href="/projects/ecommerce-ads/"
              className="block cursor-pointer focus:outline-none flex-1"
              title="Buka galeri lengkap karya Aussie Sawit dan Howell Niaga"
            >
              <div className="h-60 sm:h-72 rounded-xl relative overflow-hidden border border-white/10 group-hover:border-[#d4af37]/40 transition-colors">
                <img
                  src="/projects/aussie-sawit.jpg"
                  alt="Aussie Sawit & Howell Niaga E-Commerce Ads"
                  className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="text-[11px] tracking-widest uppercase text-white/90 font-mono px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/15 shadow-sm">
                    EXPERTISE 02
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-xl md:text-2xl font-serif text-white mb-1.5 group-hover:text-[#d4af37] transition-colors">
                  E-Commerce &amp; Commercial Ads
                </h3>
                <p className="text-xs text-[#d4af37]/90 font-mono">ChatGPT Image &middot; Midjourney &middot; Photoshop &middot; Illustrator</p>
              </div>

              <ul className="mt-4 space-y-2 text-xs text-zinc-300 font-light leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37] text-[10px] mt-0.5 flex-shrink-0">◆</span>
                  <span>Produksi visual etalase toko online (Shopee/Tokopedia Store Decoration).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37] text-[10px] mt-0.5 flex-shrink-0">◆</span>
                  <span>Creative ads media sosial berkonversi tinggi untuk sektor agrikultur perkebunan (Aussie Sawit).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37] text-[10px] mt-0.5 flex-shrink-0">◆</span>
                  <span>Komposisi produk AI, mockup komersial, dan banner kampanye promosi elektronik (Howell Niaga).</span>
                </li>
              </ul>
            </Link>

            {/* Bottom Row */}
            <div className="flex flex-wrap items-center justify-between pt-4 mt-5 border-t border-white/5 gap-2">
              <Link
                href="/projects/ecommerce-ads/"
                className="flex flex-col group/link"
              >
                <span className="text-xs text-zinc-500 font-medium">Klien: Aussie Sawit &middot; Howell</span>
                <span className="text-[11px] text-[#d4af37] font-medium tracking-wide mt-0.5 inline-flex items-center gap-1 group-hover/link:underline">
                  Lihat Seluruh Assets (12 Karya) ↗
                </span>
              </Link>
              <div>
                <a
                  href="https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20ingin%20konsultasi%20visual%20E-Commerce%20dan%20Ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                >
                  Inquire &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: AI Fashion & Commercial Reels (Blue Sportswear) */}
          <div className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 p-5 md:p-6 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/60 hover:-translate-y-1 flex flex-col justify-between">
            {/* Clickable Card Body */}
            <Link
              href="/projects/blue-sportswear/"
              className="block cursor-pointer focus:outline-none flex-1"
              title="Buka galeri lengkap karya Blue Sportswear"
            >
              <div className="h-60 sm:h-72 rounded-xl relative overflow-hidden border border-white/10 group-hover:border-[#d4af37]/40 transition-colors">
                <img
                  src="/projects/blue-sportswear.jpg"
                  alt="Blue Sportswear Denmark AI Fashion Reels"
                  className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="text-[11px] tracking-widest uppercase text-white/90 font-mono px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/15 shadow-sm">
                    EXPERTISE 03
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-xl md:text-2xl font-serif text-white mb-1.5 group-hover:text-[#d4af37] transition-colors">
                  AI Fashion &amp; Commercial Reels
                </h3>
                <p className="text-xs text-[#d4af37]/90 font-mono">Midjourney &middot; Veo &middot; Google Flow &middot; Premiere Pro</p>
              </div>

              <ul className="mt-4 space-y-2 text-xs text-zinc-300 font-light leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37] text-[10px] mt-0.5 flex-shrink-0">◆</span>
                  <span>Pembuatan video reels kampanye mode &amp; visual lookbook busana brand Blue Sportswear (Denmark).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37] text-[10px] mt-0.5 flex-shrink-0">◆</span>
                  <span>Menerapkan konsistensi model AI di set multi-lokasi (Paris, Courchevel, Analog Nature).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37] text-[10px] mt-0.5 flex-shrink-0">◆</span>
                  <span>Pencahayaan sinematik dengan visual photorealistic dan color grading kelas editorial.</span>
                </li>
              </ul>
            </Link>

            {/* Bottom Row */}
            <div className="flex flex-wrap items-center justify-between pt-4 mt-5 border-t border-white/5 gap-2">
              <Link
                href="/projects/blue-sportswear/"
                className="flex flex-col group/link"
              >
                <span className="text-xs text-zinc-500 font-medium">Klien: Blue Sportswear (Denmark)</span>
                <span className="text-[11px] text-[#d4af37] font-medium tracking-wide mt-0.5 inline-flex items-center gap-1 group-hover/link:underline">
                  Lihat Seluruh Assets (32 Karya) ↗
                </span>
              </Link>
              <div>
                <a
                  href="https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20ingin%20konsultasi%20layanan%20AI%20Fashion%20dan%20Commercial%20Reels%20(Blue%20Sportswear)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                >
                  Inquire &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section #craft: AI Workflow Philosophy */}
      <section id="craft" className="relative py-16 md:py-24 px-5 md:px-16 max-w-7xl mx-auto border-t border-white/10">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-3">
            Standards &amp; Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4 md:mb-6">
            Visual Fundamentals, <br />
            <span className="font-serif italic text-[#e6d5b8]">Powered by Generative Precision.</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base">
            Karya visual yang hebat bukan sekadar hasil prompt acak. Saya memadukan teori pencahayaan fotografi, komposisi sinematik, dan konsistensi anatomi karakter dengan teknologi AI terkini agar brand Anda tampil otentik dan berkelas.
          </p>
        </div>

        {/* 3 Interactive Cards with Pop-up Modal */}
        <CraftCards />
      </section>

      {/* Section #bespoke: Collaboration & Contact */}
      <section id="bespoke" className="relative py-16 md:py-28 px-5 md:px-16 max-w-5xl mx-auto text-center border-t border-white/10">
        <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-3">
          Available for Freelance &amp; Remote Projects
        </span>
        <h2 className="text-3xl md:text-6xl font-light tracking-tight text-white mb-4 md:mb-6">
          Ready to Elevate Your Brand with <br className="hidden sm:inline" />
          <span className="font-serif italic text-[#e6d5b8]">Next-Gen AI Visuals?</span>
        </h2>
        <p className="max-w-xl mx-auto text-zinc-400 mb-8 md:mb-10 font-light text-sm md:text-base leading-relaxed">
          Terbuka untuk kolaborasi pembuatan video AI UGC, creative direction iklan, visual etalase marketplace, atau konsultasi alur kerja generative AI.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <a
            href="https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20ingin%20diskusi%20proyek%20AI%20Creative%20Design"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-[#e6d5b8] transition-colors text-center"
          >
            Chat WhatsApp Andrey Hong (088299258629) &rarr;
          </a>
          <a
            href="https://portfolio.andreydigital.site"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors text-center"
          >
            Buka AI Creative Portfolio &rarr;
          </a>
        </div>
      </section>

      {/* Luxury Minimalist Footer */}
      <footer className="border-t border-white/10 py-10 md:py-12 px-5 md:px-16 text-center text-xs text-zinc-500 font-light flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          &copy; 2026 Andrey Hong &mdash; AI Creative Designer &amp; Generative Visual Specialist. North Jakarta, Indonesia.
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2.5">
          <a href="mailto:andreyhong24@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
            andreyhong24@gmail.com
          </a>
          <a href="https://portfolio.andreydigital.site" className="text-zinc-400 hover:text-white transition-colors">
            portfolio.andreydigital.site
          </a>
          <a href="https://wa.me/6288299258629" className="text-zinc-400 hover:text-white transition-colors">
            WhatsApp: 088299258629
          </a>
        </div>
      </footer>
    </main>
  );
}
