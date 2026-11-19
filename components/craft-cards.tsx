"use client";

import React, { useState, useEffect, useCallback } from "react";

interface CraftItem {
  id: string;
  num: string;
  title: string;
  tagline: string;
  summary: string;
  badge: string;
  pillars: {
    heading: string;
    points: string[];
  }[];
  toolchain: string[];
  impact: string;
}

const craftData: CraftItem[] = [
  {
    id: "prompt-lighting",
    num: "01",
    badge: "WORKFLOW PILLAR 01",
    title: "Prompt & Lighting Engineering",
    tagline: "The Science Behind Photorealistic Visuals Without AI Artifacts",
    summary:
      "Technical mastery of lighting parameters (cinematic rim light, soft studio fill, golden hour) and camera composition for commercial editorial photorealism.",
    pillars: [
      {
        heading: "Cinematic Lighting Principles",
        points: [
          "Cinematic Rim Lighting: Separates product & talent silhouettes from dark backgrounds for an elevated, high-end impression.",
          "Soft Studio Diffusion: Eliminates harsh shadows across facial contours and physical packaging labels.",
          "Golden Hour & Color Temp: Precise calibration of natural Kelvin color temperatures (3200K tungsten to 5600K daylight).",
        ],
      },
      {
        heading: "Camera Optics & Cinematic Framing",
        points: [
          "Focal Length Emulation: 35mm for environmental storytelling, 50mm for natural gaze, and 85mm f/1.8 for tight product detail isolation.",
          "Depth of Field & Bokeh Precision: Smooth, optical bokeh without the artificial blur artifacts typical of uncalibrated generative AI.",
          "Compositional Angles: Dutch angles, low-angle hero framing, and macro POVs engineered to drive higher ad click-through rates (CTR).",
        ],
      },
    ],
    toolchain: ["Midjourney v6", "Stable Diffusion XL", "ComfyUI", "Photoshop Camera Raw"],
    impact:
      "Visuals entirely free of the 'AI-plastic look'. Authentic skin pores, glass reflections, and fabric weave comparable to high-budget studio photography shoots.",
  },
  {
    id: "character-product",
    num: "02",
    badge: "WORKFLOW PILLAR 02",
    title: "Character & Product Consistency",
    tagline: "100% Identical Talent Likeness & Physical Product Details Across Every Scene",
    summary:
      "Multi-angle seed locking and pose sequencing techniques to keep AI digital talent and physical product details identical across entire ad storylines.",
    pillars: [
      {
        heading: "Face-ID & Seed Locking",
        points: [
          "LoRA & Facial Embeddings: Locks facial bone structure, eye color, and biological proportions of digital talent.",
          "Multi-Expression Mapping: The same talent can smile, speak, or express surprise across multiple scenes without changing faces.",
          "Multi-Angle Viewpoints: Talent likeness remains consistent from straight-on portrait, 45° profile, to over-the-shoulder POV.",
        ],
      },
      {
        heading: "Physical Product & Typography Integrity",
        points: [
          "Packaging Proportion Preservation: Serum bottles, fertilizer sachets, or apparel maintain their authentic physical form factor.",
          "Pixel-Perfect Labeling: Prevents 'AI gibberish' on packaging text using inpainting masks and smart asset overlays.",
          "Material & Shading Response: Glass bottle reflections and activewear knit textures interact realistically with light sources in each scene.",
        ],
      },
    ],
    toolchain: ["ControlNet", "IP-Adapter", "Nano Banana", "LoRA Fine-tuning", "Photoshop Smart Objects"],
    impact:
      "Eliminates visual inconsistencies that erode brand credibility. Provides brands with multi-scene ad campaigns with unbroken visual identity from the first second to the last.",
  },
  {
    id: "commercial-ready",
    num: "03",
    badge: "WORKFLOW PILLAR 03",
    title: "Commercial-Ready Delivery",
    tagline: "Industry-Standard Visual Assets Engineered for Digital Ads & Marketplaces",
    summary:
      "Over 120+ commercial visual assets produced across F&B, beauty, fashion, and e-commerce with native ad ratios (1:1, 9:16, 16:9).",
    pillars: [
      {
        heading: "Multi-Platform Production Standards",
        points: [
          "9:16 Vertical Video: Native aspect ratio for TikTok Ads, Instagram Reels, and YouTube Shorts without awkward cropping.",
          "1:1 Square & 4:5 Portrait: Optimized for Meta Feed Ads (FB/IG) and Shopee/Tokopedia carousel catalogs.",
          "16:9 Master Landscape: Engineered for website hero banners, YouTube In-Stream ads, and retail monitor displays.",
        ],
      },
      {
        heading: "Voiceover & Audio Engineering",
        points: [
          "Generative AI Voice Cloning: Natural human voiceover with persuasive commercial cadence and clear pacing (via ElevenLabs).",
          "Audio-Visual Synchronization: Video cuts matched precisely to the tempo and rhythm of royalty-free commercial tracks.",
          "Dynamic Captions & Visual Hooks: Kinetic typography and bold on-screen hooks to retain viewer drop-off in the crucial first 3 seconds.",
        ],
      },
    ],
    toolchain: ["ElevenLabs", "Google Flow / Veo", "CapCut Pro", "Premiere Pro", "After Effects"],
    impact:
      "3-5x faster production timeline than traditional filming, cutting operational overhead by up to 70% while delivering multinational agency-grade visual quality.",
  },
];

