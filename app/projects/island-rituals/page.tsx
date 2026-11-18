import { Metadata } from "next";
import CaseStudyDetail, { MediaItem } from "@/components/case-study-detail";

export const metadata: Metadata = {
  title: "Island Rituals — AI UGC Video Ads | Andrey Hong",
  description:
    "Five paid, client-approved AI-assisted short-form video creatives for Island Rituals Nail Serum.",
};

const items: MediaItem[] = [
  {
    id: "1fiBChwVcn-p2VZZQB8QvoF0uAEoTp_ay",
    title: "01 / UGC 01 — Branded",
    type: "VIDEO",
  },
  {
    id: "1WEqaPSJoyEdcRgTL_t3BBC6qlkO6bP4_",
    title: "02 / UGC 02 — Unbranded",
    type: "VIDEO",
  },
  {
    id: "1KwXyT_0HfizgiCTWd4A0rou3iWuNk-eo",
    title: "03 / POV Product Demo",
    type: "VIDEO",
  },
  {
    id: "1H2707vp9dKMis7vFJe_jCzW0GeS-o_vL",
    title: "04 / Testimonial — Nail Detail",
    type: "VIDEO",
  },
  {
    id: "18P89jBewhHuWhoOjliewM-74Sl5SfbVt",
    title: "05 / Testimonial — Presenter",
    type: "VIDEO",
  },
];

export default function IslandRitualsPage() {
  return (
    <CaseStudyDetail
      overline="AI UGC VIDEO ADS"
      year="2026"
      title="Island Rituals"
      subtitle="One product. Five distinct stories."
      intro="Five paid, client-approved AI-assisted short-form video creatives for Island Rituals Nail Serum."
      role="AI video creation, creative strategy, prompting, editing"
      deliverables="UGC presentation, POV demonstration, testimonials"
      approachTitle="From concept to finished creative."
      approachSteps="Creative research → script and storyboard → AI visuals → image-to-video → editing → client review"
      approachNote="Natural creator-style presentation, consistent product appearance, nail detail and mobile-first delivery."
      nextProject={{
        title: "Aussie Sawit & Howell Niaga",
        href: "/projects/ecommerce-ads/",
      }}
      items={items}
    />
  );
}
