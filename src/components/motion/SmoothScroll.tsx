import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Global smooth scroll. Mount once, near the root.
 * - Inertia-tuned for premium pacing
 * - Skips on touch + reduced motion (native scroll feels better there)
 * - Hijacks in-page anchor clicks so #section navigation glides
 */
export const SmoothScroll = () => {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || isTouch) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      lerp: 0.1,
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Expose for debug / programmatic scrolls
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    // Smoothly handle anchor links (Nav uses href="#section")
    const onAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!target) return;
      const hash = target.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -16, duration: 1.4 });
      // keep hash in url without jumping
      history.replaceState(null, "", hash);
    };
    document.addEventListener("click", onAnchorClick);

    // Velocity → CSS var for motion-blur effects on fast scroll
    const onScroll = ({ velocity }: { velocity: number }) => {
      const v = Math.min(Math.abs(velocity) / 60, 1);
      document.documentElement.style.setProperty("--scroll-velocity", v.toFixed(3));
    };
    lenis.on("scroll", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return null;
};