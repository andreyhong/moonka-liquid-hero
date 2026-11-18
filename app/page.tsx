import SculptureHero from "@/components/ui/liquid-sculpture-hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111110] text-[#F1EFEA]">
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
          href: "https://wa.me/6288299258629?text=Halo%20Andrey%20Hong,%20saya%20tertarik%20konsultasi%20pembuatan%20website%20eksklusif",
        }}
        secondaryCta={{
          label: "Lihat Lookbook",
          href: "https://portfolio.andreydigital.site",
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
    </main>
  );
}
