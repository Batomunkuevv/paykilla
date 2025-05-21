import { ReactNode } from "react";
import { LocaleType } from "@t";

export interface LanguageSetterProps {
    locale: LocaleType;
    children: ReactNode;
}
