import clsx from "clsx";

import { CloseButtonProps } from "@t";

export const CloseButton = ({ onClick, className }: CloseButtonProps) => {
    return (
        <button type="button" className={clsx("w-[40px] h-[40px] flex items-center justify-center flex-none bg-orange", className)} onClick={onClick}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L15 15" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                <path d="M15 1L1 15" stroke="white" strokeWidth="2" strokeLinejoin="round" />
            </svg>
        </button>
    );
};
