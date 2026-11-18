import Link from "next/link";
import SculptureHero from "@/components/ui/liquid-sculpture-hero";
import TiltCard from "@/components/ui/tilt-card";

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
          <TiltCard
            href="/projects/island-rituals/"
            maxRotation={10}
            elevateZ={16}
            glareColor="rgba(212, 175, 55, 0.2)"
            className="group rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 p-5 md:p-6 backdrop-blur-md hover:border-[#d4af37]/70 cursor-pointer"
          >
            <div
              className="h-60 sm:h-72 rounded-xl relative overflow-hidden flex flex-col justify-between p-5 md:p-6 border border-white/10 transition-transform duration-300"
              style={{ transform: "translateZ(24px)", transformStyle: "preserve-3d" }}
            >
              <img
                src="/projects/island-rituals.jpg"
                alt="Island Rituals AI UGC Video"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-black/30 pointer-events-none" />
              <span
                className="relative z-10 text-xs tracking-widest uppercase text-white/80 font-mono px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm self-start border border-white/10 transition-transform duration-300"
                style={{ transform: "translateZ(30px)" }}
              >
                EXPERTISE 01
              </span>
              <div
                className="relative z-10 transition-transform duration-300"
                style={{ transform: "translateZ(26px)" }}
              >
                <h3 className="text-xl md:text-2xl font-serif text-white mb-1 group-hover:text-[#d4af37] transition-colors">
                  AI UGC &amp; Video Ads
                </h3>
                <p className="text-xs text-zinc-300">Google Flow &middot; Veo &middot; Nano Banana &middot; CapCut</p>
              </div>
            </div>
            <div
              className="mt-5 md:mt-6 flex flex-col gap-4 transition-transform duration-300"
              style={{ transform: "translateZ(18px)" }}
            >
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Pembuatan video iklan bergaya UGC organik (9:16) untuk Island Rituals Nail Serum. Mengubah product brief menjadi video berkonversi tinggi melalui concept prompting, digital talent avatar, POV demo produk, dan audio sync.
              </p>
              <div className="flex flex-wrap items-center justify-between pt-3 border-t border-white/5 gap-2">
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-500 font-medium">Klien: Island Rituals (Bali)</span>
                  <Link
                    href="/projects/island-rituals/"
                    className="text-[11px] text-[#d4af37] font-medium tracking-wide mt-0.5 inline-flex items-center gap-1 group-hover:underline"
                    style={{ transform: "translateZ(28px)" }}
                  >
                    Lihat Seluruh Assets (5 Video) ↗
                  </Link>
                </div>
                <div className="relative z-20" style={{ transform: "translateZ(28px)" }}>
                  <a
                    href="https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20ingin%20konsultasi%20layanan%20AI%20UGC%20Video"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-prevent-nav="true"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                  >
                    Inquire &rarr;
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Card 2: E-Commerce & Ads */}
          <TiltCard
            href="/projects/ecommerce-ads/"
            maxRotation={10}
            elevateZ={16}
            glareColor="rgba(212, 175, 55, 0.2)"
            className="group rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 p-5 md:p-6 backdrop-blur-md hover:border-[#d4af37]/70 cursor-pointer"
          >
            <div
              className="h-60 sm:h-72 rounded-xl relative overflow-hidden flex flex-col justify-between p-5 md:p-6 border border-white/10 transition-transform duration-300"
              style={{ transform: "translateZ(24px)", transformStyle: "preserve-3d" }}
            >
              <img
                src="/projects/aussie-sawit.jpg"
                alt="Aussie Sawit & Howell Niaga E-Commerce Ads"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-black/30 pointer-events-none" />
              <span
                className="relative z-10 text-xs tracking-widest uppercase text-white/80 font-mono px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm self-start border border-white/10 transition-transform duration-300"
                style={{ transform: "translateZ(30px)" }}
              >
                EXPERTISE 02
              </span>
              <div
                className="relative z-10 transition-transform duration-300"
                style={{ transform: "translateZ(26px)" }}
              >
                <h3 className="text-xl md:text-2xl font-serif text-white mb-1 group-hover:text-[#d4af37] transition-colors">
                  E-Commerce &amp; Commercial Ads
                </h3>
                <p className="text-xs text-zinc-300">ChatGPT Image &middot; Midjourney &middot; Photoshop &middot; Illustrator</p>
              </div>
            </div>
            <div
              className="mt-5 md:mt-6 flex flex-col gap-4 transition-transform duration-300"
              style={{ transform: "translateZ(18px)" }}
            >
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Produksi visual etalase toko online (Shopee/Tokopedia Store Decoration) &amp; creative ads media sosial berkonversi tinggi untuk sektor agrikultur perkebunan (Aussie Sawit) dan elektronik (Howell Niaga).
              </p>
              <div className="flex flex-wrap items-center justify-between pt-3 border-t border-white/5 gap-2">
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-500 font-medium">Klien: Aussie Sawit &middot; Howell</span>
                  <Link
                    href="/projects/ecommerce-ads/"
                    className="text-[11px] text-[#d4af37] font-medium tracking-wide mt-0.5 inline-flex items-center gap-1 group-hover:underline"
                    style={{ transform: "translateZ(28px)" }}
                  >
                    Lihat Seluruh Assets (12 Karya) ↗
                  </Link>
                </div>
                <div className="relative z-20" style={{ transform: "translateZ(28px)" }}>
                  <a
                    href="https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20ingin%20konsultasi%20visual%20E-Commerce%20dan%20Ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-prevent-nav="true"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                  >
                    Inquire &rarr;
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Card 3: AI Fashion & Commercial Reels (Blue Sportswear) */}
          <TiltCard
            href="/projects/blue-sportswear/"
            maxRotation={10}
            elevateZ={16}
            glareColor="rgba(212, 175, 55, 0.2)"
            className="group rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 p-5 md:p-6 backdrop-blur-md hover:border-[#d4af37]/70 cursor-pointer"
          >
            <div
              className="h-60 sm:h-72 rounded-xl relative overflow-hidden flex flex-col justify-between p-5 md:p-6 border border-white/10 transition-transform duration-300"
              style={{ transform: "translateZ(24px)", transformStyle: "preserve-3d" }}
            >
              <img
                src="/projects/blue-sportswear.jpg"
                alt="Blue Sportswear Denmark AI Fashion Reels"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-black/30 pointer-events-none" />
              <span
                className="relative z-10 text-xs tracking-widest uppercase text-white/80 font-mono px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm self-start border border-white/10 transition-transform duration-300"
                style={{ transform: "translateZ(30px)" }}
              >
                EXPERTISE 03
              </span>
              <div
                className="relative z-10 transition-transform duration-300"
                style={{ transform: "translateZ(26px)" }}
              >
                <h3 className="text-xl md:text-2xl font-serif text-white mb-1 group-hover:text-[#d4af37] transition-colors">
                  AI Fashion &amp; Commercial Reels
                </h3>
                <p className="text-xs text-zinc-300">Midjourney &middot; Veo &middot; Google Flow &middot; Premiere Pro</p>
              </div>
            </div>
            <div
              className="mt-5 md:mt-6 flex flex-col gap-4 transition-transform duration-300"
              style={{ transform: "translateZ(18px)" }}
            >
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Pembuatan video reels kampanye mode dan visual lookbook activewear/knitwear untuk brand busana Blue Sportswear (Denmark). Menerapkan konsistensi model AI di set multi-lokasi (Paris, Courchevel, Analog Nature) dengan pencahayaan sinematik.
              </p>
              <div className="flex flex-wrap items-center justify-between pt-3 border-t border-white/5 gap-2">
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-500 font-medium">Klien: Blue Sportswear (Denmark)</span>
                  <Link
                    href="/projects/blue-sportswear/"
                    className="text-[11px] text-[#d4af37] font-medium tracking-wide mt-0.5 inline-flex items-center gap-1 group-hover:underline"
                    style={{ transform: "translateZ(28px)" }}
                  >
                    Lihat Seluruh Assets (32 Karya) ↗
                  </Link>
                </div>
                <div className="relative z-20" style={{ transform: "translateZ(28px)" }}>
                  <a
                    href="https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20ingin%20konsultasi%20layanan%20AI%20Fashion%20dan%20Commercial%20Reels%20(Blue%20Sportswear)"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-prevent-nav="true"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                  >
                    Inquire &rarr;
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <TiltCard
            maxRotation={12}
            elevateZ={16}
            glareColor="rgba(212, 175, 55, 0.16)"
            className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#d4af37]/50 backdrop-blur-sm cursor-default"
          >
            <span
              className="text-2xl md:text-3xl font-serif text-[#d4af37] block mb-3 md:mb-4 transition-transform duration-300"
              style={{ transform: "translateZ(26px)" }}
            >
              01
            </span>
            <h4
              className="text-base md:text-lg font-medium text-white mb-2 transition-transform duration-300"
              style={{ transform: "translateZ(20px)" }}
            >
              Prompt &amp; Lighting Engineering
            </h4>
            <p
              className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light transition-transform duration-300"
              style={{ transform: "translateZ(14px)" }}
            >
              Penguasaan parameter teknis pencahayaan (cinematic rim light, soft studio fill, golden hour) dan komposisi sudut kamera untuk visual photorealistic.
            </p>
          </TiltCard>
          <TiltCard
            maxRotation={12}
            elevateZ={16}
            glareColor="rgba(212, 175, 55, 0.16)"
            className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#d4af37]/50 backdrop-blur-sm cursor-default"
          >
            <span
              className="text-2xl md:text-3xl font-serif text-[#d4af37] block mb-3 md:mb-4 transition-transform duration-300"
              style={{ transform: "translateZ(26px)" }}
            >
              02
            </span>
            <h4
              className="text-base md:text-lg font-medium text-white mb-2 transition-transform duration-300"
              style={{ transform: "translateZ(20px)" }}
            >
              Character &amp; Product Consistency
            </h4>
            <p
              className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light transition-transform duration-300"
              style={{ transform: "translateZ(14px)" }}
            >
              Teknik multi-angle seed locking dan pose sequencing agar wajah model AI dan detail produk fisik tetap identik di seluruh scene iklan.
            </p>
          </TiltCard>
          <TiltCard
            maxRotation={12}
            elevateZ={16}
            glareColor="rgba(212, 175, 55, 0.16)"
            className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#d4af37]/50 backdrop-blur-sm cursor-default"
          >
            <span
              className="text-2xl md:text-3xl font-serif text-[#d4af37] block mb-3 md:mb-4 transition-transform duration-300"
              style={{ transform: "translateZ(26px)" }}
            >
              03
            </span>
            <h4
              className="text-base md:text-lg font-medium text-white mb-2 transition-transform duration-300"
              style={{ transform: "translateZ(20px)" }}
            >
              Commercial-Ready Delivery
            </h4>
            <p
              className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light transition-transform duration-300"
              style={{ transform: "translateZ(14px)" }}
            >
              Telah memproduksi 120+ aset visual di sektor F&amp;B, beauty, fashion, dan e-commerce dengan standar rasio iklan digital (1:1, 9:16, 16:9).
            </p>
          </TiltCard>
        </div>
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
