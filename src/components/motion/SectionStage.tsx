import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ease } from "@/lib/motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Reduce intensity for short sections. */
  intensity?: "low" | "medium" | "high";
};

/**
 * Section choreography wrapper — each section lifts/scales/blurs
 * in and softly drifts away on exit. Connects sections into one
 * continuous cinematic flow.
 */
export const SectionStage = ({
  children,
  className = "",
  id,
  intensity = "medium",
}: Props) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const intensityMap = {
    low: { y: 28, scale: 0.02, blur: 4 },
    medium: { y: 48, scale: 0.035, blur: 6 },
    high: { y: 70, scale: 0.05, blur: 8 },
  } as const;
  const cfg = intensityMap[intensity];

  const y = useTransform(scrollYProgress, [0, 0.18, 0.85, 1], [cfg.y, 0, 0, -cfg.y * 0.6]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.85, 1],
    [1 - cfg.scale, 1, 1, 1 - cfg.scale * 0.6],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.9, 1], [0.55, 1, 1, 0.7]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.18, 0.85, 1],
    [`blur(${cfg.blur}px)`, "blur(0px)", "blur(0px)", `blur(${cfg.blur * 0.5}px)`],
  );

  if (reduce) {
    return (
      <section ref={ref} id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      style={{ y, scale, opacity, filter, willChange: "transform, opacity, filter" }}
      transition={{ ease: ease.out }}
    >
      {children}
    </motion.section>
  );
};