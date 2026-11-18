"use client";

import React, { useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  maxRotation?: number; // max tilt degrees (default: 12)
  perspective?: number; // perspective in px (default: 1000)
  scale?: number; // scale on hover (default: 1.02)
  glareColor?: string; // radial glare color
  elevateZ?: number; // Z-elevation in px (default: 15)
}

export default function TiltCard({
  children,
  className = "",
  href,
  maxRotation = 12,
  perspective = 1000,
  scale = 1.02,
  glareColor = "rgba(212, 175, 55, 0.15)",
  elevateZ = 15,
  style,
  onClick,
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [transformStyle, setTransformStyle] = useState("");
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [shadowStyle, setShadowStyle] = useState("");

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      // Normalized coordinates: -1 at left/top, 0 at center, +1 at right/bottom
      const normX = (clientX / rect.width) * 2 - 1;
      const normY = (clientY / rect.height) * 2 - 1;

      // Invert Y for standard 3D perspective rotation
      const rotateX = -normY * maxRotation;
      const rotateY = normX * maxRotation;

      // Dynamic shadow based on tilt angle
      const shadowX = -rotateY * 1.5;
      const shadowY = rotateX * 1.5 + 14;

      setTransformStyle(
        `perspective(${perspective}px) rotateX(${rotateX.toFixed(
          2
        )}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(${elevateZ}px) scale3d(${scale}, ${scale}, ${scale})`
      );

      setShadowStyle(
        `${shadowX.toFixed(1)}px ${shadowY.toFixed(
          1
        )}px 35px rgba(0, 0, 0, 0.65), 0 0 25px rgba(212, 175, 55, 0.12)`
      );

      setGlarePos({
        x: (clientX / rect.width) * 100,
        y: (clientY / rect.height) * 100,
        opacity: 1,
      });
    },
    [maxRotation, perspective, scale, elevateZ]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smooth reset
    setTransformStyle(
      `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)`
    );
    setShadowStyle("0 10px 30px rgba(0,0,0,0.3)");
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    // Don't navigate if user clicked on WhatsApp button or any explicit action
    if (
      target.closest(
        'a[href*="wa.me"], a[target="_blank"], button, [data-prevent-nav="true"]'
      )
    ) {
      return;
    }

    if (href) {
      if (e.metaKey || e.ctrlKey) {
        window.open(href, "_blank");
      } else {
        router.push(href);
      }
    }

    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (href && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      router.push(href);
    }
    props.onKeyDown?.(e);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={href ? "link" : props.role}
      tabIndex={href ? 0 : props.tabIndex}
      className={`relative will-change-transform ${
        href ? "cursor-pointer" : ""
      } ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform: transformStyle || `perspective(${perspective}px)`,
        boxShadow: shadowStyle,
        transition: isHovered
          ? "transform 0.1s cubic-bezier(0.05, 0.2, 0.1, 1), box-shadow 0.15s ease-out"
          : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease-out",
        ...style,
      }}
      {...props}
    >
      {/* 3D Depth Layer */}
      <div
        className="w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered ? "translateZ(8px)" : "translateZ(0px)",
          transition: isHovered
            ? "transform 0.1s ease-out"
            : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      >
        {children}
      </div>

      {/* Dynamic Specular Glare / Light Reflection */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden transition-opacity duration-300"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, ${glareColor}, transparent 70%)`,
        }}
      />
    </div>
  );
}
