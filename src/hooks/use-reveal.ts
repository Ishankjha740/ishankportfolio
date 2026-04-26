import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal hook.
 * Adds an `animate` class once the element enters the viewport (≥25%).
 * Respects prefers-reduced-motion.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setAnimate(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, animate, className: animate ? "reveal-root animate" : "reveal-root" };
}