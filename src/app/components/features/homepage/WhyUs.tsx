"use client";

import clsx from "clsx";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

import { i18n } from "@lib";

import { ResponsiveImage, Animated } from "@components";

export const WhyUsSection = () => {
    const sectionRef = useRef(null);

    const { t } = useTranslation();
    const isRussianLanguage = i18n.language === "ru";
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
                    />
                </Animated.Div>
                <div className="relative grid grid-cols-4 grid-rows-[auto_1fr] gap-x-[10px] tb:block">
                    <div className="mb-[279px] subheading xl:mb-[246px] md:mb-[180px] tb:mb-[40px] sm:mb-[31px]">
                        <span className="text-orange">[1]</span> {t("home.whyUs.caption")}
                    </div>
                    <h2
                        className={clsx(
                            "mt-[-19px] ml-[-6px] max-w-[1063px] row-[1/3] col-[2/6] h2 xl:mt-[-13px] xl:ml-[10px] xl:max-w-[860px] md:max-w-[680px] tb:m-0 tb:mb-[28px] tb:max-w-[610px] sm:mb-[18px]",
                            { "[&]:max-w-[unset]": isRussianLanguage }
                        )}
                    >
                        <span className="block overflow-hidden">
                            <Animated.Span
                                className="block"
                                initial={{ y: "100%" }}
                                animate={isInView ? { y: 0 } : false}
                                transition={{ duration: 0.5 }}
                                dangerouslySetInnerHTML={{ __html: t("home.whyUs.titleFirstPart") }}
                            />
                        </span>
                        <span
                            className={clsx(
                                "pb-[18px] mb-[-18px] ml-auto mr-[62px] block w-fit overflow-hidden xl:mt-0 xl:mb-[-25px] xl:mr-0 xl:ml-[104px] tb:mt-[2px] tb:mb-[-18px] tb:ml-[117px] sm:hidden",
                                { "[&]:mr-0 [&]:ml-[170px] md:[&]:ml-[120px] tb:[&]:ml-[80px]": isRussianLanguage }
                            )}
                        >
                            <Animated.Span
                                className="block"
                                initial={{ y: "100%" }}
                                animate={isInView ? { y: 0 } : false}
                                transition={{ duration: 0.5, delay: 1.5 }}
                                dangerouslySetInnerHTML={{ __html: t("home.whyUs.titleSecondPart") }}
                            />
                        </span>
                        <span
                            className={clsx("pb-[18px] mb-[-18px] ml-auto block w-fit overflow-hidden tb:mt-0 tb:mr-[46px] sm:hidden", {
                                "[&]:mr-[160px] xl:[&]:mr-[64px] tb:[&]:mr-[46px]": isRussianLanguage,
                            })}
                        >
                            <Animated.Span
                                className="block"
                                initial={{ y: "100%" }}
                                animate={isInView ? { y: 0 } : false}
                                transition={{ duration: 0.5, delay: 2 }}
                                dangerouslySetInnerHTML={{ __html: t("home.whyUs.titleThirdPart") }}
                            />
                        </span>
                    </h2>
                    <Animated.P
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : false}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="ml-[-2px] max-w-[348px] xl:ml-0 xl:max-w-[313px] sm:max-w-[232px]"
                        dangerouslySetInnerHTML={{ __html: t("home.whyUs.text") }}
                    />
                </div>
            </div>
        </section>
    );
};
