import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Global cinematic atmosphere:
 *  - top scroll progress bar (gold)
 *  - soft mouse-follow light
 *  - film-grain overlay
 *  - subtle vignette
 *  - very subtle floating ambient particles
 * All purely visual, pointer-events: none, GPU-friendly.
 */
export const AmbientLayer = () => {
  const lightRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      if (lightRef.current) {
        lightRef.current.style.transform = `translate3d(${cx - 320}px, ${cy - 320}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Scroll progress bar — top edge */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-citrus origin-left pointer-events-none"
        style={{ scaleX: progress }}
      />

      {/* Mouse-follow ambient light (desktop only, css ::before-style) */}
      <div
        ref={lightRef}
        aria-hidden
        className="hidden lg:block fixed top-0 left-0 z-[1] pointer-events-none w-[640px] h-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--citrus) / 0.06) 0%, hsl(var(--citrus) / 0.02) 35%, transparent 70%)",
          mixBlendMode: "screen",
          willChange: "transform",
        }}
      />

      {/* Film grain — extremely subtle, fixed overlay */}
      <div
        aria-hidden
        className="fixed inset-0 z-[2] pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "160px 160px",
        }}
      />

      {/* Vignette — dark soft edges */}
      <div
        aria-hidden
        className="fixed inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, hsl(var(--paper) / 0.55) 100%)",
        }}
      />

      {/* Ambient gold particles — slow drift, hidden on mobile */}
      <div
        aria-hidden
        className="hidden md:block fixed inset-0 z-[1] pointer-events-none overflow-hidden"
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute block rounded-full"
            style={{
              left: `${(i * 73) % 100}%`,
              top: `${(i * 41) % 100}%`,
              width: i % 3 === 0 ? 3 : 2,
              height: i % 3 === 0 ? 3 : 2,
              background: "hsl(var(--citrus) / 0.5)",
              boxShadow: "0 0 8px hsl(var(--citrus) / 0.4)",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.15, 0.55, 0.15],
            }}
            transition={{
              duration: 8 + (i % 5) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
    </>
  );
};