import type { ReactNode } from "react";
import { LocaleType } from "@t";

export interface LayoutProps {
    children: ReactNode;
    params?: Promise<{ locale: LocaleType }>;
}
