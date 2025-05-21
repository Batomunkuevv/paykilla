"use client";

import clsx from "clsx";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

import { i18n } from "@lib";

import { footerMenu } from "@data";

import { LocaleType } from "@t";

import { Logo, Button, Menu, Animated } from "@components";

export const Footer = () => {
    const footerRef = useRef(null);

    const footerMenuByLocale = footerMenu[i18n.language as LocaleType];
    const { t: footerT } = useTranslation("footer");
    const { t } = useTranslation();
    const isRussianLocale = i18n.language === "ru";
    const isInView = useInView(footerRef, { once: true, amount: 0.7 });

    const currentYear = new Date().getFullYear();

    return (
        <footer ref={footerRef} className="site-footer pt-[100px] bg-black overflow-hidden xl:pt-[80px] sm:pt-[60px]">
            <div className="container">
                <div
                    className={clsx(
                        "mb-[69px] flex items-start justify-between gap-x-[64px] pl-[2px] xl:mb-[24px] xl:pl-0 lg:gap-x-[32px]",
                        "sm:mb-[44px] sm:block"
                    )}
                >
                    <div className={clsx("sm:grid sm:grid-cols-2 sm:max-w-[90%] sm:gap-[39px]", { "xxs:text-[12px]": isRussianLocale })}>
                        <p className="text-t-white mb-[42px] xl:mb-[45px] sm:mb-[30px] whitespace-nowrap">
                            &copy;&nbsp;{currentYear} PayKilla.
                            <br /> {footerT("copyright")}
                        </p>
                        <div>
                            <p
                                className="font-bold leading-[36px] text-t-white mb-[3px] sm:hidden"
                                dangerouslySetInnerHTML={{ __html: footerT("contacts.title") }}
                            />
                            <ul className="[&_*]:text-t-white">
                                <li className="mb-[5px] xl:mb-[9px] sm:mb-[1px]">
                                    <p className="grid grid-cols-[38px_auto] items-center xl:grid-cols-[29px_auto] tb:grid-cols-[26px_auto] sm:grid-cols-[23px_auto]">
                                        <span className="bg-[url(/images/footer/mail.svg)] bg-no-repeat bg-contain w-[28px] h-[28px] block translate-y-[5px] xl:translate-y-[2px] xl:w-[23px] xl:h-[23px] tb:w-[21px] tb:h-[21px] tb:ml-[-2px] sm:w-[17px] sm:h-[17px] sm:translate-y-[4px]"></span>
                                        <span>info@paykilla.com</span>
                                    </p>
                                </li>
                                <li>
                                    <a
                                        className="grid grid-cols-[38px_auto] items-center [&:hover_.link-text]:text-orange transition-all xl:grid-cols-[29px_auto] tb:grid-cols-[26px_auto] sm:grid-cols-[23px_auto]"
                                        target="_blank"
                                        href="https://t.me/edem_appaz"
                                    >
                                        <span className="bg-[url(/images/footer/tg.svg)] bg-no-repeat bg-contain w-[24px] h-[24px] block translate-y-[6px] translate-x-[2px] xl:w-[21px] xl:h-[21px] xl:translate-y-[3px] tb:w-[18px] tb:h-[18px] tb:translate-x-[0px] tb:translate-y-[4px] sm:w-[15px] sm:h-[15px] sm:translate-y-[4px]"></span>
                                        <span
                                            className="link-text transition-all whitespace-nowrap"
                                            dangerouslySetInnerHTML={{ __html: footerT("contacts.telegramCaption") }}
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Menu
                        className={clsx(
                            "pl-[180px] flex flex-col gap-[7px] text-t-white xl:pl-[5px] xl:gap-[3px] md:gap-[4px] tb:pl-[11px]",
                            "sm:p-0 sm:mb-[20px] sm:grid sm:grid-cols-2 sm:max-w-[87%] sm:gap-[49px]"
                        )}
                        items={footerMenuByLocale}
                        twoColumns
                    />
                    <Button href={process.env.NEXT_PUBLIC_BUTTONS_GET_STARTED_URL} className="xl:mt-[7px] tb:mt-0">
                        {t("getStartedButtonText")}
                    </Button>
                </div>
            </div>
            <div className="max-w-[1920px] mx-auto">
                <Animated.Div initial={{ y: "100%" }} animate={isInView ? { y: 0 } : false} transition={{ duration: 1 }}>
                    <Logo type="footer" className="mb-[-2.7%] ml-[2px] w-full xl:ml-0 sm:mb-[-2.8%]" />
                </Animated.Div>
            </div>
        </footer>
    );
};
