import Link from "next/link";
import SculptureHero from "@/components/ui/liquid-sculpture-hero";
import CraftCards from "@/components/craft-cards";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0c0d] text-[#F1EFEA]">
      {/* Hero Section with Liquid WebGL Particle Sculpture */}
      <SculptureHero
        theme="dark"
        darkBackground="#0b0c0d"
        brand="ANDREY HONG"
        backdropText="ANDREY"
        showCredit={false}
        mobileSculptureScale={0.85}
        eyebrow="AI Creative Designer — AI Video & Generative Visual Specialist"
        headline={"Generative AI Visuals,\nEngineered for Impact."}
        headlineAccent="Engineered for Impact."
        body="Combining 5+ years of visual design fundamentals with cutting-edge generative AI. Producing AI UGC videos, e-commerce commercial assets, and high-conversion ad creatives for global brands."
        primaryCta={{
          label: "Project Consultation (WhatsApp)",
          href: "https://wa.me/6288299258629?text=Hello%20Andrey%20Hong,%20I'm%20interested%20in%20collaborating%20on%20an%20AI%20Creative%20Design%20&%20Video%20project",
        }}
        secondaryCta={{
          label: "Explore Expertise",
          href: "#collection",
        }}
        navLinks={[
          { label: "Services & Work", href: "#collection" },
          { label: "AI Workflow", href: "#craft" },
          { label: "Collaboration", href: "#bespoke" },
          { label: "AI Creative Portfolio", href: "https://portfolio.andreydigital.site" },
        ]}
        navCta={{
          label: "Hire / Discuss Project",
          href: "https://wa.me/6288299258629?text=Hello%20Andrey%20Hong,%20I'd%20like%20to%20discuss%20my%20brand's%20visual%20needs",
        }}
        hint="Move cursor across the liquid form"
        hintTouch="Touch the form to interact with particles"
      />

      {/* Section #collection: Featured Expertise & Commercial Works */}
      <section
        id="collection"
        className="relative w-full border-t border-white/10 overflow-hidden"
        style={{
          background: "radial-gradient(circle at 85% 35%, #22252a 0%, #0b0c0d 65%)",
        }}
      >
        <div className="py-16 md:py-28 px-5 md:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-3 font-mono">
                Commercial Visuals &amp; AI Video Production
              </span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
                AI Creative <span className="font-serif italic text-[#e6d5b8]">Specialization</span>
              </h2>
            </div>
            <p className="max-w-md text-sm md:text-base text-zinc-400 font-light leading-relaxed">
              Applying generative AI to real-world creative workflows: from prompt engineering and visual ideation to character &amp; product consistency and production-ready final delivery.
            </p>
          </div>

          {/* Services & Works Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: AI UGC & Video */}
            <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#181a1f]/95 via-[#101216]/95 to-[#0b0c0e]/98 border border-white/[0.08] p-5 md:p-6 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/60 hover:-translate-y-1.5 flex flex-col justify-between shadow-[0_12px_36px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
              {/* Top edge light sheen */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              {/* Clickable Card Body */}
              <Link
                href="/projects/island-rituals/"
                className="block cursor-pointer focus:outline-none flex-1"
                title="View full Island Rituals project gallery"
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

                {/* Title & Tools with High Hierarchy */}
                <div className="mt-5">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-white">
                    AI UGC &amp; Video Ads<span className="text-[#d4af37]">.</span>
                  </h3>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-5">
                    <span className="text-[10px] tracking-wider uppercase text-[#d4af37] font-semibold mr-1 font-mono">TOOLS:</span>
                    {["Google Flow", "Veo", "Nano Banana", "CapCut"].map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-zinc-300 tracking-wide"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bullet Points with 100% Opacity Headline & Faded Detail */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] text-[10px] mt-1 shrink-0">◆</span>
                    <div className="text-xs leading-relaxed">
                      <span className="text-white font-semibold">Organic UGC Format (9:16)</span>
                      <span className="text-[#d4af37]/60 mx-1.5">—</span>
                      <span className="text-zinc-400 font-light">Vertical ready-to-run content for TikTok &amp; Reels.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] text-[10px] mt-1 shrink-0">◆</span>
                    <div className="text-xs leading-relaxed">
                      <span className="text-white font-semibold">Concept &amp; AI Avatar</span>
                      <span className="text-[#d4af37]/60 mx-1.5">—</span>
                      <span className="text-zinc-400 font-light">Transforming product briefs into natural presenter videos.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] text-[10px] mt-1 shrink-0">◆</span>
                    <div className="text-xs leading-relaxed">
                      <span className="text-white font-semibold">Photorealistic POV</span>
                      <span className="text-[#d4af37]/60 mx-1.5">—</span>
                      <span className="text-zinc-400 font-light">Realistic product demonstration with precision audio sync.</span>
                    </div>
                  </li>
                </ul>
              </Link>

              {/* Bottom Row */}
              <div className="flex flex-wrap items-center justify-between pt-4 mt-auto border-t border-white/10 gap-2">
                <Link
                  href="/projects/island-rituals/"
                  className="flex flex-col group/link"
                >
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Client: Island Rituals (Bali)</span>
                  <span className="text-xs font-semibold text-[#d4af37] group-hover/link:text-[#f3e5ab] tracking-wide mt-0.5 inline-flex items-center gap-1 group-hover/link:underline">
                    View All Assets (5 Videos) ↗
                  </span>
                </Link>
                <div>
                  <a
                    href="https://wa.me/6288299258629?text=Hello%20Andrey%20Hong,%20I'd%20like%20to%20inquire%20about%20AI%20UGC%20Video%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all shadow-sm"
                  >
                    Inquire &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: E-Commerce & Ads */}
            <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#181a1f]/95 via-[#101216]/95 to-[#0b0c0e]/98 border border-white/[0.08] p-5 md:p-6 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/60 hover:-translate-y-1.5 flex flex-col justify-between shadow-[0_12px_36px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
              {/* Top edge light sheen */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              {/* Clickable Card Body */}
              <Link
                href="/projects/ecommerce-ads/"
                className="block cursor-pointer focus:outline-none flex-1"
                title="View full Aussie Sawit & Howell Niaga project gallery"
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

                {/* Title & Tools with High Hierarchy */}
                <div className="mt-5">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-white">
                    E-Commerce &amp; Commercial Ads<span className="text-[#d4af37]">.</span>
                  </h3>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-5">
                    <span className="text-[10px] tracking-wider uppercase text-[#d4af37] font-semibold mr-1 font-mono">TOOLS:</span>
                    {["ChatGPT Image", "Midjourney", "Photoshop", "Illustrator"].map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-zinc-300 tracking-wide"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bullet Points with 100% Opacity Headline & Faded Detail */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] text-[10px] mt-1 shrink-0">◆</span>
                    <div className="text-xs leading-relaxed">
                      <span className="text-white font-semibold">High-End Storefronts</span>
                      <span className="text-[#d4af37]/60 mx-1.5">—</span>
                      <span className="text-zinc-400 font-light">Store decorations &amp; promo banners for Shopee &amp; Tokopedia.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] text-[10px] mt-1 shrink-0">◆</span>
                    <div className="text-xs leading-relaxed">
                      <span className="text-white font-semibold">Multi-Sector Ads</span>
                      <span className="text-[#d4af37]/60 mx-1.5">—</span>
                      <span className="text-zinc-400 font-light">Commercial advertising assets from agriculture to tech.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] text-[10px] mt-1 shrink-0">◆</span>
                    <div className="text-xs leading-relaxed">
                      <span className="text-white font-semibold">AI Staging &amp; Mockup</span>
                      <span className="text-[#d4af37]/60 mx-1.5">—</span>
                      <span className="text-zinc-400 font-light">Photorealistic product visuals with commercial studio lighting.</span>
                    </div>
                  </li>
                </ul>
              </Link>

              {/* Bottom Row */}
              <div className="flex flex-wrap items-center justify-between pt-4 mt-auto border-t border-white/10 gap-2">
                <Link
                  href="/projects/ecommerce-ads/"
                  className="flex flex-col group/link"
                >
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Client: Aussie Sawit &middot; Howell</span>
                  <span className="text-xs font-semibold text-[#d4af37] group-hover/link:text-[#f3e5ab] tracking-wide mt-0.5 inline-flex items-center gap-1 group-hover/link:underline">
                    View All Assets (12 Works) ↗
                  </span>
                </Link>
                <div>
                  <a
                    href="https://wa.me/6288299258629?text=Hello%20Andrey%20Hong,%20I'd%20like%20to%20inquire%20about%20E-Commerce%20and%20Ad%20visuals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all shadow-sm"
                  >
                    Inquire &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: AI Fashion & Commercial Reels (Blue Sportswear) */}
            <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#181a1f]/95 via-[#101216]/95 to-[#0b0c0e]/98 border border-white/[0.08] p-5 md:p-6 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/60 hover:-translate-y-1.5 flex flex-col justify-between shadow-[0_12px_36px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
              {/* Top edge light sheen */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              {/* Clickable Card Body */}
              <Link
                href="/projects/blue-sportswear/"
                className="block cursor-pointer focus:outline-none flex-1"
                title="View full Blue Sportswear project gallery"
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

                {/* Title & Tools with High Hierarchy */}
                <div className="mt-5">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-white">
                    AI Fashion &amp; Commercial Reels<span className="text-[#d4af37]">.</span>
                  </h3>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-5">
                    <span className="text-[10px] tracking-wider uppercase text-[#d4af37] font-semibold mr-1 font-mono">TOOLS:</span>
                    {["Midjourney", "Veo", "Google Flow", "Premiere Pro"].map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-zinc-300 tracking-wide"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bullet Points with 100% Opacity Headline & Faded Detail */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] text-[10px] mt-1 shrink-0">◆</span>
                    <div className="text-xs leading-relaxed">
                      <span className="text-white font-semibold">Lookbook &amp; Fashion Reels</span>
                      <span className="text-[#d4af37]/60 mx-1.5">—</span>
                      <span className="text-zinc-400 font-light">Activewear fashion video campaign for global brand.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] text-[10px] mt-1 shrink-0">◆</span>
                    <div className="text-xs leading-relaxed">
                      <span className="text-white font-semibold">AI Model Consistency</span>
                      <span className="text-[#d4af37]/60 mx-1.5">—</span>
                      <span className="text-zinc-400 font-light">Identical facial likeness &amp; proportions across multi-locations.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] text-[10px] mt-1 shrink-0">◆</span>
                    <div className="text-xs leading-relaxed">
                      <span className="text-white font-semibold">Cinematic Lighting</span>
                      <span className="text-[#d4af37]/60 mx-1.5">—</span>
                      <span className="text-zinc-400 font-light">Editorial magazine-grade visuals with tactile fabric detail.</span>
                    </div>
                  </li>
                </ul>
              </Link>

              {/* Bottom Row */}
              <div className="flex flex-wrap items-center justify-between pt-4 mt-auto border-t border-white/10 gap-2">
                <Link
                  href="/projects/blue-sportswear/"
                  className="flex flex-col group/link"
                >
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Client: Blue Sportswear (Denmark)</span>
                  <span className="text-xs font-semibold text-[#d4af37] group-hover/link:text-[#f3e5ab] tracking-wide mt-0.5 inline-flex items-center gap-1 group-hover/link:underline">
                    View All Assets (32 Works) ↗
                  </span>
                </Link>
                <div>
                  <a
                    href="https://wa.me/6288299258629?text=Hello%20Andrey%20Hong,%20I'd%20like%20to%20inquire%20about%20AI%20Fashion%20and%20Commercial%20Reels%20(Blue%20Sportswear)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all shadow-sm"
                  >
                    Inquire &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section #craft: AI Workflow Philosophy */}
      <section
        id="craft"
        className="relative w-full border-t border-white/10 overflow-hidden"
        style={{
          background: "radial-gradient(circle at 15% 40%, #1e2228 0%, #0b0c0d 70%)",
        }}
      >
        <div className="py-16 md:py-24 px-5 md:px-16 max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12 md:mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-3 font-mono">
              Standards &amp; Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4 md:mb-6">
              Visual Fundamentals, <br />
              <span className="font-serif italic text-[#e6d5b8]">Powered by Generative Precision.</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base">
              Exceptional visual work is never the result of random prompting. I combine photographic lighting theory, cinematic composition, and anatomical character consistency with modern AI tools to ensure your brand looks authentic, cohesive, and premium.
            </p>
          </div>

          {/* 3 Interactive Cards with Pop-up Modal */}
          <CraftCards />
        </div>
      </section>

      {/* Section #bespoke: Collaboration & Contact */}
      <section
        id="bespoke"
        className="relative w-full border-t border-white/10 overflow-hidden"
        style={{
          background: "radial-gradient(circle at 50% 50%, #1c1f26 0%, #0b0c0d 75%)",
        }}
      >
        <div className="py-16 md:py-28 px-5 md:px-16 max-w-5xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-3 font-mono">
            Available for Freelance &amp; Remote Projects
          </span>
          <h2 className="text-3xl md:text-6xl font-light tracking-tight text-white mb-4 md:mb-6">
            Ready to Elevate Your Brand with <br className="hidden sm:inline" />
            <span className="font-serif italic text-[#e6d5b8]">Next-Gen AI Visuals?</span>
          </h2>
          <p className="max-w-xl mx-auto text-zinc-400 mb-8 md:mb-10 font-light text-sm md:text-base leading-relaxed">
            Open for collaborations on AI UGC video production, commercial ad creative direction, marketplace storefront design, or generative AI workflow consulting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <a
              href="https://wa.me/6288299258629?text=Hello%20Andrey%20Hong,%20I'd%20like%20to%20discuss%20an%20AI%20Creative%20Design%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-[#e6d5b8] transition-colors text-center"
            >
              Chat on WhatsApp (088299258629) &rarr;
            </a>
            <a
              href="https://portfolio.andreydigital.site"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors text-center"
            >
              Open AI Creative Portfolio &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Luxury Minimalist Footer */}
      <footer className="border-t border-white/10 py-10 md:py-12 px-5 md:px-16 text-center text-xs text-zinc-500 font-light flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0b0c0d]">
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
