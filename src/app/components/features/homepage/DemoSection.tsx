"use client";

import { useRef, useEffect } from "react";
import { useInView, useScroll, useTransform } from "motion/react";
import clsx from "clsx";

import { ResponsiveImage, Animated } from "@components";

export const DemoSection = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const imageTransformation = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);

    const isInView = useInView(sectionRef, { amount: 0.6, once: true });

    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    document.body.style.background = "var(--general-orange)";
                } else {
                    document.body.style.background = "";
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(sectionRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section ref={sectionRef} id="demo" className="section text-t-white md:py-[110px] sm:py-[90px]">
            <div className="container">
                <p className="subheading tb:mb-[40px] sm:mb-[31px]">[5] Demo</p>

                <h2 className="ml-[24.65%] max-w-[1152px] mt-[-39px] h2 [&]:text-inherit xl:mt-[-51px] xl:ml-[25.8%] xl:max-w-[61.9%] md:max-w-[65%] tb:mt-0 tb:ml-0 tb:max-w-[86.2%] sm:max-w-[unset] sm:mb-[13px]">
                    <span className="pb-[16px] mb-[-16px] block overflow-hidden xl:mb-[-23px] md:p-0 md:m-0 md:overflow-visible sm:inline">
                        <Animated.Span className="block sm:inline" initial={{ y: "100%" }} animate={isInView ? { y: 0 } : false} transition={{ duration: 0.5 }}>
                            Simplify crypto
                        </Animated.Span>
                    </span>

                    <span className="ml-auto mr-[7px] mb-[-5px] block w-fit xl:mt-[-7px] xl:pl-[11px] xl:mr-auto xl:mb-[1px] xl:left-[-4px] tb:p-0 tb:m-0 tb:ml-auto tb:mt-[8px] sm:m-0 sm:inline">
                        <span className="pb-[16px] mb-[-21px] block overflow-hidden xl:mb-[-16px] md:p-0 md:m-0 md:overflow-visible">
                            <Animated.Span
                                className="block sm:inline"
                                initial={{ y: "100%" }}
                                animate={isInView ? { y: 0 } : false}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                payments with
                            </Animated.Span>
                        </span>
                    </span>
                    <span className="ml-auto block w-fit tb:mr-[11px] sm:m-0 sm:inline">
                        <span className="pb-[20px] mb-[-26px] block overflow-hidden md:p-0 md:m-0 md:overflow-visible sm:inline">
                            <Animated.Span
                                className="block sm:inline"
                                initial={{ y: "100%" }}
                                animate={isInView ? { y: 0 } : false}
                                transition={{ duration: 0.5, delay: 1.7 }}
                            >
                                our widget
                            </Animated.Span>
                        </span>
                    </span>
                </h2>

                <div className="mt-[-64px] flex xl:mt-[-96px] lg:mt-[-32px] md:mt-[-34px] tb:flex-wrap tb:justify-between sm:mt-[-14px] sm:flex-col">
                    <Animated.P
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : false}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="mr-[28px] max-w-[370px] xl:mr-[35px] xl:max-w-[313px] md:max-w-[280px] tb:mr-0 tb:order-2 tb:max-w-[313px] sm:max-w-[307px] sm:mb-[9px]"
                    >
                        Installing the widget on your website is quick and simple. Don’t miss out on this opportunity to offer your customers a convenient
                        payment method.{" "}
                        <strong className="xl:block xl:max-w-[90%] md:inline tb:block sm:inline">Add our crypto payment widget to your website now!</strong>
                    </Animated.P>

                    <Animated.Div
                        className={clsx(
                            "will-change-transform translate-z-0 relative mt-[-7%] w-[60%] flex-none xl:mt-[-4%] xl:ml-[-0.7%] xl:w-[53.4%] md:ml-[-2.7%]",
                            "tb:w-[67.7%] tb:order-1 tb:mt-[-0.7%] tb:mb-[19px] tb:mx-auto tb:left-[-2.3%]",
                            "sm:hidden"
                        )}
                        style={{ y: imageTransformation }}
                    >
                        <ResponsiveImage className="w-full" src="homepage/demo/demo-1.png" alt="Demo image" aspectRatio={1032 / 1098} sizes="80vw" />
                    </Animated.Div>
                    <ResponsiveImage
                        className={clsx("mb-[33px] hidden w-[calc(100vw-4px)] ml-[-18px]", "sm:block")}
                        src="homepage/demo/demo-mobile-1.png"
                        alt="Demo image"
                        aspectRatio={355 / 407}
                        sizes="100w"
                    />
                    <Animated.P
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mb-[50px] ml-auto mr-[53px] max-w-[187px] self-end xl:mb-[-21px] xl:ml-[-29px] md:mb-0 tb:order-3 tb:self-start tb:m-0 tb:max-w-[165px] tb:[&_br]:hidden tb:text-right sm:text-left sm:max-w-[unset]"
                    >
                        Killa [ˈkɪlə]:
                        <br /> cool, highly skilled
                    </Animated.P>
                </div>
            </div>
        </section>
    );
};
