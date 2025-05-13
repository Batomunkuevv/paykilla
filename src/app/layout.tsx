import "./globals.css";
import clsx from "clsx";

import type { Metadata } from "next";
import { LayoutProps } from "@t";

import { AnimationsProvider } from "@context";

import { fontsVariables } from "./fonts";

import Script from "next/script";
import { MainLayout } from "@components";

export const metadata: Metadata = {
    metadataBase: new URL("https://paykilla.com"),
  
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
        "google-site-verification": "-UdwNolORcUupKr2rnDA94wnldfsr0ywjyPrvjZFHcA",
    },
};

const RootLayout = ({ children }: LayoutProps) => {
    return (
        <html lang="ru">
            <head>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-70QPNE8Q90" strategy="afterInteractive" />
                <Script id="google-gtag" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-70QPNE8Q90');
                    `}
                </Script>
                <Script id="yandex-metrika" strategy="afterInteractive">
                    {`
                        (function(m,e,t,r,i,k,a){
                            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                            m[i].l=1*new Date();
                            for (var j = 0; j < document.scripts.length; j++) {
                                if (document.scripts[j].src === r) { return; }
                            }
                            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                        ym(101477961, "init", {
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true,
                            webvisor:true,
                            ecommerce:"dataLayer"
                        });
                    `}
                </Script>
            </head>
            <body className={clsx("will-change-[background]", fontsVariables)}>
                <AnimationsProvider>
                    <MainLayout>{children}</MainLayout>
                </AnimationsProvider>
            </body>
        </html>
    );
};

export default RootLayout;
