import SculptureHero from "@/components/ui/liquid-sculpture-hero";

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
          <div className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 p-5 md:p-6 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/40 hover:-translate-y-1">
            <div className="h-60 sm:h-72 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 flex flex-col justify-between p-5 md:p-6 border border-white/5">
              <span className="text-xs tracking-widest uppercase text-zinc-500 font-mono">EXPERTISE 01</span>
              <div>
                <h3 className="text-xl md:text-2xl font-serif text-white mb-1">AI UGC &amp; Video Production</h3>
                <p className="text-xs text-zinc-400">Google Flow &middot; Veo &middot; Nano Banana &middot; CapCut</p>
              </div>
            </div>
            <div className="mt-5 md:mt-6 flex flex-col gap-4">
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Pembuatan video iklan bergaya UGC organik untuk TikTok &amp; Reels. Mengubah product brief menjadi short-form video melalui concept prompting, image-to-video, scene sequencing, dan audio sync.
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-xs text-zinc-500">Klien: Island Rituals (Bali)</span>
                <a
                  href="https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20ingin%20konsultasi%20layanan%20AI%20UGC%20Video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-medium border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                >
                  Inquire &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: E-Commerce & Ads */}
          <div className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 p-5 md:p-6 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/40 hover:-translate-y-1">
            <div className="h-60 sm:h-72 rounded-xl bg-gradient-to-br from-zinc-900 to-[#1a1714] flex flex-col justify-between p-5 md:p-6 border border-white/5">
              <span className="text-xs tracking-widest uppercase text-zinc-500 font-mono">EXPERTISE 02</span>
              <div>
                <h3 className="text-xl md:text-2xl font-serif text-white mb-1">E-Commerce &amp; Ad Creatives</h3>
                <p className="text-xs text-zinc-400">ChatGPT Image Creation &middot; Nano Banana Pro &middot; Photoshop</p>
              </div>
            </div>
            <div className="mt-5 md:mt-6 flex flex-col gap-4">
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Produksi visual etalase toko online (Shopee, Tokopedia, TikTok Shop) dan creative ads Instagram/Facebook. Mengintegrasikan AI ke dalam komposisi produk, mockup komersial, dan banner kampanye promosi.
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-xs text-zinc-500">Klien: Howell Niaga &middot; Aussie Sawit</span>
                <a
                  href="https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20ingin%20konsultasi%20visual%20E-Commerce%20dan%20Ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-medium border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                >
                  Inquire &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Multimedia & Content Strategy */}
          <div className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 p-5 md:p-6 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/40 hover:-translate-y-1">
            <div className="h-60 sm:h-72 rounded-xl bg-gradient-to-br from-[#1c1c1f] to-zinc-950 flex flex-col justify-between p-5 md:p-6 border border-white/5">
              <span className="text-xs tracking-widest uppercase text-zinc-500 font-mono">EXPERTISE 03</span>
              <div>
                <h3 className="text-xl md:text-2xl font-serif text-white mb-1">Digital Content &amp; AI Voice</h3>
                <p className="text-xs text-zinc-400">ElevenLabs &middot; HeyGen &middot; Figma &middot; Premiere Pro</p>
              </div>
            </div>
            <div className="mt-5 md:mt-6 flex flex-col gap-4">
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Integrasi workflow AI untuk scripting, voice generation, pembuatan thumbnail, dan strategi visual media sosial. Berhasil mencatatkan 1.200+ subscriber baru dan 4.400+ jam tonton dalam 29 hari.
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-xs text-zinc-500">Klien: Viriya Bhavana Foundation</span>
                <a
                  href="https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20ingin%20konsultasi%20strategi%20konten%20AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-medium border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-2xl md:text-3xl font-serif text-[#d4af37] block mb-3 md:mb-4">01</span>
            <h4 className="text-base md:text-lg font-medium text-white mb-2">Prompt &amp; Lighting Engineering</h4>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
              Penguasaan parameter teknis pencahayaan (cinematic rim light, soft studio fill, golden hour) dan komposisi sudut kamera untuk visual photorealistic.
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-2xl md:text-3xl font-serif text-[#d4af37] block mb-3 md:mb-4">02</span>
            <h4 className="text-base md:text-lg font-medium text-white mb-2">Character &amp; Product Consistency</h4>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
              Teknik multi-angle seed locking dan pose sequencing agar wajah model AI dan detail produk fisik tetap identik di seluruh scene iklan.
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-2xl md:text-3xl font-serif text-[#d4af37] block mb-3 md:mb-4">03</span>
            <h4 className="text-base md:text-lg font-medium text-white mb-2">Commercial-Ready Delivery</h4>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
              Telah memproduksi 120+ aset visual di sektor F&amp;B, beauty, fashion, dan e-commerce dengan standar rasio iklan digital (1:1, 9:16, 16:9).
            </p>
          </div>
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
