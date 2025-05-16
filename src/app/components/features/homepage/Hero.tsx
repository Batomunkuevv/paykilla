"use client";

import clsx from "clsx";
import { useAnimations } from "@hooks";

import { headerMenu } from "@/data";

import Link from "next/link";
import { Button, ResponsiveImage, BlurBall, Animated } from "@components";

export const HeroSection = () => {
    const { startAnimations } = useAnimations();

    const menuMiddle = Math.round(headerMenu.length / 2);
    const firstMenuCol = headerMenu.slice(0, menuMiddle);
    const secondMenuCol = headerMenu.slice(menuMiddle);

    return (
        <section className="section">
            <h1 className="sr-only">Empower your business</h1>
            <div className="container relative z-[1]">
                <div className="mb-[-16px] flex gap-x-[24px] justify-between 2xl:mb-[-11px]">
                    <div className="relative mt-[-30px] ml-[-15px] h1 2xl:mt-[-36px] 2xl:ml-[-13px] lg:mt-0 lg:ml-0 tb:mt-[-25px] tb:mr-[64px] tb:ml-[-9px] sm:mt-[-18px] sm:ml-[-5px] sm:z-[2] overflow-hidden">
                        <Animated.Div
                            style={{ transform: "translateZ(0)" }}
                            className="will-change-transform"
                            initial={{ y: "100%" }}
                            animate={startAnimations ? { y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            EM
                            <Animated.Span
                                style={{ transform: "translateZ(0)" }}
                                initial={{ opacity: 0 }}
                                animate={startAnimations ? { opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="will-change-[opacity] mt-[-28px] ml-[4px] mr-[7px] inline-block w-[75px] align-middle 2xl:mt-[-25px] 2xl:mr-[3px] tb:mt-[-21px] tb:ml-[6px] tb:mr-[10px] tb:w-[50px] sm:mt-[-12px] sm:ml-[11px] sm:w-[47px]"
                            >
                                <svg viewBox="0 0 75 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="30" x2="63" y2="30" stroke="#222A35" strokeWidth="12" />
                                    <path
                                        d="M57.9823 4.81262L54.7949 0.330365L45.8304 6.70513L49.0177 11.1874L57.9823 4.81262ZM65.0177 33.6874C66.7781 36.1629 70.2119 36.7426 72.6874 34.9823C75.1629 33.2219 75.7426 29.7881 73.9823 27.3126L65.0177 33.6874ZM49.0177 11.1874L65.0177 33.6874L73.9823 27.3126L57.9823 4.81262L49.0177 11.1874Z"
                                        fill="#222A35"
                                    />
                                    <path
                                        d="M48.4739 49.2943L45.1754 53.6954L53.9776 60.2924L57.2761 55.8913L48.4739 49.2943ZM73.8339 33.7985C75.6556 31.3679 75.162 27.9206 72.7313 26.0989C70.3006 24.2772 66.8534 24.7709 65.0317 27.2015L73.8339 33.7985ZM57.2761 55.8913L73.8339 33.7985L65.0317 27.2015L48.4739 49.2943L57.2761 55.8913Z"
                                        fill="#222A35"
                                    />
                                </svg>
                            </Animated.Span>
                            <span>POWER</span>
                        </Animated.Div>
                    </div>
                    <nav className="relative flex-none max-w-[460px] grid grid-cols-[1fr_1.33fr] gap-x-[41px] xl:gap-x-[22px] xl:max-w-[336px] tb:hidden">
                        {firstMenuCol && (
                            <ul>
                                {firstMenuCol.map((item, i) => (
                                    <li key={i} className="[&:not(:last-child)]:mb-[12px] text-menu uppercase 2xl:[&:not(:last-child)]:mb-[3px]">
                                        <Link
                                            className="pb-[8px] block w-fit border-b-2 border-solid border-transparent hover:border-orange transition-all duration-300 2xl:pb-[5px]"
                                            href={item.href}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {secondMenuCol && (
                            <ul>
                                {secondMenuCol.map((item, i) => (
                                    <li key={i} className="[&:not(:last-child)]:mb-[12px] text-menu uppercase 2xl:[&:not(:last-child)]:mb-[3px]">
                                        <Link
                                            className="pb-[8px] block w-fit border-b-2 border-solid border-transparent hover:border-orange transition-all duration-300 2xl:pb-[5px]"
                                            href={item.href}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </nav>
                </div>
                <div className="pb-[9px] mr-[-80px] mb-[-9px] h1 overflow-hidden 2xl:mr-[-15px] tb:pb-0 tb:mt-[9px] tb:ml-[-9px] tb:mr-0 tb:mb-[21px] tb:max-w-[88%] sm:mt-[10px] sm:ml-0 sm:mb-[8px] sm:overflow-visible">
                    <Animated.Div
                        style={{ transform: "translateZ(0)" }}
                        className="will-change-transform"
                        initial={{ y: "100%" }}
                        animate={startAnimations ? { y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        YOUR <span className="sm:ml-[-5px]">BUSINESS</span>
                    </Animated.Div>
                </div>
                <div className="pl-[4px] pr-[20px] pb-[110px] flex gap-x-[64px] xl:pl-0 xl:pr-[0] xl:pb-[96px] xl:mr-[-4px] xl:justify-between xl:gap-x-[48px] tb:mr-[-1px] tb:mb-[59px] tb:pb-0 sm:mb-[31px] sm:max-w-[220px] sm:flex-col">
                    <Animated.P
                        style={{ transform: "translateZ(0)" }}
                        initial={{ opacity: 0 }}
                        animate={startAnimations ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.9 }}
                        className="will-change-[opacity] mt-[50px] mr-[75px] max-w-[376px] flex-1 xl:mt-[18px] xl:mr-0 xl:max-w-[282px] tb:mt-[3px] sm:mt-0 sm:mb-[6px]"
                    >
                        Seamlessly process crypto payments with near-instant settlements and robust security.{" "}
                        <strong>Unlock global markets and&nbsp;save on&nbsp;fees.</strong>
                    </Animated.P>
                    <Animated.Div
                        style={{ transform: "translateZ(0)" }}
                        initial={{ opacity: 0 }}
                        animate={startAnimations ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className={clsx(
                            "pl-[18px] mt-[-128px] mr-auto mb-[-110px] w-full max-w-[666px] flex items-start xl:mt-[-134px] xl:ml-[-50px] xl:mb-[-99px] xl:pl-[0] xl:mr-0 xl:max-w-[595px] lg:mt-[-56px] md:ml-[-90px] md:max-w-[480px]",
                            "tb:absolute tb:top-[50px] tb:right-[-63px] tb:translate-x-[6.5%] tb:max-w-[355px]",
                            "sm:top-[27%] sm:w-[40%] sm:max-w-[220px]",
                            "xs:w-full xs:max-w-[226px] xs:top-[8%] xs:right-[-104px] xs:translate-x-[39%] xs:flex-col xs:gap-[0px]"
                        )}
                    >
                        <Animated.Div
                            style={{ transform: "translateZ(0)" }}
                            initial={{ rotate: -8, x: "-8%" }}
                            animate={startAnimations ? { rotate: 0, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 1.7 }}
                            className="will-change-transform mt-[22.3%] mr-[-41%] w-[63.767%]"
                        >
                            <ResponsiveImage src="homepage/hero/lc.png" alt="Left card" aspectRatio={379 / 435} priority />
                        </Animated.Div>
                        <Animated.Div
                            style={{ transform: "translateZ(0)" }}
                            initial={{ rotate: 15, x: "5%" }}
                            animate={startAnimations ? { rotate: 0, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 1.7 }}
                            className={clsx(
                                "will-change-transform w-[72.10%] relative xs:w-[86.3%] xs:ml-[-13px] xs:mt-[-6px]",
                                "after:content-[''] after:absolute after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:w-[58%]  after:h-[70%] after:bg-glass after:backdrop-blur-[4px] after:rounded-[26px] after:rotate-[19deg]  ",
                                "sm:after:translate-x-[-59%] sm:after:translate-y-[-50%] sm:after:rounded-[10px]  xs:after:translate-x-[-56%] xs:after:w-[59%]"
                            )}
                        >
                       <div className="w-full relative z-[1] sm:ml-[-8px]">
                         <ResponsiveImage
                                className=""
                                src="homepage/hero/rc-3.svg"
                                alt="Right card"
                                aspectRatio={395 / 479}
                                priority
                            />
                         
                              <ResponsiveImage
                                className="absolute top-0 left-0 w-full h-full"
                                src="homepage/hero/mobile-border-1.png"
                                alt="Border"
                                
                                sizes="(max-width: 900px) 100vw, 40vw"
                                aspectRatio={395 / 479}
                                priority
                            />
                       </div>
                           
                            
                        </Animated.Div>
                    </Animated.Div>
                    <Animated.Div
                        style={{ transform: "translateZ(0)" }}
                        initial={{ opacity: 0 }}
                        animate={startAnimations ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.7 }}
                        className="will-change-[opacity] mt-[48px] max-w-[217px] flex-1 xl:mt-[14px] xl:max-w-[180px] tb:mt-[1px] sm:max-w-[unset]"
                    >
                        <p className="mb-[8px] text-[36px] leading-[100%] font-bold xl:mb-[5px] xl:text-[30px] xl:leading-[120%] sm:hidden">With PayKilla</p>
                        <p className="tb:max-w-[165px] tb:text-right sm:max-w-[unset] sm:text-left [&_br]:sm:hidden">
                            <span className="text-orange">Killa [&rsquo;kɪlə]:</span>{" "}
                            <span className="text-t-gray">
                                cool,
                                <br /> highly skilled
                            </span>
                        </p>
                    </Animated.Div>
                </div>
                <div className="mt-[-105px] ml-[-2px] flex items-center gap-[64px] justify-between xl:mt-[-88px] xl:ml-0 tb:mt-0 tb:flex-row-reverse sm:gap-[10px] sm:items-stretch sm:flex-col-reverse">
                    <div className="overflow-hidden">
                        <Animated.Div
                            style={{ transform: "translateZ(0)" }}
                            className="will-change-transform"
                            initial={{ y: 100 }}
                            animate={startAnimations ? { y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 1.7 }}
                        >
                            <Button action="secondary" href={process.env.NEXT_PUBLIC_BUTTONS_CALL_URL}>
                                BOOK A CALL
                            </Button>
                        </Animated.Div>
                    </div>
                    <div className="overflow-hidden">
                        <Animated.Div
                            style={{ transform: "translateZ(0)" }}
                            className="will-change-transform"
                            initial={{ y: 100 }}
                            animate={startAnimations ? { y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 1.7 }}
                        >
                            <Button href={process.env.NEXT_PUBLIC_BUTTONS_GET_STARTED_URL}>GET STARTED</Button>
                        </Animated.Div>
                    </div>
                </div>
                <BlurBall
                    color="#FDDAB0"
                    className="top-[110px] left-[30%] w-[490px] xl:top-0 xl:left-[26.2%] tb:w-[287px] tb:top-[0.6%] tb:left-[40.8%] sm:w-[226px] sm:top-[14%] sm:left-[19%]"
                />
                <BlurBall
                    color="#7FCEFF"
                    className="top-[55%] left-[28%] w-[314px] xl:top-[49%] xl:left-[23%] tb:w-[176px] tb:top-[38%] tb:left-[37.3%] sm:w-[139px] sm:top-[41%] sm:left-[12%]"
                />
                <BlurBall
                    color="#C2C7F1"
                    className="top-[63%] left-[41%] w-[314px] xl:top-[54%] tb:w-[184px] tb:top-[43%] tb:left-[55.5%] sm:w-[145px] sm:top-[43%] sm:left-[43%]"
                />
                <BlurBall
                    color="rgba(249, 171, 193, .79)"
                    className="top-[35.4%] left-[51.8%] w-[341px] xl:top-[26.4%] xl:left-[54.3%] tb:w-[200px] tb:top-[18%] tb:left-[71%] sm:w-[158px] sm:top-[27%] sm:left-[70%]"
                />
                <BlurBall
                    color="rgba(50, 171, 247, .7)"
                    className="top-[72%] left-[58%] w-[156px] xl:top-[68%] xl:left-[63%] tb:w-[92px] tb:top-[49%] tb:left-[82%] sm:w-[72px] sm:top-[50%] sm:left-[83%]"
                />
            </div>
        </section>
    );
};
