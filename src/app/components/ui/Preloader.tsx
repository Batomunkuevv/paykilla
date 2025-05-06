"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { Logo } from "./Logo";

export const Preloader = () => {
    const [progress, setProgress] = useState(0);
    const [isHidden, setIsHidden] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lineHeight, setLineHeight] = useState(165);
    const numberRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        if (numberRef.current) {
            setLineHeight(numberRef.current.offsetHeight);
        }

        const controls = animate(0, 100, {
            duration: 4,
            ease: [0.75, 0.75, 1, 1],
            onUpdate: (v) => setProgress(Math.round(v)),
            onComplete: () => {
                setTimeout(() => {
                    setIsVisible(false);
                    document.body.style.overflow = "";
                }, 500);

                setTimeout(() => {
                    setIsHidden(true);
                }, 1500);
            },
        });

        return () => controls.stop();
    }, []);

    return (
        <div
            className={clsx("py-[16px] fixed inset-0 bg-[#F6F8FF] flex items-end z-[1000] transition-transform duration-1000 will-change-transform", {
                "translate-y-[-100%]": !isVisible,
                "opacity-0": isHidden,
            })}
        >
            <div className="container">
                <div className="mr-[-8px] flex justify-between items-end md:mr-0">
                    <Logo className="w-full max-w-[326px] md:max-w-[240px] tb:max-w-[220px] sm:max-w-[160px] xs:max-w-[140px]" />
                    <div className="mb-[20px] h-[165px] overflow-hidden md:mb-0 md:h-[132px] tb:h-[100px] sm:h-[80px] xs:h-[48px]">
                        <div
                            className="flex flex-col items-end transition-transform duration-300 will-change-transform"
                            style={{
                                transform: `translateY(-${progress * lineHeight}px)`,
                            }}
                        >
                            {Array.from({ length: 101 }, (_, i) => (
                                <div
                                    key={i}
                                    ref={i === 0 ? numberRef : undefined}
                                    className="h-[165px] flex items-center text-[196px] leading-[84.5%] font-medium text-t-orange md:text-[132px] md:leading-[100%] md:h-[132px] tb:h-[100px] tb:text-[100px] sm:h-[80px] sm:text-[80px] xs:h-[48px] xs:text-[48px]"
                                >
                                    {i}%
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
