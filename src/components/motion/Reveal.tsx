import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "framer-motion";
import {
  containerStagger,
  revealUp,
  revealUpSubtle,
  scaleIn,
  fadeIn,
  viewportLazy,
  ease,
  dur,
} from "@/lib/motion";

type Variant = "up" | "subtle" | "scale" | "fade";

const variantMap: Record<Variant, Variants> = {
  up: revealUp,
  subtle: revealUpSubtle,
  scale: scaleIn,
  fade: fadeIn,
};

type RevealProps = HTMLMotionProps<"div"> & {
  variant?: Variant;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
};

/** Single in-view reveal. GPU-friendly (transform + opacity only). */
export const Reveal = ({
  variant = "up",
  delay = 0,
  children,
  ...rest
}: RevealProps) => {
  const reduce = useReducedMotion();
  const v = variantMap[variant];
  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={viewportLazy}
      variants={reduce ? undefined : v}
      transition={{ duration: dur.md, ease: ease.out, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

type StaggerProps = HTMLMotionProps<"div"> & {
  delay?: number;
  gap?: number;
};

/** Container that staggers any direct <RevealItem /> children. */
export const Stagger = ({ delay = 0, gap = 0.08, children, ...rest }: StaggerProps) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={viewportLazy}
      variants={reduce ? undefined : containerStagger(delay, gap)}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

type ItemProps = HTMLMotionProps<"div"> & { variant?: Variant };

/** Child of <Stagger /> — inherits parent stagger timing. */
export const RevealItem = ({ variant = "up", children, ...rest }: ItemProps) => {
  const reduce = useReducedMotion();
  return (
    <motion.div variants={reduce ? undefined : variantMap[variant]} {...rest}>
      {children}
    </motion.div>
  );
};