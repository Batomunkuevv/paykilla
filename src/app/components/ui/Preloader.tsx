"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { Logo } from "./Logo";

export const Preloader = () => {
    const [loaded, setLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [lineHeight, setLineHeight] = useState(165);

    const numberRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        if (numberRef.current) {
            setLineHeight(numberRef.current.offsetHeight);
        }
    }, []);

    useEffect(() => {
        const handleLoad = () => {
            setLoaded(true);
        };

        const forceLoadedTimeout = setTimeout(() => {
            setLoaded(true);
        }, 3000);

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
            clearTimeout(forceLoadedTimeout);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (!loaded) {
                    return Math.min(prev + 1, 100);
                } else {
                    if (prev < 100) {
                        return prev + 1;
                    } else {
                        clearInterval(interval);
                        setTimeout(() => {
                            setIsVisible(false);
                            document.body.style.overflow = "";
                        }, 700);
                        return prev;
                    }
                }
            });
        }, 25);
        return () => clearInterval(interval);
    }, [loaded]);

    return (
        <div
            className={clsx("py-[16px] fixed inset-0 bg-[#F6F8FF] flex items-end z-[1000] transition-all duration-1000", {
                "translate-y-[-100%]": !isVisible,
            })}
        >
            <div className="container">
                <div className="mr-[-8px] flex justify-between items-end md:mr-0">
                    <Logo className="w-full max-w-[326px] md:max-w-[240px] tb:max-w-[220px] sm:max-w-[160px] xs:max-w-[140px]" />
                    <div className="mb-[20px] h-[165px] overflow-hidden md:mb-0 md:h-[132px] tb:h-[100px] sm:h-[80px] xs:h-[48px]">
                        <div
                            className="flex flex-col items-end transition-transform duration-300"
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
