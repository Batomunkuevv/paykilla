"use client";

import clsx from "clsx";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { ResponsiveImage, Animated } from "../../ui";

export const WhyUsSection = () => {
    const sectionRef = useRef(null);

    const isInView = useInView(sectionRef, { once: true, amount: 1 });

    return (
        <section ref={sectionRef} id="why-us" className="pb-[133px] section xl:pt-[83px] xl:pb-[140px] lg:pb-0 tb:pt-0">
            <div className="container relative">
                <Animated.Div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : false} transition={{ duration: 0.5, delay: 1 }}>
                    <ResponsiveImage
                        className={clsx(
                            "absolute top-[-43px] right-0 translate-x-[16.4%] w-full max-w-[672px] xl:top-[-60px] xl:max-w-[599px] xl:translate-x-[14.5%] lg:top-[-32px] lg:max-w-[40%] md:translate-x-[20%]",
                            "tb:top-[54px] tb:max-w-[54.6%] tb:translate-x-[25.9%]",
                            "sm:top-[16.3%] sm:w-[74%] sm:max-w-[400px] sm:translate-x-[22%]"
                        )}
                        src="homepage/why-us/claws.png"
                        alt="Claws"
                        aspectRatio={224 / 213}
                        sizes="(max-width: 991px) 50vw, 25vw"
                    />
                </Animated.Div>
                <div className="relative grid grid-cols-4 grid-rows-[auto_1fr] gap-x-[10px] tb:block">
                    <div className="mb-[279px] subheading xl:mb-[246px] md:mb-[180px] tb:mb-[40px] sm:mb-[31px]">
                        <span className="text-orange">[1]</span> Why choose PayKilla
                    </div>
                    <h2 className="mt-[-19px] ml-[-6px] max-w-[1063px] row-[1/3] col-[2/6] h2 xl:mt-[-13px] xl:ml-[10px] xl:max-w-[860px] md:max-w-[680px] tb:m-0 tb:mb-[28px] tb:max-w-[610px] sm:mb-[18px]">
                        <span className="block overflow-hidden">
                            <Animated.Span className="block" initial={{ y: "100%" }} animate={isInView ? { y: 0 } : false} transition={{ duration: 0.5 }}>
                                Empower your
                                <br /> business to&nbsp;thrive{" "}
                            </Animated.Span>
                        </span>
                        <span className="pb-[18px] mb-[-18px] ml-auto mr-[62px] block w-fit overflow-hidden xl:mt-0 xl:mb-[-25px] xl:mr-0 xl:ml-[104px] tb:mt-[2px] tb:mb-[-18px] tb:ml-[117px] sm:hidden">
                            <Animated.Span
                                className="block"
                                initial={{ y: "100%" }}
                                animate={isInView ? { y: 0 } : false}
                                transition={{ duration: 0.5, delay: 1.5 }}
                            >
                                in&nbsp;the digital
                            </Animated.Span>
                        </span>
                        <span className="pb-[18px] mb-[-18px] ml-auto block w-fit overflow-hidden tb:mt-0 tb:mr-[46px] sm:hidden">
                            <Animated.Span
                                className="block"
                                initial={{ y: "100%" }}
                                animate={isInView ? { y: 0 } : false}
                                transition={{ duration: 0.5, delay: 2 }}
                            >
                                economy
                            </Animated.Span>
                        </span>
                    </h2>
                    <Animated.P
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : false}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="ml-[-2px] max-w-[348px] xl:ml-0 xl:max-w-[313px] sm:max-w-[232px]"
                    >
                        PayKilla leverages cutting-edge blockchain technology and a&nbsp;user-centric design to&nbsp;deliver a&nbsp;secure, fast and
                        <strong className="text-orange"> cost&#8209;effective crypto payment solution.</strong>
                    </Animated.P>
                </div>
            </div>
        </section>
    );
};
