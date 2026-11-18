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
    tagline: "Sains di Balik Visual Photorealistic Tanpa Distorsi AI",
    summary:
      "Penguasaan parameter teknis pencahayaan (cinematic rim light, soft studio fill, golden hour) dan komposisi sudut kamera untuk visual photorealistic kelas editorial komersial.",
    pillars: [
      {
        heading: "Prinsip Pencahayaan Sinematik",
        points: [
          "Cinematic Rim Lighting: Memisahkan siluet produk & talent dari latar belakang gelap untuk impresi premium berkelas.",
          "Soft Studio Diffuser: Menghilangkan bayangan kasar di kontur wajah dan label kemasan fisik.",
          "Golden Hour & Color Temp: Kalibrasi temperatur kelvin (3200K tungsten hingga 5600K daylight) yang natural.",
        ],
      },
      {
        heading: "Optik Kamera & Sudut Sinematik",
        points: [
          "Focal Length Emulation: 35mm untuk environmental story, 50mm untuk natural gaze, dan 85mm f/1.8 untuk isolasi detail produk.",
          "Depth of Field & Bokeh Presisi: Bokeh halus tanpa artefak blur artifisial khas generative AI acak.",
          "Komposisi Dutch Angle, Low-Angle & Macro POV untuk meningkatkan click-through rate (CTR) iklan.",
        ],
      },
    ],
    toolchain: ["Midjourney v6", "Stable Diffusion XL", "ComfyUI", "Photoshop Camera Raw"],
    impact:
      "Visual bebas dari 'AI-plastic look'. Tekstur pori-pori kulit, pantulan kaca, dan serat kain tampil otentik layaknya pemotretan studio profesional berbiaya puluhan juta rupiah.",
  },
  {
    id: "character-product",
    num: "02",
    badge: "WORKFLOW PILLAR 02",
    title: "Character & Product Consistency",
    tagline: "Menjaga Wajah Talent & Detail Fisik Produk 100% Identik Antar Scene",
    summary:
      "Teknik multi-angle seed locking dan pose sequencing agar wajah model AI dan detail produk fisik tetap identik di seluruh alur cerita video iklan.",
    pillars: [
      {
        heading: "Face-ID & Seed Locking",
        points: [
          "LoRA & Facial Embeddings: Mengunci struktur wajah, warna mata, dan proporsi biologis digital talent.",
          "Multi-Expression Mapping: Talent yang sama dapat tersenyum, berbicara, atau ekspresi terkejut di beragam scene tanpa berganti wajah.",
          "Multi-Angle Viewpoints: Wajah tetap konsisten dari sudut tampak depan, profil samping 45°, hingga over-the-shoulder POV.",
        ],
      },
      {
        heading: "Integritas Produk Fisik & Tipografi",
        points: [
          "Preservasi Proporsi Kemasan: Botol serum, sachet pupuk, atau pakaian mempertahankan rasio bentuk fisik aslinya.",
          "Pixel-Perfect Labeling: Mencegah 'AI gibberish' pada teks kemasan dengan teknik inpainting mask & smart asset overlay.",
          "Material & Shading Response: Refleksi botol kaca dan tekstur rajutan activewear berinteraksi realistis dengan sumber cahaya di tiap scene.",
        ],
      },
    ],
    toolchain: ["ControlNet", "IP-Adapter", "Nano Banana", "LoRA Fine-tuning", "Photoshop Smart Objects"],
    impact:
      "Mengeliminasi inkonsistensi yang biasa merusak kredibilitas brand. Brand Anda mendapatkan video iklan multi-scene dengan identitas visual yang solid dari detik pertama hingga akhir.",
  },
  {
    id: "commercial-ready",
    num: "03",
    badge: "WORKFLOW PILLAR 03",
    title: "Commercial-Ready Delivery",
    tagline: "Aset Visual Standar Industri Siap Tayang untuk Digital Ads & Marketplace",
    summary:
      "Telah memproduksi 120+ aset visual di sektor F&B, beauty, fashion, dan e-commerce dengan standar rasio iklan digital (1:1, 9:16, 16:9).",
    pillars: [
      {
        heading: "Standar Multi-Platform Siap Pasang",
        points: [
          "9:16 Vertical Video: Rasio native untuk TikTok Ads, Instagram Reels, dan YouTube Shorts tanpa cropping canggung.",
          "1:1 Square & 4:5 Portrait: Dioptimalkan untuk Meta Feed Ads (FB/IG) dan carousel katalog Shopee/Tokopedia.",
          "16:9 Master Landscape: Untuk etalase hero website, YouTube In-Stream, dan display monitor retail.",
        ],
      },
      {
        heading: "Voiceover & Audio Engineering",
        points: [
          "Generative AI Voice Cloning: Audio suara natural dengan intonasi persuasif (akses ElevenLabs).",
          "Audio-Visual Synchronization: Pemotongan ritme video mengikuti ketukan musik komersial bebas royalti.",
          "Subtitles & Visual Hook: Penambahan tipografi dinamis untuk mempertahankan retention rate audiens di 3 detik pertama.",
        ],
      },
    ],
    toolchain: ["ElevenLabs", "Google Flow / Veo", "CapCut Pro", "Premiere Pro", "After Effects"],
    impact:
      "Waktu produksi 3-5x lebih cepat dibanding syuting konvensional, menghemat biaya operasional hingga 70% dengan kualitas visual berstandar agensi multinasional.",
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
            className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.025] border border-white/10 hover:border-[#d4af37]/60 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between shadow-lg hover:shadow-[0_16px_40px_rgba(212,175,55,0.12)] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
            title={`Buka detail metodologi ${item.title}`}
          >
            <div>
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <span className="text-2xl md:text-3xl font-serif text-[#d4af37] font-normal block group-hover:scale-105 transition-transform">
                  {item.num}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 px-2 py-0.5 rounded border border-white/10 group-hover:border-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors">
                  Detail ↗
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
                Lihat Alur Kerja
              </span>
              <span className="text-[#d4af37] font-medium inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Pelajari Detail &rarr;
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
                    STANDAR KUALITAS
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
                aria-label="Tutup pop up"
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
                  Hasil Nyata untuk Brand Anda:
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  {activeItem.impact}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-zinc-500 font-light">
                Tekan <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-400 font-mono text-[10px]">ESC</kbd> atau klik luar untuk menutup
              </span>
              <a
                href={`https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20tertarik%20konsultasi%20mengenai%20${encodeURIComponent(
                  activeItem.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white text-black hover:bg-[#d4af37] font-medium text-xs transition-colors text-center"
              >
                Konsultasi Penerapan Ini &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
