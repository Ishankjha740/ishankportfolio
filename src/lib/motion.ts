// Shared cinematic motion presets — tuned for premium pacing, never floaty.
// Use these everywhere so the whole site speaks one motion language.
import type { Variants, Transition } from "framer-motion";

// Custom cubic-bezier curves (cinematic, expo-out family)
export const ease = {
  out: [0.22, 1, 0.36, 1] as const,            // expo.out
  inOut: [0.83, 0, 0.17, 1] as const,          // expo.inOut
  power4Out: [0.16, 1, 0.3, 1] as const,
  power2Out: [0.33, 1, 0.68, 1] as const,
  drama: [0.6, 0.01, 0.05, 0.95] as const,
};

export const dur = {
  xs: 0.45,
  sm: 0.7,
  md: 1.0,
  lg: 1.3,
  xl: 1.6,
};

export const stagger = {
  tight: 0.04,
  default: 0.07,
  loose: 0.12,
  cards: 0.09,
};

// Generic reveal variants — y-axis + opacity, GPU friendly.
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: dur.md, ease: ease.out },
  },
};

export const revealUpSubtle: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.sm, ease: ease.out },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 14 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: dur.md, ease: ease.power4Out },
  },
};

export const lineReveal: Variants = {
  hidden: { y: "110%" },
  visible: (i: number = 0) => ({
    y: "0%",
    transition: { duration: dur.md, ease: ease.out, delay: i * 0.07 },
  }),
};

export const containerStagger = (delay = 0, gap = stagger.default): Variants => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: delay,
      staggerChildren: gap,
    },
  },
});

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: dur.md, ease: ease.out } },
};

export const drawX: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: dur.lg, ease: ease.out },
  },
};

export const viewportOnce = { once: true, amount: 0.2 } as const;
export const viewportLazy = { once: true, amount: 0.15, margin: "0px 0px -10% 0px" } as const;

export const hoverLift: Transition = { duration: 0.4, ease: ease.out };