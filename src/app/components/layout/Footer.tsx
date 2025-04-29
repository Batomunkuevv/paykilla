"use client";

import clsx from "clsx";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { footerMenu } from "@data";

import { Logo, Button, Menu, Animated } from "@components";

export const Footer = () => {
    const footerRef = useRef(null);

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
                    <p className="text-t-white sm:mb-[30px]">
                        &copy;&nbsp;{currentYear} PayKilla.
                        <br /> All rights reserved.
                    </p>
                    <Menu
                        className={clsx(
                            "pl-[180px] flex flex-col gap-[7px] text-t-white xl:pl-[5px] xl:gap-[3px] md:gap-[4px] tb:pl-[11px]",
                            "sm:p-0 sm:mb-[20px] sm:grid sm:grid-cols-2 sm:max-w-[87%] sm:gap-[49px]"
                        )}
                        items={footerMenu}
                        twoColumns
                    />
                    <Button href={process.env.NEXT_PUBLIC_BUTTONS_GET_STARTED_URL} className="xl:mt-[7px] tb:mt-0">
                        GET STARTED
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
