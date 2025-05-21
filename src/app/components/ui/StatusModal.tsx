"use client";

import clsx from "clsx";
import { useEffect, useState, MouseEvent, useRef } from "react";

import { StatusModalProps } from "@t";

import { CloseButton } from "./CloseButton";

export const StatusModal = ({ className, modal, setModal }: StatusModalProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const popupRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 10);
    }, [modal]);

    const closePopup = () => {
        setIsVisible(false);
        setTimeout(() => {
            setModal(null);
        }, 300);
    };

    const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
        const { target } = e;

        if (target === popupRef.current) {
            closePopup();
        }
    };

    return (
        <div
            ref={popupRef}
            className={clsx(
                "py-[48px] fixed top-0 left-0 w-full h-full flex justify-center bg-overlay z-[100] overflow-auto opacity-0 transition-all duration-300",
                { "opacity-100": isVisible },
                className
            )}
            onClick={handleBackdropClick}
        >
            <div
                className={clsx(
                    "py-[77px] px-[87px] my-[auto] flex flex-col items-center w-[calc(100%-40px)] max-w-[703px] bg-white border-[3px] border-gray relative text-center",
                    "xl:py-[67px] xl:px-[90px] xl:max-w-[630px]",
                    "sm:py-[71px] sm:px-[57px]"
                )}
            >
                <CloseButton className="absolute top-[17px] right-[17px]" onClick={closePopup} />
                <h2
                    className="mb-[14px] text-[46px] leading-[113%] font-medium xl:text-[40px] xl:leading-[107.5%] sm:mb-[10px] xs:text-[18px] xs:leadiing-[150%]"
                    dangerouslySetInnerHTML={{ __html: modal.title }}
                />
                {modal.text && <p className="xs:max-w-[145px]" dangerouslySetInnerHTML={{ __html: modal.text }} />}
            </div>
        </div>
    );
};
