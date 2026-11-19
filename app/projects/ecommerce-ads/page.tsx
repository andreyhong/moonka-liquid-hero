import { Metadata } from "next";
import CaseStudyDetail, { MediaItem } from "@/components/case-study-detail";

export const metadata: Metadata = {
  title: "Aussie Sawit & Howell Niaga — E-Commerce & Commercial Ads | Andrey Hong",
  description:
    "High-conversion e-commerce marketplace decorations, social advertisements, brochures, and commercial product video assets for Aussie Sawit and Howell Niaga.",
};

const items: MediaItem[] = [
  {
    id: "1o1rmq9qA5LrgZ6XKtViCcYCdMDWSLujW",
    title: "01 / Social Creative 01 — Aussie Sawit",
    type: "IMAGE",
  },
  {
    id: "1ouvuUCH9Xh8w-vmaeWqQFoYrpYl9xdpG",
    title: "02 / Social Creative 02 — Aussie Sawit",
    type: "IMAGE",
  },
  {
    id: "1kGuma5MCNJma5swYC4qIYLFWKpUaaJbL",
    title: "03 / Social Creative 03 — Aussie Sawit",
    type: "IMAGE",
  },
  {
    id: "1bFg_GiR-xayBlJZDCyvO90r1ewI_mpFg",
    title: "04 / Social Creative 04 — Aussie Sawit",
    type: "IMAGE",
  },
  {
    id: "1e6PBY88z5T-oAtkfqHDjtBMDMdcJSDTc",
    title: "05 / Image Advertisement 01 — Aussie Sawit",
    type: "IMAGE",
  },
  {
    id: "1NlfR58fay8P74suzz9SvNfq-KIeAzdCw",
    title: "06 / Image Advertisement 02 — Aussie Sawit",
    type: "IMAGE",
  },
  {
    id: "1I1xcMrrKXGyXjltM8brd91F-XNSuWURf",
    title: "07 / AI Product Visual — Howell Niaga",
    type: "IMAGE",
  },
  {
    id: "15XqnaKp7_6IAqKj9fbyuYuX3nzZK91iU",
    title: "08 / Campaign Visual — Howell Niaga",
    type: "IMAGE",
  },
  {
    id: "1i5JyUPbdHW_z18Gc35H7j-Qthb_qz8GT",
    title: "09 / Brochure Cover — Howell Niaga",
    type: "IMAGE",
  },
  {
    id: "14iZmAVnsM_hNCZMaodXqiNJQbvdLQoI-",
    title: "10 / Brochure Back — Howell Niaga",
    type: "IMAGE",
  },
  {
    id: "1XifFb7q6gZkNSJ155HX4-A8xnmzd8iPw",
    title: "11 / Campaign Creative — Howell Niaga",
    type: "IMAGE",
  },
  {
    id: "19-O9CK4-c3DgP_e1eOyEx1xExf_94al5",
    title: "12 / Commercial Product Showcase — Howell Niaga",
    type: "VIDEO",
  },
];

export default function EcommerceAdsPage() {
  return (
    <CaseStudyDetail
      overline="E-COMMERCE & COMMERCIAL ADS"
      year="2026"
      title="Aussie Sawit & Howell Niaga"
      subtitle="High-impact visual assets engineered for marketplace conversion and brand authority."
      intro="Commercial storefront visual production (Shopee & Tokopedia Store Decoration), high-converting social ads, product brochures, and commercial product video assets for agribusiness (Aussie Sawit) and consumer electronics (Howell Niaga)."
      role="E-commerce store decoration, generative AI prompting, commercial retouching, product video production"
      deliverables="Marketplace decorations, social feed ads, multi-page brochures, commercial product video"
      approachTitle="Commercial intent meets AI visual craftsmanship."
      approachSteps="Brand research → AI composition & mockup ideation → product placement retouching → multi-format asset export"
      approachNote="Structured visual hierarchy and crisp typography engineered specifically to maximize ad CTR and digital storefront sales conversion."
      nextProject={{
        title: "Blue Sportswear (Denmark)",
        href: "/projects/blue-sportswear/",
      }}
      items={items}
    />
  );
}
