import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type Props = {
  children: React.ReactNode;
  /** Total y travel in pixels across the section's scroll lifetime. */
  offset?: number;
  className?: string;
  /** When true, also subtly scales (1.06 → 1) like cinematic image plates. */
  scale?: boolean;
};

/** Scroll-linked vertical parallax. Use sparingly on background plates / images. */
export const Parallax = ({ children, offset = 80, className, scale = false }: Props) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const s = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ y, scale: scale ? s : undefined, willChange: "transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};