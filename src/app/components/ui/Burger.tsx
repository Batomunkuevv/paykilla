"use client";

import { useState, MouseEvent } from "react";
import clsx from "clsx";
import { i18n } from "@lib";

import { headerMenu } from "@/data";

import { ClassNameProp, LocaleType } from "@t";

import { Logo, Menu, Button, CloseButton, LanguageSwitcher } from "@components";

export const Burger = ({ className }: ClassNameProp) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const headerMenuByLocale = headerMenu[i18n?.language as LocaleType];

    const handleBurgerClick = () => {
        setIsOpenMenu(true);
        document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
        setIsOpenMenu(false);
        document.body.style.overflow = "";
    };

    const handleBurgerBodyClick = (e: MouseEvent) => {
        const { target } = e;

        if ("nodeName" in target && target.nodeName === "A") {
            closeMenu();
        }
    };

    return (
        <>
            <button
                className={clsx(
                    "hidden py-[11px] px-[10px] absolute z-[100] top-[34px] right-[20px] w-[40px] h-[40px] border-2 border-orange tb:flex tb:flex-col tb:gap-[4px] sm:top-[23px]",
                    className
                )}
                onClick={handleBurgerClick}
            >
                {Array.from({ length: 3 }).map((_, i) => (
                    <span key={i} className="w-full h-[2px] bg-black"></span>
                ))}
            </button>
            <div
                className={clsx("fixed inset-0 z-[100] transition-all duration-300 opacity-0 pointer-events-none", {
                    "opacity-100 pointer-events-auto": isOpenMenu,
                })}
            >
                <div onClick={closeMenu} className="absolute inset-0 bg-overlay"></div>
                <div
                    className={clsx(
                        "pt-[31px] px-[20px] pb-[34px] ml-auto relative bg-black w-[calc(100%-20px)] max-w-[389px] h-full flex flex-col overflow-auto has-scrollbar",
                        "sm:py-[23px] xs:max-w-[271px]"
                    )}
                    onClick={handleBurgerBodyClick}
                >
                    <div className="mb-[39px] flex items-center justify-between gap-x-[32px] sm:mb-[24px]">
                        <Logo type="white" className="w-full max-w-[175px] sm:max-w-[154px]" />
                        <CloseButton onClick={closeMenu} />
                    </div>
                    <Menu items={headerMenuByLocale} className="mb-[29px] text-t-white uppercase sm:mb-[23px]" />
                    <LanguageSwitcher />
                    <Button href={process.env.NEXT_PUBLIC_BUTTONS_CALL_URL} className="mt-auto w-full">
                        BOOK A CALL
                    </Button>
                </div>
            </div>
        </>
    );
};
