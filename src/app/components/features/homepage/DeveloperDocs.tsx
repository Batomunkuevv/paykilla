"use client";

import clsx from "clsx";
import { useRef } from "react";
import { useInView, useTransform, useScroll } from "motion/react";
import { useTranslation } from "react-i18next";
import { i18n } from "@lib";

import { Button, Animated } from "@components";

export const DeveloperDocsSection = () => {
    const sectionRef = useRef(null);

    const { t } = useTranslation();
    const isRussianLocale = i18n.language === "ru";
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
                        "sm:pt-[54px] sm:px-[20px] sm:pb-[23px] sm:mx-[-20px] sm:flex-col sm:items-stretch sm:gap-[8px]",
                        {
                            "[&]:pr-[32px] 2xl:[&]:gap-[24px] lg:[&]:items-center md:[&]:pl-[32px] tb:[&]:gap-[12px] sm:[&]:px-[20px] sm:[&]:items-stretch":
                                isRussianLocale,
                        }
                    )}
                >
                    <h2
                        className={clsx("flex-1 max-w-[823px] h2 [&]:text-t-black relative", "xl:max-w-[683px]", "md:max-w-[530px]", "sm:max-w-[unset]", {
                            "[&]:text-[92px] [&]:max-w-[unset] xl:[&]:text-[86px] lg:[&]:text-[72px] md:[&]:text-[48px] tb:[&]:text-[32px] sm:[&]:text-[40px] xxs:[&]:text-[30px]":
                                isRussianLocale,
                        })}
                    >
                        <span className="absolute top-[19px] right-[calc(100%+10px)] subheading text-t-orange xl:top-[15px] tb:top-[10px] sm:top-[auto] sm:right-[auto] sm:bottom-[100%] sm:left-0">
                            [6]
                        </span>
                        {t("home.developerDocs.title.firstPart")}
                        <span
                            className={clsx(
                                "ml-[162px] mb-[-5px] block w-fit overflow-hidden",
                                "xl:ml-[124px] xl:mb-[-6px]",
                                "tb:m-0 tb:mt-[2px]",
                                "sm:mt-0 sm:inline",
                                { "[&]:ml-[10%] 2xl:[&]:ml-[1%] sm:[&]:m-0": isRussianLocale }
                            )}
                        >
                            <Animated.Span
                                className="block"
                                initial={{ y: "100%" }}
                                animate={isInView ? { y: 0 } : false}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                dangerouslySetInnerHTML={{ __html: t("home.developerDocs.title.secondPart") }}
                            />
                        </span>
                        <span
                            className={clsx("pb-[19px] mb-[-19px] block w-fit ml-auto overflow-hidden tb:m-0 tb:p-0 tb:overflow-visible sm:inline", {
                                "md:[&]:ml-[4%] sm:[&]:m-0": isRussianLocale,
                            })}
                        >
                            <Animated.Span
                                className="block"
                                initial={isRussianLocale ? { y: "116%" } : { y: "100%" }}
                                animate={isInView ? { y: 0 } : false}
                                transition={{ duration: 0.5, delay: 1 }}
                                dangerouslySetInnerHTML={{ __html: t("home.developerDocs.title.thirdPart") }}
                            />
                        </span>
                    </h2>
                    <div
                        className={clsx("mb-[-12px] max-w-[390px] xl:mb-[7px] tb:max-w-[278px] sm:max-w-[unset]", {
                            "max-w-[550px] xl:[&]:max-w-[464px] lg:[&]:max-w-[394px] tb:[&]:max-w-[340px] sm:[&]:max-w-[unset]": isRussianLocale,
                        })}
                    >
                        <Animated.P
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : false}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className={clsx("mb-[73px] max-w-[303px] xl:mb-[72px] md:mb-[41px] tb:mt-[11px] sm:mt-0 sm:mb-[29px] sm:max-w-[83%]", {
                                "[&]:max-w-[unset] sm:[&]:max-w-[83%]": isRussianLocale,
                            })}
                            dangerouslySetInnerHTML={{ __html: t("home.developerDocs.text") }}
                        />
                        <div className="overflow-hidden">
                            <Animated.Div
                                className="block"
                                initial={{ y: "100%" }}
                                animate={isInView ? { y: 0 } : false}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                <Button
                                    className={clsx({ "lg:[&]:text-[24px] tb:[&]:text-[20px] xxs:[&]:text-[18px]": isRussianLocale })}
                                    href="https://paykilla.readme.io/reference/get-started-with-api"
                                    target="_blank"
                                >
                                    {t("home.developerDocs.buttonText")}
                                </Button>
                            </Animated.Div>
                        </div>
                    </div>
                </Animated.Div>
            </div>
        </section>
    );
};
