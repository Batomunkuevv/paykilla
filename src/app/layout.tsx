import "./globals.css";
import clsx from "clsx";

import type { Metadata } from "next";
import { LayoutProps } from "@t";

import { AnimationsProvider } from "@context";

import { fontsVariables } from "./fonts";

import { MainLayout } from "@components";

export const metadata: Metadata = {
    metadataBase: new URL("https://paykilla.com"),
    title: "PayKilla — Fast and Secure Online Crypto Payments - no hidden charges",
    description:
        "PayKilla enables instant crypto payments, advanced multi-layer security, global reach with multi-currency support, and ultra-low processing fees. Perfect for businesses of all sizes!",
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    icons: {
        icon: [
            { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
            { url: "/favicons/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon.ico", type: "image/x-icon" },
        ],
        apple: "/favicons/apple-touch-icon.png",
    },
    manifest: "/favicons/site.webmanifest",
    openGraph: {
        type: "website",
        url: "https://paykilla.com/",
        title: "PayKilla — Fast and Secure Online Payments",
        description: "PayKilla offers a fast, simple, and secure way to make online payments in multiple cryptocurrencies",
        images: [
            {
                url: "/previews/general.png",
                width: 1200,
                height: 630,
                alt: "PayKilla",
            },
            {
                url: "/previews/general-mobile.png",
                width: 510,
                height: 630,
                alt: "PayKilla",
            },
        ],
    },
    other: {
        "yandex-verification": "a17683495d1c564c",
    },
};

const RootLayout = ({ children }: LayoutProps) => {
    return (
        <html lang="ru">
            <body className={clsx(fontsVariables)}>
                <AnimationsProvider>
                    <MainLayout>{children}</MainLayout>
                </AnimationsProvider>
            </body>
        </html>
    );
};

export default RootLayout;
