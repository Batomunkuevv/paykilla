"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import clsx from "clsx";

import { FaqItemType } from "@t";

import { faq } from "@data";

import { Button, FaqItem, ResponsiveImage } from "@components";

export const FaqSection = () => {
    const [isOpenChat, setIsOpenChat] = useState(false);
    const [currentFaq, setCurrentFaq] = useState<FaqItemType | null>(null);

    const sectionRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const bodyRef = useRef<HTMLDivElement | null>(null);
    const chatRef = useRef<HTMLDivElement | null>(null);

    const otherFaq = [...faq].slice(0, -1);
    const lastFaq = [...faq].slice(-1)[0];

    const handleBackClick = () => {
        setIsOpenChat(false);
        resetWrapperHeight();

        setTimeout(() => {
            setCurrentFaq(null);
        }, 500);
    };

    const resetWrapperHeight = () => {
        const wrapper = wrapperRef.current;
        const body = bodyRef.current;

        if (!wrapper || !body) return;

        const bodyHeight = body.offsetHeight;

        wrapper.style.height = `${bodyHeight}px`;

        const wrapperTransitionEnd = () => {
            wrapper.style.height = "auto";
            wrapper.removeEventListener("transitionend", wrapperTransitionEnd);
        };

        wrapper.addEventListener("transitionend", wrapperTransitionEnd);
    };

    const scrollToFaqTop = () => {
        if (!sectionRef.current) return;

        sectionRef.current.scrollIntoView();
    };

    const updateWrapperHeight = useCallback(() => {
        const wrapper = wrapperRef.current;
        const chat = chatRef.current;

        if (!wrapper || !chat || !currentFaq) return;

        const currentHeight = wrapper.offsetHeight;
        wrapper.style.height = `${currentHeight}px`;

        void wrapper.offsetHeight;

        const chatStyles = getComputedStyle(chat);
        const chatBordersWidth = parseFloat(chatStyles.borderWidth);
        const chatHeight = chat.scrollHeight + chatBordersWidth * 2;

        wrapper.style.height = `${chatHeight}px`;
    }, [currentFaq]);

    useEffect(() => {
        updateWrapperHeight();

        if (currentFaq) {
            scrollToFaqTop();
        }
    }, [currentFaq, updateWrapperHeight]);

    return (
        <section ref={sectionRef} id="faq" className="section xl:pt-[17px] md:p-0 sm:mt-[-6px]">
            <div className="container">
                <h2 className="mb-[50px] subheading tb:mb-[40px] sm:mb-[30px]">
                    <span className="text-t-orange">[8]</span> FAQ
                </h2>
                <div ref={wrapperRef} className="relative overflow-hidden transition-height duration-500 will-change-[height]">
                    <div ref={bodyRef} className="grid grid-cols-3 gap-[10px] grid-flow-dense md:grid-cols-2 xs:flex xs:flex-col">
                        {otherFaq &&
                            otherFaq.map((faq, i) => (
                                <FaqItem
                                    key={i}
                                    textClassName="max-w-[375px] xs:max-w-[76%]"
                                    setCurrentFaq={setCurrentFaq}
                                    setIsOpenChat={setIsOpenChat}
                                    faq={faq}
                                />
                            ))}
                        <Button href={process.env.NEXT_PUBLIC_BUTTONS_GET_STARTED_URL} className="m-auto md:col-[2/3] xs:mt-[20px] xs:order-[2]">
                            GET STARTED
                        </Button>
                        {lastFaq && (
                            <FaqItem
                                className="[&]:pt-[34px] [&]:pb-[48px] min-h-[unset] col-span-2 xl:[&]:pb-[46px] [&]:md:pt-[32px] [&]:md:pb-[30px] md:col-span-1 sm:[&]:pt-[19px] sm:[&]:px-[20px] sm:[&]:pb-[18px]"
                                textClassName="sm:max-w-[95%]"
                                setCurrentFaq={setCurrentFaq}
                                setIsOpenChat={setIsOpenChat}
                                faq={lastFaq}
                            />
                        )}
                        <div
                            ref={chatRef}
                            className={clsx(
                                "py-[42px] px-[27px] absolute z-[2] top-0 left-0 w-full min-h-full bg-white border-[3px] border-gray",
                                "md:pt-[111px] md:pb-[64px]",
                                "sm:pt-[83px] sm:px-[17px] sm:pb-[17px]",
                                "opacity-0 pointer-events-none transition-all duration-500",
                                { "pointer-events-auto": currentFaq },
                                { "opacity-100": isOpenChat }
                            )}
                        >
                            <button
                                typeof="button"
                                className={clsx(
                                    "absolute top-[35px] left-[27px] flex items-center gap-[10px] text-[36px] font-bold leading-[100%]",
                                    "xl:text-[30px] xl:leading-[120%]",
                                    "md:top-[36px]",
                                    "sm:top-[18px] sm:left-[17px] sm:text-[20px] sm:leading-[175%]"
                                )}
                                onClick={handleBackClick}
                            >
                                <span className="w-[24px] flex-none xl:mt-[5px] sm:w-[22px]">
                                    <svg viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line
                                            y1="-1.25"
                                            x2="22.1357"
                                            y2="-1.25"
                                            transform="matrix(-1 0 0 1 23.2407 11)"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                        />
                                        <path
                                            d="M6.29234 1.2756L7.01675 0.256901L9.05413 1.70571L8.32973 2.7244L6.29234 1.2756ZM2.70797 10.63C2.30789 11.1926 1.52748 11.3244 0.964869 10.9243C0.40226 10.5242 0.270502 9.74381 0.67058 9.1812L2.70797 10.63ZM7.31104 2L8.32973 2.7244L2.70797 10.63L1.68927 9.9056L0.67058 9.1812L6.29234 1.2756L7.31104 2Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M8.53004 16.9183L9.2797 17.9186L7.27919 19.4179L6.52953 18.4176L8.53004 16.9183ZM0.711779 10.6551C0.297754 10.1027 0.40995 9.31923 0.962375 8.90521C1.5148 8.49118 2.29826 8.60338 2.71229 9.1558L0.711779 10.6551ZM7.52979 17.668L6.52953 18.4176L0.711779 10.6551L1.71203 9.90546L2.71229 9.1558L8.53004 16.9183L7.52979 17.668Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                                BACK TO QUESTIONS
                            </button>
                            <div className="ml-auto mb-[36px] w-fit flex items-end gap-[20px] max-w-[70.4%] xl:mb-[30px] xl:max-w-[76%] md:mb-[20px] md:flex-col md:gap-[10px] md:max-w-[unset] sm:max-w-[77%]">
                                <p
                                    className="p-[30px] bg-sky h3 [&_br]:hidden sm:p-[20px]"
                                    dangerouslySetInnerHTML={{ __html: currentFaq?.question || "" }}
                                ></p>
                                <div
                                    className={clsx(
                                        "w-[55px] h-[55px] flex-none bg-sky flex items-center justify-center rounded-full text-[15px] leading-[100%] font-bold",
                                        "sm:w-[39px] sm:h-[39px] sm:text-[11px]"
                                    )}
                                >
                                    You
                                </div>
                            </div>
                            <div
                                className={clsx(
                                    "w-fit flex items-end gap-[20px] max-w-[70.4%] xl:max-w-[76%] md:flex-col-reverse md:items-stretch md:gap-[10px] md:max-w-[unset]",
                                    "opacity-0 translate-y-[5%] pointer-events-none transition-all duration-500",
                                    { "delay-700 opacity-100 translate-y-0 pointer-events-auto": isOpenChat }
                                )}
                            >
                                <ResponsiveImage
                                    className="w-[55px] flex-none rounded-full sm:w-[39px]"
                                    src="homepage/faq/admin.png"
                                    alt="Admin avatar"
                                    aspectRatio={1 / 1}
                                    sizes="5vw"
                                />
                                <div
                                    className="p-[30px] bg-orange text-t-white h3 sm:p-[20px] sm:pt-[18px] sm:pr-[17px] sm:[&_br]:hidden"
                                    dangerouslySetInnerHTML={{ __html: currentFaq?.answer || "" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
