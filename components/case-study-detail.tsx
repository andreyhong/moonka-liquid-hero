"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import TiltCard from "@/components/ui/tilt-card";
import "./case-study.css";

export interface MediaItem {
  id: string;
  title: string;
  type: "VIDEO" | "IMAGE";
}

export interface CaseStudyProps {
  overline: string;
  year?: string;
  title: string;
  subtitle: string;
  intro: string;
  role: string;
  deliverables: string;
  approachTitle: string;
  approachSteps: string;
  approachNote?: string;
  galleryKicker?: string;
  galleryTitle?: string;
  galleryDesc?: string;
  nextProject: {
    title: string;
    href: string;
  };
  items: MediaItem[];
}

export default function CaseStudyDetail({
  overline,
  year = "2026",
  title,
  subtitle,
  intro,
  role,
  deliverables,
  approachTitle,
  approachSteps,
  approachNote,
  galleryKicker = "03 / SELECTED ORIGINAL MEDIA",
  galleryTitle = "See the",
  galleryDesc = "Real source files from the client drive. Select any item to view or play in full-screen.",
  nextProject,
  items,
}: CaseStudyProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const isOpen = activeIndex !== null && activeIndex >= 0 && activeIndex < items.length;
  const currentItem = isOpen ? items[activeIndex] : null;

  const handleOpen = (index: number) => {
    setActiveIndex(index);
  };

  const handleClose = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + items.length) % items.length;
    });
  }, [items.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % items.length;
    });
  }, [items.length]);

  // Lock body scroll and handle keyboard events
  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("lb-lock");

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("lb-lock");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, handleClose, handlePrev, handleNext]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0]?.screenX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = (e.changedTouches[0]?.screenX ?? touchStartX.current) - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="case-body">
      {/* Navigation Header */}
      <header className="case-nav">
        <Link href="/" className="case-wordmark">
          ANDREY<span className="case-mark-dot">●</span>HONG
        </Link>
        <nav className="case-nav-links">
          <Link href="/#collection">ALL WORK</Link>
          <Link href="/#craft">AI WORKFLOW</Link>
          <Link href="/#bespoke">CONTACT</Link>
          <a
            href="https://portfolio.andreydigital.site"
            target="_blank"
            rel="noopener noreferrer"
          >
            PORTFOLIO ↗
          </a>
        </nav>
        <Link href="/#collection" className="case-nav-cta">
          ← BACK TO HOME
        </Link>
      </header>

      <main className="case-page">
        {/* Section 1: Hero */}
        <section className="case-hero">
          <div className="case-page-overline">
            <span>{overline}</span>
            <span>{year}</span>
          </div>
          <h1>
            {title}
            <span className="period">.</span>
          </h1>
          <p className="case-subtitle">{subtitle}</p>
          <div className="case-page-intro">
            <p>{intro}</p>
            <a href="#gallery" className="case-explore-btn">
              EXPLORE THE WORK ↓
            </a>
          </div>
        </section>

        {/* Section 2: Creative Brief & Process */}
        <section className="case-detail-block">
          <div className="case-detail-grid">
            <div>
              <span className="kicker">01 / PROJECT OVERVIEW</span>
              <h2>
                The
                <br />
                <i>creative brief.</i>
              </h2>
            </div>
            <div className="case-detail-facts">
              <div>
                <small>MY ROLE</small>
                <p>{role}</p>
              </div>
              <div>
                <small>DELIVERABLES</small>
                <p>{deliverables}</p>
              </div>
            </div>
          </div>

          <div className="case-process">
            <span className="kicker">02 / APPROACH</span>
            <h3>{approachTitle}</h3>
            <p>{approachSteps}</p>
            {approachNote && <p className="case-note">{approachNote}</p>}
          </div>
        </section>

        {/* Section 3: Media Gallery */}
        <section className="case-gallery" id="gallery">
          <span className="kicker">{galleryKicker}</span>
          <div className="case-gallery-head">
            <h2>
              {galleryTitle}
              <br />
              <i>work.</i>
            </h2>
            <p>{galleryDesc}</p>
          </div>

          <div className="case-gallery-grid">
            {items.map((item, idx) => {
              return (
                <TiltCard
                  key={`${item.id}-${idx}`}
                  maxRotation={10}
                  elevateZ={14}
                  glareColor="rgba(212, 255, 95, 0.16)"
                  className={`case-media-tile ${
                    item.type === "VIDEO" ? "case-tile-video" : "case-tile-image"
                  }`}
                  onClick={() => handleOpen(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleOpen(idx);
                    }
                  }}
                >
                  <div
                    className={`case-media-frame ${
                      item.type === "VIDEO"
                        ? "case-media-video"
                        : "case-media-image"
                    }`}
                    style={{ transform: "translateZ(18px)", transformStyle: "preserve-3d" }}
                  >
                    <img
                      loading="lazy"
                      src={`https://drive.google.com/thumbnail?id=${encodeURIComponent(
                        item.id
                      )}&sz=w1000`}
                      alt={item.title}
                    />
                    <span style={{ transform: "translateZ(26px)" }}>
                      {item.type === "VIDEO" ? "▶ PLAY" : "VIEW IMAGE"}
                    </span>
                  </div>
                  <div
                    className="case-media-foot"
                    style={{ transform: "translateZ(12px)" }}
                  >
                    <strong>{item.title}</strong>
                    <small>{item.type}</small>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </section>

        {/* Section 4: Next Project */}
        <section className="case-next">
          <div>
            <span className="kicker">04 / NEXT PROJECT</span>
            <h2>Keep exploring.</h2>
          </div>
          <Link href={nextProject.href}>{nextProject.title} ↗</Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="case-footer">
        <Link href="/" className="case-wordmark">
          ANDREY<span className="case-mark-dot">●</span>HONG
        </Link>
        <p>CREATIVE THINKING. NEW POSSIBILITIES.</p>
        <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          BACK TO TOP ↑
        </a>
        <span>&copy; 2026 ANDREY HONG</span>
      </footer>

      {/* Lightbox Modal (Exact Screenshot 2 Implementation) */}
      {isOpen && currentItem && (
        <div
          className="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio media viewer"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleClose();
            }
          }}
        >
          {/* Blurred Background with current thumbnail */}
          <div
            className="lb-background"
            style={{
              backgroundImage: `url("https://drive.google.com/thumbnail?id=${encodeURIComponent(
                currentItem.id
              )}&sz=w1600")`,
            }}
          />

          <div className="lb-shell">
            {/* Toolbar */}
            <div className="lb-toolbar">
              <span className="lb-count">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")}
              </span>
              <span className="lb-label">
                {currentItem.type === "VIDEO" ? "VIDEO PROJECT" : "IMAGE PROJECT"}
              </span>
              <button
                type="button"
                className="lb-close"
                onClick={handleClose}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Stage */}
            <div
              className="lb-stage"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  handleClose();
                }
              }}
            >
              <button
                type="button"
                className="lb-prev"
                onClick={handlePrev}
                disabled={items.length <= 1}
                aria-label="Previous artwork"
              >
                ‹
              </button>

              <div
                className="lb-content"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    handleClose();
                  }
                }}
              >
                <div
                  className={`lb-media ${
                    currentItem.type === "VIDEO" ? "lb-video" : "lb-image"
                  }`}
                >
                  {currentItem.type === "VIDEO" ? (
                    <>
                      <div className="lb-video-frame">
                        <iframe
                          src={`https://drive.google.com/file/d/${encodeURIComponent(
                            currentItem.id
                          )}/preview`}
                          title={currentItem.title}
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          loading="eager"
                        />
                      </div>
                      <a
                        href={`https://drive.google.com/file/d/${encodeURIComponent(
                          currentItem.id
                        )}/view`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lb-watch-external"
                      >
                        OPEN FULL VIDEO ↗
                      </a>
                    </>
                  ) : (
                    <img
                      src={`https://drive.google.com/thumbnail?id=${encodeURIComponent(
                        currentItem.id
                      )}&sz=w2000`}
                      alt={currentItem.title}
                    />
                  )}
                </div>
              </div>

              <button
                type="button"
                className="lb-next"
                onClick={handleNext}
                disabled={items.length <= 1}
                aria-label="Next artwork"
              >
                ›
              </button>
            </div>

            {/* Bottom Bar */}
            <div className="lb-bottom">
              <span className="lb-hint">ESC TO CLOSE · ← → TO NAVIGATE</span>
              <span className="lb-caption">{currentItem.title}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
