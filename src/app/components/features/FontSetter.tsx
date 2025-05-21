"use client";

import { useEffect } from "react";

import { i18n } from "@lib";

export const FontSetter = () => {
    const setFontByLocale = () => {
        document.body.classList.add(`${i18n.language}-language`);
    };

    useEffect(() => {
        setFontByLocale();
    }, []);

    return null;
};
