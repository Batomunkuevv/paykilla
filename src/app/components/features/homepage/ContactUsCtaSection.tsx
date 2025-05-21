"use client";

import clsx from "clsx";
import { useRef } from "react";
import { useInView } from "motion/react";
import { useTranslation } from "react-i18next";
import { i18n } from "@lib";

import { Button, ResponsiveImage, BlurBall, Animated } from "@components";

export const ContactUsCtaSection = () => {
    const sectionRef = useRef(null);

    const { t } = useTranslation();
    const isRussianLocale = i18n.language === "ru";

    const isInView = useInView(sectionRef, { amount: 0.8, once: true });

    return (
        <section ref={sectionRef} className="section xl:pt-[59px] md:pt-0">
            <div className="container relative z-[1]">
                <p className="subheading tb:mb-[40px] sm:mb-[32px]">
                    <span className="text-t-orange">[7]</span> {t("home.contactUsCta.caption")}
                </p>
                <h2
                    className={clsx(
                        "pl-[24.7%] mt-[-43px] mb-[37px] h2 xl:pl-[25.8%] xl:mt-[-37px] xl:mb-[74px] xl:max-w-[92.5%] lg:max-w-[96%]",
                        "tb:p-0 tb:mt-0 tb:mb-[40px] tb:max-w-[96.5%]",
                        "sm:mb-[30px] sm:max-w-[unset]",
                        {
                            "[&]:text-[112px] 2xl:[&]:pl-[20%] xl:[&]:pl-[16%] xl:[&]:text-[103px] xl:[&]:max-w-[unset] lg:[&]:pl-[20%] lg:[&]:max-w-[92%] lg:[&]:text-[80px]":
                                isRussianLocale,
                            "md:[&]:max-w-[95%] md:[&]:text-[64px] tb:[&]:pl-0 tb:[&]:max-w-[97%] sm:[&]:max-w-[unset] sm:[&]:text-[48px] sm:[&_br]:hidden": isRussianLocale,
                        }
                    )}
                >
                    <span className="pb-[16px] mb-[-15px] block overflow-hidden sm:inline">
                        <Animated.Span
                            style={{ transform: "translateZ(0)" }}
                            className="will-change-transform block sm:inline"
                            initial={{ y: "100%" }}
                            animate={isInView ? { y: 0 } : false}
                            transition={{ duration: 0.5 }}
                        >
                            <span dangerouslySetInnerHTML={{ __html: t("home.contactUsCta.title.firstPart") }} />
                            {" "}
                            <span
                                className={clsx("ml-[9.2%] block w-fit 2xl:ml-[4%] xl:m-0", {
                                    "[&]:ml-[4%] 2xl:[&]:ml-[1%] xl:[&]:ml-[4%] lg:[&]:ml-[2%] sm:[&]:ml-0 sm:[&]:inline": isRussianLocale,
                                })}
                                dangerouslySetInnerHTML={{ __html: t("home.contactUsCta.title.secondPart") }}
                            />
                        </Animated.Span>
                    </span>
                    <span className="pb-[16px] mb-[-15px] ml-auto block w-fit tb:mt-[2px] sm:m-0 sm:inline overflow-hidden">
                        <Animated.Span
                            style={{ transform: "translateZ(0)" }}
                            className="block sm:inline"
                            initial={{ y: "100%" }}
                            animate={isInView ? { y: 0 } : false}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            dangerouslySetInnerHTML={{ __html: t("home.contactUsCta.title.thirdPart") }}
                        />
                    </span>
                    {" "}
                    <span className="ml-auto relative top-[2px] left-[-73px] block w-fit overflow-hidden xl:top-0 xl:left-[-69px] tb:top-0 tb:left-[-62px] sm:m-0 sm:static sm:inline">
                        <Animated.Span
                            style={{ transform: "translateZ(0)" }}
                            className="will-change-transform block sm:inline"
                            initial={{ y: "100%" }}
                            animate={isInView ? { y: 0 } : false}
                            transition={{ duration: 0.5, delay: 1 }}
                            dangerouslySetInnerHTML={{ __html: t("home.contactUsCta.title.fourthPart") }}
                        />
                    </span>
                </h2>
                <Button className="sm:mb-[18px]" href="/contact-us">
                    {t("home.contactUsCta.buttonText")}
                </Button>
                <ResponsiveImage
                    className={clsx(
                        "absolute top-[50%] right-0 w-[38.2%] translate-x-[21.2%] translate-y-[-50.2%] z-[-1]",
                        "xl:w-[44.6%] xl:translate-x-[28.9%] xl:translate-y-[-53.2%]",
                        "tb:w-[56.2%] tb:translate-y-[-51.4%] tb:translate-x-[28.6%]",
                        "sm:ml-[-62px] sm:mr-[-48px] sm:w-[auto] sm:static sm:translate-y-0 sm:translate-x-0"
                    )}
                    src="homepage/contact-us-cta/illustration.png"
                    alt="Illustration"
                    aspectRatio={734 / 673}
                    sizes="(max-width: 767px) 100vw, 40vw"
                />
                <BlurBall
                    color="rgba(249, 171, 193, .68)"
                    className={clsx(
                        "opacity-[0.59] hidden xl:block w-[253px] z-[-2] top-[28%] left-[60%]",
                        "tb:w-[253px] tb:top-[19%] tb:left-[90%]",
                        "sm:w-[212px] sm:top-[52%] sm:left-[70%]"
                    )}
                />
                <BlurBall
                    color="#FDDAB0"
                    className={clsx(
                        "opacity-[0.59] hidden xl:block w-[364px] z-[-2] top-[7%] left-[59.8%]",
                        "tb:w-[364px] tb:top-[-5%] tb:left-[90%]",
                        "sm:w-[303px] sm:top-[54%] sm:left-[70%]"
                    )}
                />
                <BlurBall
                    color="rgba(127, 206, 255, .5)"
                    className={clsx(
                        "opacity-[0.59] hidden xl:block w-[363px] z-[-2] top-[48.8%] left-[26.2%]",
                        "tb:w-[223px] tb:top-[42%] tb:left-[30%]",
                        "sm:w-[186px] sm:top-[62.7%] sm:left-[-40%]"
                    )}
                />
                <BlurBall
                    color="#C2C7F1"
                    className={clsx(
                        "opacity-[0.59] hidden xl:block w-[355px] z-[-2] top-[20%] left-[35.7%]",
                        "tb:w-[355px] tb:top-[20%] tb:left-[47.7%]",
                        "sm:w-[297px] sm:top-[53.7%] sm:left-[-11%]"
                    )}
                />
                <BlurBall
                    color="rgba(127, 206, 255, .88)"
                    className={clsx(
                        "opacity-[0.59] hidden xl:block w-[255px] z-[-2] top-[55.3%] left-[52.6%]",
                        "tb:top-[49%] tb:left-[79.7%]",
                        "sm:w-[213px] sm:top-[66F%] sm:left-[46%]"
                    )}
                />
                <BlurBall
                    color="#FDDAB0"
                    className={clsx("opacity-[0.59] hidden xl:block w-[211px] z-[-2] top-[22%] left-[22.2%]", "tb:top-[15%] tb:left-[21.4%]", "sm:hidden")}
                />
            </div>
        </section>
    );
};
