import { Metadata } from "next";

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

export const generateMetadata = (): Metadata => {
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
