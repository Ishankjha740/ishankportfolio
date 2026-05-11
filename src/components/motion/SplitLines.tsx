import { motion, useReducedMotion } from "framer-motion";
import { ease, dur, viewportLazy } from "@/lib/motion";

type Props = {
  text: string;
  className?: string;
  /** Splits on " " (word) or "\n" or "letter" — for headlines use "word". */
  by?: "word" | "letter" | "line";
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
};

/**
 * Masked upward reveal — each segment lives in an overflow-hidden line
 * and slides from y=110% to y=0 with a subtle skew correction.
 * Use for headings; do NOT use for body paragraphs.
 */
export const SplitLines = ({
  text,
  className = "",
  by = "word",
  delay = 0,
  stagger = 0.06,
  as = "span",
}: Props) => {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  if (reduce) {
    const Static = as as keyof JSX.IntrinsicElements;
    return <Static className={className}>{text}</Static>;
  }

  const segments =
    by === "letter"
      ? Array.from(text)
      : by === "line"
        ? text.split("\n")
        : text.split(" ");

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportLazy}
      aria-label={text}
    >
      {segments.map((seg, i) => (
        <span
          key={`${seg}-${i}`}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden="true"
          style={{ verticalAlign: "bottom" }}
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "110%", skewY: 4, opacity: 0 },
              visible: {
                y: "0%",
                skewY: 0,
                opacity: 1,
                transition: {
                  duration: dur.md,
                  ease: ease.out,
                  delay: delay + i * stagger,
                },
              },
            }}
          >
            {seg}
            {by === "word" && i < segments.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};