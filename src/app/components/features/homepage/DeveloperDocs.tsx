"use client";

import clsx from "clsx";
import { useRef } from "react";
import { useInView, useTransform, useScroll } from "motion/react";

import { Button, Animated } from "@components";

export const DeveloperDocsSection = () => {
    const sectionRef = useRef(null);

    const isInView = useInView(sectionRef, { once: true, amount: 1 });
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const bodyTransformation = useTransform(scrollYProgress, [0, 1], ["200px", "-200px"]);

    return (
        <section ref={sectionRef} id="ddc" className="section xl:pt-[55px] lg:pt-0">
            <div className="container">
                <Animated.Div
                    style={{ y: bodyTransformation }}
                    className={clsx(
                        "will-change-transform translate-z-0 pt-[70px] pr-[66px] pl-[56px] pb-[78px] bg-sky flex items-center justify-between gap-[48px]",
                        "xl:pt-[30px] xl:pb-[60px] xl:pr-[121px] xl:pl-[61px] xl:items-end",
                        "lg:px-[60px]",
                        "tb:pt-[30px] tb:pr-[20px] tb:pb-[49px] tb:pl-[51px] tb:gap-[14px] tb:items-stretch",
                        "sm:pt-[54px] sm:px-[20px] sm:pb-[23px] sm:mx-[-20px] sm:flex-col sm:items-stretch sm:gap-[8px]"
                    )}
                >
                    <h2 className={clsx("flex-1 max-w-[823px] h2 [&]:text-t-black relative", "xl:max-w-[683px]", "md:max-w-[530px]", "sm:max-w-[unset]")}>
                        <span className="absolute top-[19px] right-[calc(100%+10px)] subheading text-t-orange xl:top-[15px] tb:top-[10px] sm:top-[auto] sm:right-[auto] sm:bottom-[100%] sm:left-0">
                            [6]
                        </span>
                        Developer{" "}
                        <span
                            className={clsx(
                                "ml-[162px] mb-[-5px] block w-fit overflow-hidden",
                                "xl:ml-[124px] xl:mb-[-6px]",
                                "tb:m-0 tb:mt-[2px]",
                                "sm:mt-0 sm:inline"
                            )}
                        >
                            <Animated.Span
                                className="block"
                                initial={{ y: "100%" }}
                                animate={isInView ? { y: 0 } : false}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                Docs&nbsp;&amp;{" "}
                            </Animated.Span>
                        </span>
                        <span className="pb-[19px] mb-[-19px] block w-fit ml-auto overflow-hidden tb:m-0 tb:p-0 tb:overflow-visible sm:inline">
                            <Animated.Span
                                className="block"
                                initial={{ y: "100%" }}
                                animate={isInView ? { y: 0 } : false}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                Insights
                            </Animated.Span>
                        </span>
                    </h2>
                    <div className="mb-[-12px] max-w-[390px] xl:mb-[7px] tb:max-w-[278px] sm:max-w-[unset]">
                        <Animated.P
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : false}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mb-[73px] max-w-[303px] xl:mb-[72px] md:mb-[41px] tb:mt-[11px] sm:mt-0 sm:mb-[29px] sm:max-w-[83%]"
                        >
                            Access our comprehensive API documentation and developer resources
                            <strong> to integrate crypto processing into your app quickly.</strong>
                        </Animated.P>
                        <div className="overflow-hidden">
                            <Animated.Div
                                className="block"
                                initial={{ y: "100%" }}
                                animate={isInView ? { y: 0 } : false}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                <Button href="https://paykilla.readme.io/reference/get-started-with-api" target="_blank">
                                    VIEW API DOCS
                                </Button>
                            </Animated.Div>
                        </div>
                    </div>
                </Animated.Div>
            </div>
        </section>
    );
};
