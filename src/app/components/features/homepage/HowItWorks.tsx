"use client";

import clsx from "clsx";
import { useEffect, useState, useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "motion/react";

import { ResponsiveImage, Button, Animated } from "@components";

export const HowItWorksSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    const sectionRef = useRef(null);

    const isInView = useInView(sectionRef, { once: true, amount: 1 });

    const handleWindowResize = () => {
        setIsMobile(window.matchMedia("(max-width: 1279px)").matches);
    };

    if (typeof window !== "undefined") {
        window.addEventListener("resize", handleWindowResize);
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(window.matchMedia("(max-width: 1279px)").matches);
        }
    }, []);

    return (
        <section ref={sectionRef} id="how-it-works" className="section">
            <div className="container">
                <div className="pr-[137px] mb-[48px] flex justify-between items-center gap-[32px] xl:pr-[90px] xl:mb-[52px] lg:pr-[5px] tb:mb-[40px] sm:mb-[30px]">
                    <h2 className="mt-[2px] subheading lg:mt-0">
                        <span className="text-t-orange">[4]</span> How it works
                    </h2>
                    <div className="flex gap-[10px] sm:hidden">
                        <ResponsiveImage
                            className="w-[32px] flex-none animate-curson-moving xl:w-[24px]"
                            src="icons/cursor.png"
                            alt="Cursor"
                            aspectRatio={1 / 1}
                        />
                        {isMobile ? "Click" : "Hover"} on&nbsp;cards for more info
                    </div>
                </div>
                <Swiper
                    className="mb-[50px] [&_.swiper-wrapper]:grid tb:mb-[40px] sm:!pr-[20px] sm:mb-[30px] sm:[&_.swiper-wrapper]:flex !overflow-visible"
                    wrapperClass="grid-cols-3 gap-[10px] tb:grid-cols-2"
                    modules={[Pagination]}
                    speed={1000}
                    spaceBetween={5}
                    slidesPerView="auto"
                    pagination={{ clickable: true, el: "[data-custom-pagination]" }}
                    breakpoints={{
                        767: {
                            spaceBetween: 0,
                            enabled: false,
                        },
                    }}
                >
                    <SwiperSlide className="min-md:!w-full sm:max-w-[320px]">
                        <div
                            className={clsx(
                                "group py-[25px] px-[27px] min-h-[655px] relative border-[3px] border-orange transition-all duration-500 hover:bg-orange hover:text-t-white",
                                "xl:min-h-[535px]",
                                "md:min-h-[474px]",
                                "sm:py-[20px] sm:px-[17px] sm:min-h-[424px] sm:text-t-white"
                            )}
                        >
                            <div className="absolute inset-[-3px] z-0 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:opacity-100">
                                <picture>
                                    <source srcSet="/images/homepage/how-it-works/01-360.png" media="(max-width: 767px)" />
                                    <source srcSet="/images/homepage/how-it-works/01-768.png" media="(max-width: 991px)" />
                                    <source srcSet="/images/homepage/how-it-works/01-1440.png" media="(max-width: 1719px)" />
                                    <img src="/images/homepage/how-it-works/01.png" alt="Godzilla" className="absolute inset-0 w-full h-full object-cover" />
                                </picture>
                            </div>
                            <div className="relative z-[2]">
                                <h3 className="h3 mb-[12px] tb:mb-[10px] sm:mb-[8px]">Sign up</h3>
                                <p className="text-t-white max-w-[290px] transition-opacity duration-500 opacity-0 group-hover:opacity-100 xl:max-w-[216px] tb:max-w-[166px] sm:opacity-100">
                                    Create your PayKilla account to&nbsp;access your personalized dashboard
                                </p>
                            </div>
                            <div className="absolute inset-[-3px] z-[1] pointer-events-none select-none sm:hidden">
                                <div
                                    className={clsx(
                                        "flex w-full h-full text-transparent text-[485px] font-medium leading-none",
                                        "bg-[url(/images/homepage/how-it-works/01.png)] bg-cover bg-center bg-clip-text",
                                        "xl:bg-[url(/images/homepage/how-it-works/01-1440.png)] xl:text-[384px]",
                                        "tb:bg-[url(/images/homepage/how-it-works/01-768.png)] tb:text-[250px] tb:font-bold"
                                    )}
                                >
                                    <span
                                        className={clsx(
                                            "mt-auto ml-auto mr-[-43px] mb-[-50px] block",
                                            "xl:mr-[-32px] xl:mb-[-41px]",
                                            "tb:mr-[-19px] tb:mb-[-29px]"
                                        )}
                                    >
                                        1
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="min-md:!w-full sm:max-w-[320px]">
                        <div
                            className={clsx(
                                "group py-[25px] px-[27px] min-h-[655px] relative border-[3px] border-orange transition-all duration-500 hover:bg-orange hover:text-t-white sm:text-t-white",
                                "xl:min-h-[535px]",
                                "md:min-h-[474px]",
                                "sm:py-[20px] sm:px-[17px] sm:min-h-[424px]"
                            )}
                        >
                            <div className="absolute inset-[-3px] z-0 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:opacity-100">
                                <picture>
                                    <source srcSet="/images/homepage/how-it-works/hiw-2-360.png" media="(max-width: 767px)" />
                                    <source srcSet="/images/homepage/how-it-works/hiw-2-764.png" media="(max-width: 991px)" />
                                    <source srcSet="/images/homepage/how-it-works/hiw-2-1440.png" media="(max-width: 1719px)" />
                                    <img
                                        src="/images/homepage/how-it-works/hiw-2.png"
                                        alt="Godzilla with case"
                                        className="absolute w-full h-full object-cover  xl:translate-x-[0px] xl:translate-y-[0px]"
                                    />
                                </picture>
                            </div>
                            <div className="relative z-[2]">
                                <h3 className="h3 mb-[12px] tb:mb-[10px] sm:mb-[8px]">Integrate</h3>
                                <p className="text-t-white max-w-[270px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 xl:max-w-[216px] tb:max-w-[176px] sm:opacity-100">
                                    Seamlessly connect our API to&nbsp;your system with expert&nbsp;guidance
                                </p>
                            </div>
                            <div className="absolute inset-[-3px] z-[1] pointer-events-none select-none sm:hidden">
                                <div
                                    className={clsx(
                                        "flex w-full h-full text-transparent text-[485px] font-medium leading-none",
                                        "bg-[url(/images/homepage/how-it-works/hiw-2.png)] bg-cover bg-center bg-clip-text",
                                        "xl:bg-[url(/images/homepage/how-it-works/hiw-2-1440.png)] xl:text-[384px]",
                                        "tb:bg-[url(/images/homepage/how-it-works/hiw-2-764.png)] tb:text-[250px] tb:font-bold"
                                    )}
                                >
                                    <span
                                        className={clsx(
                                            "mt-auto ml-auto mr-[-29px] mb-[-52px] block",
                                            "xl:mr-[-22px] xl:mb-[-41px]",
                                            "tb:mr-[-14px] tb:mb-[-29px]"
                                        )}
                                    >
                                        2
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="min-md:!w-full tb:col-span-2 sm:max-w-[320px]">
                        <div
                            className={clsx(
                                "group py-[25px] px-[27px] min-h-[655px] relative border-[3px] border-orange transition-all duration-500 hover:bg-orange hover:text-t-white sm:text-t-white",
                                "xl:min-h-[535px]",
                                "md:min-h-[474px]",
                                "tb:min-h-[363px]",
                                "sm:py-[20px] sm:px-[17px] sm:min-h-[424px]"
                            )}
                        >
                            <div className="absolute inset-[-3px] z-0 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:opacity-100">
                                <picture>
                                    <source srcSet="/images/homepage/how-it-works/03-360.png" media="(max-width: 767px)" />
                                    <source srcSet="/images/homepage/how-it-works/03-768.png" media="(max-width: 991px)" />
                                    <source srcSet="/images/homepage/how-it-works/03-1440.png" media="(max-width: 1719px)" />
                                    <img
                                        src="/images/homepage/how-it-works/03.png"
                                        alt="Godzilla paw"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </picture>
                            </div>
                            <div className="relative z-[2]">
                                <h3 className="h3 mb-[12px] tb:mb-[10px] sm:mb-[8px]">Transact</h3>
                                <p className="text-t-white max-w-[290px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 xl:max-w-[216px] tb:max-w-[226px] xs:max-w-[162px] sm:opacity-100">
                                    Start processing crypto payments and track your transactions in&nbsp;real-time
                                </p>
                            </div>
                            <div className="absolute inset-[-3px] z-[1] pointer-events-none select-none sm:hidden">
                                <div
                                    className={clsx(
                                        "flex w-full h-full text-transparent text-[485px] font-medium leading-none",
                                        "bg-[url(/images/homepage/how-it-works/03.png)] bg-cover bg-center bg-clip-text",
                                        "xl:bg-[url(/images/homepage/how-it-works/03-1440.png)] xl:text-[384px]",
                                        "tb:bg-[url(/images/homepage/how-it-works/03-768.png)] tb:text-[250px] tb:font-bold"
                                    )}
                                >
                                    <span
                                        className={clsx(
                                            "mt-auto ml-auto mr-[-29px] mb-[-48px] block",
                                            "xl:mr-[-20px] xl:mb-[-36px]",
                                            "tb:mr-[-14px] tb:mb-[-26px]"
                                        )}
                                    >
                                        3
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div
                        data-custom-pagination
                        className={clsx(
                            "hidden mt-[24px] justify-center gap-[10px] sm:flex",
                            "[&_.swiper-pagination-bullet]:m-0 [&_.swiper-pagination-bullet]:w-[13px] [&_.swiper-pagination-bullet]:h-[13px]",
                            "[&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:transition-all",
                            "[&_.swiper-pagination-bullet]:duration-500 [&_.swiper-pagination-bullet:not(.swiper-pagination-bullet-active)]:bg-gray [&_.swiper-pagination-bullet-active]:bg-orange"
                        )}
                    ></div>
                </Swiper>
                <div className="overflow-hidden">
                    <Animated.Div initial={{ y: "100%" }} animate={isInView ? { y: 0 } : false} transition={{ duration: 0.5 }}>
                        <Button href={process.env.NEXT_PUBLIC_BUTTONS_GET_STARTED_URL} className="mx-auto">
                            GET STARTED
                        </Button>
                    </Animated.Div>
                </div>
            </div>
        </section>
    );
};