export default function CraftCards() {
  const [activeItem, setActiveItem] = useState<CraftItem | null>(null);

  const handleClose = useCallback(() => {
    setActiveItem(null);
  }, []);

  // Keyboard Escape listener
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (activeItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeItem, handleClose]);

  return (
    <>
      {/* 3 Interactive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {craftData.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveItem(item);
              }
            }}
            className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#181a1f]/90 via-[#101216]/90 to-[#0b0c0e]/95 border border-white/[0.08] hover:border-[#d4af37]/60 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)] focus:outline-none focus:ring-1 focus:ring-[#d4af37] overflow-hidden"
            title={`Open methodology details for ${item.title}`}
          >
            {/* Top edge glow sheen */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <span className="text-2xl md:text-3xl font-serif text-[#d4af37] font-normal block group-hover:scale-105 transition-transform">
                  {item.num}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 px-2 py-0.5 rounded border border-white/10 group-hover:border-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors">
                  Details ↗
                </span>
              </div>
              <h4 className="text-base md:text-lg font-medium text-white mb-2.5 group-hover:text-[#d4af37] transition-colors">
                {item.title}
              </h4>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                {item.summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-zinc-500 group-hover:text-zinc-400 transition-colors">
                View Workflow
              </span>
              <span className="text-[#d4af37] font-medium inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Explore Details &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pop-up Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="craft-modal-title"
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#141517] border border-[#d4af37]/40 p-6 sm:p-8 text-[#F1EFEA] shadow-[0_24px_80px_rgba(0,0,0,0.9)] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-5 border-b border-white/10 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#d4af37] uppercase bg-[#d4af37]/10 px-2.5 py-0.5 rounded border border-[#d4af37]/30">
                    {activeItem.badge}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">
                    QUALITY STANDARDS
                  </span>
                </div>
                <h3
                  id="craft-modal-title"
                  className="text-2xl sm:text-3xl font-serif text-white tracking-tight"
                >
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#e6d5b8] font-light mt-1">
                  {activeItem.tagline}
                </p>
              </div>

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center text-lg transition-transform hover:scale-105 flex-shrink-0 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6">
              {/* Overview */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-sm text-zinc-300 leading-relaxed font-light">
                  {activeItem.summary}
                </p>
              </div>

              {/* Pillars Breakdown */}
              <div className="space-y-5">
                {activeItem.pillars.map((pillar, idx) => (
                  <div key={idx} className="space-y-2.5">
                    <h5 className="text-sm font-semibold tracking-wide text-white uppercase flex items-center gap-2 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                      {pillar.heading}
                    </h5>
                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed pl-3.5 border-l border-white/10">
                      {pillar.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-[#d4af37] text-[10px] mt-1 flex-shrink-0">
                            ◆
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Toolchain */}
              <div>
                <h5 className="text-xs uppercase font-mono tracking-widest text-zinc-400 mb-2.5">
                  Software &amp; Generative AI Stack:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {activeItem.toolchain.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-200 font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Real Impact */}
              <div className="p-4 rounded-xl bg-[#d4af37]/5 border border-[#d4af37]/20">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#d4af37] font-semibold block mb-1">
                  Real Impact for Your Brand:
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  {activeItem.impact}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-zinc-500 font-light">
                Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-400 font-mono text-[10px]">ESC</kbd> or click outside to close
              </span>
              <a
                href={`https://wa.me/6288299258629?text=Hello%20Andrey%20Hong,%20I'm%20interested%20in%20consulting%20on%20${encodeURIComponent(
                  activeItem.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white text-black hover:bg-[#d4af37] font-medium text-xs transition-colors text-center"
              >
                Consult on This Workflow &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
