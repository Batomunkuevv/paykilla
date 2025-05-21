"use client";

import { useEffect, useState } from "react";
import { i18n } from "@lib";

import { LanguageSetterProps } from "@t";

export const LanguageSetter = ({ locale, children }: LanguageSetterProps) => {
    const [isReady, setIsReady] = useState(false);

    const switchLanguage = async () => {
        if (i18n.language !== locale) {
            await i18n.changeLanguage(locale);
        }

        setIsReady(true);
    };

    useEffect(() => {
        switchLanguage();
    }, [locale]);

    if (!isReady) return null;

    return <>{children}</>;
};
