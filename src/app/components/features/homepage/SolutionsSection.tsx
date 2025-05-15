"use client";

import clsx from "clsx";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import SwiperCore from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { solutions as originalSolutions } from "@data";

import { ResponsiveImage } from "@components";

const solutions = [...originalSolutions, ...originalSolutions];

export const SolutionsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const sectionRef = useRef<HTMLElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const swiperRef = useRef<SwiperCore | null>(null);
    const bigTextRef = useRef<HTMLSpanElement>(null);

    const isInView = useInView(sectionRef, { amount: 0.7 });

    const handleTabClick = (index: number) => {
        const swiper = swiperRef.current;

        if (!swiper) return;

        setActiveIndex(index);
        swiper.slideToLoop(index, 750);
    };

    useEffect(() => {
        if (isInView) {
            document.body.style.background = "var(--general-sky)";
        } else {
            document.body.style.background = "";
        }
    }, [isInView]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        let touchStartX = 0;
        let touchStartY = 0;
        let touchEndX = 0;
        let touchEndY = 0;

        const minSwipeDistance = 50;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            touchEndX = e.changedTouches[0].clientX;
            touchEndY = e.changedTouches[0].clientY;
            handleSwipeGesture();
        };

        const handleSwipeGesture = () => {
            const deltaX = touchStartX - touchEndX;
            const deltaY = touchStartY - touchEndY;

            if (Math.abs(deltaX) < Math.abs(deltaY)) return;

            if (Math.abs(deltaX) > minSwipeDistance) {
                const swiper = swiperRef.current;
                const section = sectionRef.current;

                if (!swiper || !section) return;

                if (deltaX > 0) {
                    const nextTab = section.querySelector(".swiper-slide-next button") as HTMLElement;

                    nextTab.click();
                } else {
                    const prevTab = section.querySelector(".swiper-slide-prev button") as HTMLElement;

                    prevTab.click();
                }
            }
        };

        if (typeof window !== "undefined" && window.innerWidth <= 768) {
            section.addEventListener("touchstart", handleTouchStart as unknown as EventListener, { passive: true });
            section.addEventListener("touchend", handleTouchEnd as unknown as EventListener, { passive: true });
        }

        return () => {
            section.removeEventListener("touchstart", handleTouchStart as unknown as EventListener);
            section.removeEventListener("touchend", handleTouchEnd as unknown as EventListener);
        };
    }, []);

    return (
        <section ref={sectionRef} id="solutions" className="pt-[200px] section xl:pt-[167px] md:pt-[110px] sm:pt-[90px]">
            <div className="container">
                <h2 className="subheading md:mb-[47px] sm:mb-[30px]">
                    <span className="text-t-orange">[3]</span> industry solutions
                </h2>
                <div className="pl-[24.61%] mt-[-52px] mr-[-12px] flex gap-[39px] 2xl:pl-[26.11%] 2xl:mt-[-48px] md:pl-0 md:mt-0 md:justify-between sm:block sm:m-0">
                    <div className="mb-[200px] relative w-full max-w-[750px] flex-none h-[699px] 2xl:max-w-[673px] 2xl:h-[587px] xl:mb-[167px] lg:max-w-[543px] md:mb-[275px] md:h-[516px] md:max-w-[450px] tb:mb-[165px] sm:ml-[-20px] sm:mr-[-20px] sm:w-[auto]  sm:h-fit sm:mb-[30px] sm:max-w-[unset] xs:w-[calc(100%+244px)]">
                        <div
                            className={clsx(
                                "z-[10] absolute top-0 left-0 translate-y-[-50%] w-full h-[363px] transition-opacity duration-300 bg-gradient-to-b from-[var(--general-sky)] via-[var(--general-sky)] to-[rgba(225,238,247,0.58)] pointer-events-none",
                                "md:translate-y-0 md:h-[183px] md:via-[rgba(225,238,247,0.58)]",
                                "sm:hidden",
                                { "opacity-0": !isInView },
                                { "delay-500": isInView }
                            )}
                        ></div>
                        <div
                            className={clsx(
                                "z-[10] absolute bottom-0 left-0 translate-y-[45%] w-full h-[363px] transition-opacity duration-300 bg-gradient-to-t from-[var(--general-sky)] via-[var(--general-sky)] to-[rgba(225,238,247,0.58)] pointer-events-none",
                                "md:translate-y-0 md:h-[183px] md:via-[rgba(225,238,247,0.58)]",
                                "sm:hidden",
                                { "opacity-0": !isInView },
                                { "delay-500": isInView }
                            )}
                        ></div>
                        <div className="sm:px-[20px] sm:overflow-visible">
                            <Swiper
                        
                            speed={750}
                            slidesPerView="auto"
                            spaceBetween={16}
                            simulateTouch={false}
                            loop
                             centeredSlides={false}
                                centeredSlidesBounds={false}
                            className="w-full h-full [&.swiper]:sm:overflow-visible"
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            breakpoints={{
                                767: {
                                    spaceBetween: 0,
                                    direction: "vertical",
                                    slidesPerView: 5,
                                },
                                1279: {
                                    spaceBetween: 10,
                                    direction: "vertical",
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {solutions.map((tab, index) => {
                                const isPrev = index === (activeIndex - 1 + solutions.length) % solutions.length;
                                const isNext = index === (activeIndex + 1) % solutions.length;
                                const isActive = index === activeIndex;

                                return (
                                    <SwiperSlide key={index} className="sm:!w-fit">
                                        <button
                                            onClick={() => handleTabClick(index)}
                                            className={clsx("pl-[6px] relative w-full text-left 2xl:pl-[3px] md:pl-0")}
                                        >
                                            <span
                                                className={clsx(
                                                    "relative block text-[46px] leading-[210.86%] font-medium whitespace-nowrap z-10 transition-all duration-700",
                                                    "2xl:text-[40px] 2x:text-[242.5%]",
                                                    "sm:translate-y-0 sm:opacity-100 sm:text-[18px] sm:leading-[194.44%]",
                                                    {
                                                        "opacity-0 sm:text-t-orange": isActive,
                                                        "opacity-100": !isActive,
                                                        "translate-y-[-36px] 2xl:translate-y-[-26px]": isPrev,
                                                        "translate-y-[40px] 2xl:translate-y-[30px]": isNext,
                                                        "translate-y-0": isActive,
                                                    }
                                                )}
                                                dangerouslySetInnerHTML={{ __html: tab.label }}
                                            ></span>
                                            <motion.span
                                                ref={isActive ? bigTextRef : null}
                                                initial={{ opacity: 0, scale: 0.2 }}
                                                animate={isActive ? { opacity: 1, scale: 1, translateY: "-50%" } : { opacity: 0, scale: 0 }}
                                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                                className={clsx(
                                                    "absolute top-1/2 left-0 -translate-y-1/2 w-full text-[134px] leading-[89.55%] font-medium text-t-orange whitespace-normal break-words z-20 pointer-events-none origin-left",
                                                    "2xl:text-[103px] 2xl:leading-[94.174%]",
                                                    "lg:text-[80px] lg:leading-[97.5%]",
                                                    "sm:hidden",
                                                    {
                                                        "transform-scale": isActive,
                                                    }
                                                )}
                                                dangerouslySetInnerHTML={{ __html: tab.label }}
                                            ></motion.span>
                                        </button>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                        </div>
                    </div>
                    <div
                        ref={contentRef}
                        className="pointer-events-none ml-[-12%] relative z-[20] flex-1 self-end xl:ml-[-19.2%] xl:max-w-[50%] lg:ml-[-10%] md:max-w-[60%] tb:max-w-[unset] tb:ml-[-25.2%] sm:m-0 sm:pointer-events-auto"
                    >
                        <AnimatePresence mode="wait">
                            {solutions.map((solution, index) => {
                                const originalLength = originalSolutions.length;
                                const cleanIndex = index % originalLength;

                                const isGaming = cleanIndex === 0;
                                const isFinancial = cleanIndex === 1;
                                const isMore = cleanIndex === 2;
                                const isEcommerce = cleanIndex === 3;
                                const isSubscription = cleanIndex === 4;

                                return (
                                    index === activeIndex && (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className={clsx(
                                                "sm:p-0",
                                                { "pl-[8%] xl:pl-0 md:pl-[10%]": isMore },
                                                { "pl-[8%] xl:pl-[14.3%] md:pl-[10%]": isSubscription },
                                                { "md:pl-[10%]": isEcommerce },
                                                { "md:pl-[10%]": isFinancial }
                                            )}
                                        >
                                            <h3
                                                className={clsx("mb-[20px] h2 hidden sm:block  sm:mr-[-5px] sm:text-[60px] sm:leading-[64px]", {
                                                    "sm:text-[64px]":isGaming
                                                })}
                                                dangerouslySetInnerHTML={{ __html: solution.label }}
                                            ></h3>
                                            <p
                                                className={clsx(
                                                    "relative z-[1] mx-auto max-w-[300px] xl:mr-[113px] xl:max-w-[230px] md:mr-[30px] sm:mr-0 sm:ml-0 sm:max-w-[208px] sm:mb-[15px]",
                                                    {
                                                        "mb-[9px] left-[3px] max-w-[265px] xl:mb-[39px] xl:left-0 md:mb-[20px] md:left-[3px] sm:left-0":
                                                            isGaming,
                                                    },
                                                    { "mb-[48px] sm:mb-[20px]": isMore },
                                                    { "mb-[24px]": isFinancial },
                                                    { "mb-[-48px] xl:mb-[-26px]": isEcommerce },
                                                    { "mb-[37px] xl:mb-[36px] sm:mb-[20px]": isSubscription }
                                                )}
                                                dangerouslySetInnerHTML={{ __html: solution.text }}
                                            />
                                            <ResponsiveImage
                                                className={clsx(
                                                    "sm:max-w-[80%] sm:mx-auto sm:translate-x-0 xs:max-w-[unset] animated-image",
                                                    {
                                                        "mb-[-9%] mr-[-8%] xl:mb-[-11%] xl:ml-[-14%] xl:translate-x-[-0.8%] md:m-0 md:translate-x-[23.1%] sm:mt-[-9.7%] sm:mr-[-32px] sm:mb-[90px] sm:ml-[-6px] sm:translate-x-[23.1%]":
                                                            isGaming,
                                                    },
                                                    {
                                                        "mb-[-10.3%] ml-[24.4%] translate-x-[-14.7%] md:mb-[-5%] sm:max-w-none xs:max-w-[80%] sm:translate-x-[48px] sm:translate-y-[2px] sm:w-[230px] sm:h-[300px] ": isFinancial,
                                                    },
                                                    {
                                                        "mb-[-15%] xl:mb-[-21%] xl:translate-x-[4.6%] md:mb-[-5%] tb:translate-x-[20%] sm:translate-x-[27%] sm:translate-y-[10px] sm:w-[315px] sm:h-[345px]":
                                                            isMore,
                                                    },
                                                    {
                                                        "mb-[-5%] 2xl:mb-[4%] 2xl:translate-x-[-10px] sm:translate-x-[54px] sm:translate-y-[-31px]": isEcommerce,
                                                    },
                                                    { "mb-[-3px] translate-x-[-1.9%] sm:w-[283px] sm:h-[283px] sm:translate-x-[58px]": isSubscription }
                                                )}
                                                src={solution.image}
                                                alt={solution.imageAlt}
                                                title={solution.imageAlt}
                                                aspectRatio={solution.imageAspect}
                                                sizes="(max-width: 767px) 50vw, (max-width: 1279px) 40vw, 30vw"
                                            />
                                        </motion.div>
                                    )
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
