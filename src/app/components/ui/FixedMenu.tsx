"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { i18n } from "@lib";

import { headerMenu } from "@data";

import { LocaleType } from "@t";

import { MenuItem, LanguageSwitcher } from "@components";

export const FixedMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isEndPage, setIsEndPage] = useState(false);

    const headerMenuByLocale = headerMenu[i18n.language as LocaleType];

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector(".site-footer");

            if (!footer) return;

            const footerTop = footer.getBoundingClientRect().top + window.scrollY;
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            if (scrollY > 300) {
                setShowMenu(true);
            } else {
                setShowMenu(false);
            }

            if (scrollY + windowHeight > footerTop) {
                setIsEndPage(true);
            } else {
                setIsEndPage(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={clsx(
                "pt-[18px] pr-[25px] pb-[14px] pl-[20px] fixed z-[100] left-1/2 -translate-x-1/2  border-[2px] border-gray w-fit flex justify-center gap-[19px] bg-white whitespace-nowrap translate-y-[100%] bottom-0 transition-all duration-500 tb:hidden",
                "xl:py-[14px] xl:px-[23px] xl:gap-[16px]",
                "lg:py-[10px] lg:px-[16px]",
                { "[&]:translate-y-[0%] bottom-[30px]": showMenu },
                { "opacity-0 pointer-events-none": isEndPage }
            )}
        >
            <ul className="flex gap-[20.3px] xl:gap-[20.5px] lg:gap-[16px]">
                {headerMenuByLocale.map((item, i) => (
                    <MenuItem
                        className={clsx(
                            "!m-0 [&_a]:pb-0 [&_a]:border-0 uppercase last:after:hidden relative",
                            "lg:[&_a]:text-[16px]",
                            "after:content-'' after:absolute after:top-[2px] after:bottom-[2px] after:left-[calc(100%+11px)] after:w-[2px] after:bg-orange",
                            "lg:after:left-[calc(100%+8px)]"
                        )}
                        key={i}
                        isActive={false}
                        href={item.href}
                        label={item.label}
                    />
                ))}
            </ul>
            <LanguageSwitcher />
        </div>
    );
};
