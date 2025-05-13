import { HTMLAttributes, ReactNode } from "react";
import { MotionProps } from "framer-motion";

export type AnimatedProps = {
    children: ReactNode;
    className?: string;
} & MotionProps &
    HTMLAttributes<HTMLElement>;
