import "./globals.css";
import clsx from "clsx";

import type { Metadata } from "next";
import { LayoutProps } from "@t";

import { AnimationsProvider } from "@context";

import { fontsVariables } from "./fonts";

import { MainLayout } from "@components";

export const metadata: Metadata = {
    title: "Paykilla – Empower your business",
    description:
        "PayKilla leverages cutting-edge blockchain technology and a user-centric design to deliver a secure, fast and cost-effective crypto payment solution.",
};

const RootLayout = ({ children }: LayoutProps) => {
    return (
        <html lang="ru">
            <head>
                <meta name="robots" content="noindex, nofollow" />
            </head>
            <body className={clsx(fontsVariables)}>
                <AnimationsProvider>
                    <MainLayout>{children}</MainLayout>
                </AnimationsProvider>
            </body>
        </html>
    );
};

export default RootLayout;
