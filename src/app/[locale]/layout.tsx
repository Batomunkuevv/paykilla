import { notFound } from "next/navigation";

import { LayoutProps } from "@t";

import { SUPPORTED_LOCALES } from "@utils";

import { RootProviders } from "@providers";
import { MainLayout, LanguageSetter, FontSetter } from "@components";

export function generateStaticParams() {
    return SUPPORTED_LOCALES.map((locale) => ({ locale: locale }));
}

const PageLayout = async ({ children, params }: LayoutProps) => {
    const paramsObject = await params;
    const locale = paramsObject?.locale || "en";

    if (!SUPPORTED_LOCALES.includes(locale)) {
        notFound();
    }

    return (
        <LanguageSetter locale={locale}>
            <FontSetter />
            <RootProviders>
                <MainLayout>{children}</MainLayout>
            </RootProviders>
        </LanguageSetter>
    );
};

export default PageLayout;
