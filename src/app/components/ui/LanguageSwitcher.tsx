"use client";

import clsx from "clsx";
import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

import { SUPPORTED_LOCALES } from "@utils";
import { LocaleType } from "@t";

const linkClasses = clsx(
    "px-[4px] pb-[4px] text-[24px] leading-[100%] font-familijen-grotesk font-bold uppercase border-[1px] border-orange text-t-black",
    "transition-all duration-300 hover:text-orange",
    "xl:px-[2px] xl:pb-[2px] xl:text-[18px] xl:leading-[100%]",
    "lg:text-[16px]",
    "tb:h-[45px] tb:basis-1/2 tb:text-t-white tb:flex tb:items-center tb:justify-center",
    "sm:text-[16px]"
);
const linkActiveClasses = "pointer-events-none bg-orange text-t-white";

export const LanguageSwitcher = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [, startTransition] = useTransition();

    const currentlocale = pathname.split("/")[1] as LocaleType;
    const isValidlocale = SUPPORTED_LOCALES.includes(currentlocale);
    const basePath = isValidlocale ? pathname.replace(`/${currentlocale}`, "") || "/" : pathname;

    const switchTo = (locale: LocaleType) => {
        if (locale === currentlocale) return;

        const newPath = locale === "en" ? basePath : `/${locale}${basePath}`;

        startTransition(() => {
            router.push(newPath);
        });
    };

    return (
        <div className="flex items-center gap-[8px] xl:gap-[7px] tb:mb-[32px] tb:gap-[11px]">
            {SUPPORTED_LOCALES.map((locale, i) => (
                <button
                    key={i}
                    onClick={() => switchTo(locale)}
                    className={clsx(linkClasses, { [linkActiveClasses]: currentlocale === locale || !isValidlocale })}
                >
                    {locale.toLocaleUpperCase()}
                </button>
            ))}
        </div>
    );
};
