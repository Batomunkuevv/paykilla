"use client";

import { motion, MotionProps } from "framer-motion";
import { useAnimations } from "@/hooks/useAnimations";
import { ElementType, HTMLAttributes, ReactNode } from "react";

type AnimatedProps = {
    children: ReactNode;
    className?: string;
} & MotionProps &
    HTMLAttributes<HTMLElement>;

const createAnimatedComponent = (Tag: ElementType) => {
    const Component = ({ children, className, initial, animate, transition, variants, whileInView, viewport, ...props }: AnimatedProps) => {
        const { canAnimate } = useAnimations();

        if (!canAnimate) {
            return (
                <Tag className={className} {...props}>
                    {children}
                </Tag>
            );
        }

        const MotionTag = motion.create(Tag);

        return (
            <MotionTag
                className={className}
                initial={initial}
                animate={animate}
                transition={transition}
                variants={variants}
                whileInView={whileInView}
                viewport={viewport}
                {...props}
            >
                {children}
            </MotionTag>
        );
    };

    Component.displayName = `Animated(${typeof Tag === "string" ? Tag : "Custom"})`;

    return Component;
};

export const Animated = {
    Div: createAnimatedComponent("div"),
    Span: createAnimatedComponent("span"),
    Section: createAnimatedComponent("section"),
    Button: createAnimatedComponent("button"),
    H1: createAnimatedComponent("h1"),
    P: createAnimatedComponent("p"),
};
