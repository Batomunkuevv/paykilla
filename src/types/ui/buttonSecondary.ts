import { AnchorHTMLAttributes, ReactNode } from "react";

import { ClassNameProp } from "@t";

export type ButtonSecondaryProps = { href: string; children: ReactNode; isDisabled?: boolean } & ClassNameProp & AnchorHTMLAttributes<HTMLAnchorElement>;
