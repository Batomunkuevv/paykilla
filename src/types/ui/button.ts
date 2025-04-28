import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { ClassNameProp } from "@t";

export type ButtonProps = {
    isDisabled?: boolean;
    isLoading?: boolean;
    children: ReactNode;
    type?: "button" | "submit" | "reset";
} & (AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>) &
    ClassNameProp;
