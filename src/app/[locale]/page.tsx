import { Metadata } from "next";
import { LocaleType } from "@t";

import enSeo from "@locales/en/seo.json";
import ruSeo from "@locales/ru/seo.json";

import {
    Burger,
    HeroSection,
    WhyUsSection,
    FeaturesSection,
    SolutionsSection,
    HowItWorksSection,
    DemoSection,
    DeveloperDocsSection,
    ContactUsCtaSection,
    FaqSection,
    FixedMenu,
} from "@components";

const SEO_BY_LOCALE = {
    en: enSeo,
    ru: ruSeo,
};

export const generateMetadata = async ({ params }: { params: Promise<{ locale: LocaleType }> }): Promise<Metadata> => {
    const paramsObject = await params;
    const locale = paramsObject?.locale || "en";
    const seo = SEO_BY_LOCALE[locale]?.home;

    return {
        openGraph: {
            images: [
                {
                    url: "/previews/home.png",
                    width: 1200,
                    height: 630,
                    alt: "PayKilla",
                },
                {
                    url: "/previews/home-mobile.png",
                    width: 510,
                    height: 630,
                    alt: "PayKilla",
                },
            ],
        },
        title: seo.title,
        description: seo.description,
    };
};

const Home = () => {
    return (
        <>
            <Burger />
            <FixedMenu />
            <HeroSection />
            <WhyUsSection />
            <FeaturesSection />
            <SolutionsSection />
            <HowItWorksSection />
            <DemoSection />
            <DeveloperDocsSection />
            <ContactUsCtaSection />
            <FaqSection />
        </>
    );
};

export default Home;
