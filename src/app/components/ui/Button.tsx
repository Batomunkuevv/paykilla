import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

import Link from "next/link";

import { ButtonProps } from "@/types";

import { Spinner } from "./Spinner";

const ArrowIcon = () => (
    <span className="group-hover:translate-x-[10px] transition-all duration-300 flex items-center w-[31px] flex-none tb:w-[25px] sm:px-[2px] sm:w-[24px] sm:group-hover:translate-x-[6px]">
        <svg className="w-full sm:mt-[1px]" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="3.5" y1="13.25" x2="25.6357" y2="13.25" stroke="currentColor" strokeWidth="2.5" />
            <path
                d="M20.4484 4.7756L19.724 3.7569L17.6866 5.20571L18.411 6.2244L20.4484 4.7756ZM24.0328 14.13C24.4328 14.6926 25.2132 14.8244 25.7759 14.4243C26.3385 14.0242 26.4702 13.2438 26.0701 12.6812L24.0328 14.13ZM18.411 6.2244L24.0328 14.13L26.0701 12.6812L20.4484 4.7756L18.411 6.2244Z"
                fill="currentColor"
            />
            <path
                d="M18.2107 20.4183L17.461 21.4186L19.4615 22.9179L20.2112 21.9176L18.2107 20.4183ZM26.0289 14.1551C26.443 13.6027 26.3308 12.8192 25.7783 12.4052C25.2259 11.9912 24.4425 12.1034 24.0284 12.6558L26.0289 14.1551ZM20.2112 21.9176L26.0289 14.1551L24.0284 12.6558L18.2107 20.4183L20.2112 21.9176Z"
                fill="currentColor"
            />
        </svg>
    </span>
);

export const Button = (props: ButtonProps) => {
    const { className, action = "primary", children, isDisabled, isLoading, type = "button", ...rest } = props;
    const classes = clsx(
        "group py-[21px] px-[40px] flex items-center justify-center gap-x-[10px] w-fit min-h-[100px] min-w-[390px] bg-orange border-2 border-transparent text-button transitionl-all duration-300 outline-none",
        "hover:bg-orange-hover hover:text-t-white focus:bg-orange-focus focus:text-t-white focus:border-orange-hover disabled:bg-disabled disabled:text-t-white",
        { "bg-orange-focus border-orange-hover text-t-white pointer-events-none": isLoading },
        { "bg-disabled pointer-events-none": isDisabled },
        "xl:py-[10px] xl:px-[32px] xl:min-w-[334px] xl:min-h-[80px]",
        "tb:min-w-[278px]",
        "sm:py-[6px] sm:px-[16px] sm:gap-[6px] sm:min-w-[unset] sm:w-full sm:min-h-[70px]",
        { "bg-transparent [&]:border-orange text-t-black": action === "secondary" },
        { "text-t-white": action === "primary" },
        className
    );

    if ("href" in props && typeof props.href === "string") {
        return (
            <Link href={props.href} target={props.target} className={classes}>
                {children}
                {isLoading && <Spinner className="w-[26px] h-[26px] flex-none tb:w-[20px] tb:h-[20px]" />}
                {!isLoading && action === "primary" && <ArrowIcon />}
            </Link>
        );
    }

    const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;

    return (
        <button type={type} className={classes} {...buttonProps}>
            {children}
            {isLoading && <Spinner className="w-[26px] h-[26px] flex-none tb:w-[20px] tb:h-[20px]" />}
            {!isLoading && action === "primary" && <ArrowIcon />}
        </button>
    );
};
