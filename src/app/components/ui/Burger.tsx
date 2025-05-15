"use client";

import { useState, MouseEvent } from "react";
import clsx from "clsx";

import { headerMenu } from "@/data";

import { ClassNameProp } from "@t";

import { Logo, Menu, Button, CloseButton } from "@components";
import LanguageBar from "./LanguageBar";

export const Burger = ({ className }: ClassNameProp) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

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
                        "py-[34px] px-[20px] ml-auto relative bg-black w-[calc(100%-20px)] max-w-[389px] h-full flex flex-col overflow-auto has-scrollbar",
                        "sm:py-[23px] xs:max-w-[271px]"
                    )}
                    onClick={handleBurgerBodyClick}
                >
                    <div className="mb-[40px] flex items-center justify-between gap-x-[32px] sm:mb-[24px]">
                        <Logo type="white" className="w-full max-w-[175px] sm:max-w-[154px]" />
                        <CloseButton onClick={closeMenu} />
                    </div>
                    <Menu items={headerMenu} className="mb-[30px] text-t-white uppercase" />
                    <LanguageBar></LanguageBar>
                    <Button href={process.env.NEXT_PUBLIC_BUTTONS_CALL_URL} className="mt-auto w-full">
                        BOOK A CALL
                    </Button>
                </div>
            </div>
        </>
    );
};
