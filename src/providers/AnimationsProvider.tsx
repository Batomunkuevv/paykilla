"use client";

import { createContext, useEffect, useState, ReactNode } from "react";
import { AnimationsContextType } from "@t";

export const AnimationsContext = createContext<AnimationsContextType>({
    canAnimate: false,
    startAnimations: false,
});

export const AnimationsProvider = ({ children }: { children: ReactNode }) => {
    const [canAnimate, setCanAnimate] = useState(false);
    const [startAnimations, setStartAnimations] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const isMobile = window.innerWidth < 1280;
        if (!isMobile) {
            setCanAnimate(true);

            const timeout = setTimeout(() => {
                setStartAnimations(true);
            }, 5500);

            return () => clearTimeout(timeout);
        }
    }, []);

    return <AnimationsContext.Provider value={{ canAnimate, startAnimations }}>{children}</AnimationsContext.Provider>;
};
