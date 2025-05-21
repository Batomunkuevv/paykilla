"use client";

import { ReactNode } from "react";

import { TranslationProvider, AnimationsProvider } from "@providers";

export const RootProviders = ({ children }: { children: ReactNode }) => {
    return (
        <TranslationProvider>
            <AnimationsProvider>{children}</AnimationsProvider>
        </TranslationProvider>
    );
};
