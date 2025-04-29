import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { ClassNameProp } from "@t";

export type ButtonProps = {
    isDisabled?: boolean;
    isLoading?: boolean;
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    action?: "secondary" | "primary";
} & (AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>) &
    ClassNameProp;
