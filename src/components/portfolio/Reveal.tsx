import { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms (applied via CSS variable). */
  delay?: number;
  /** Render-as element. Defaults to div. */
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  /** Slightly stronger upward translate. Defaults to 16px. */
  distance?: number;
};

/**
 * Reveal — wraps children with a scroll-triggered fade + translateY animation.
 * Uses IntersectionObserver via useReveal; honors prefers-reduced-motion.
 */
export const Reveal = ({
  children,
  delay = 0,
  as,
  className = "",
  style,
  distance = 16,
}: RevealProps) => {
  const Tag = (as ?? "div") as ElementType;
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{
        ["--reveal-delay" as string]: `${delay}ms`,
        ["--reveal-distance" as string]: `${distance}px`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
};