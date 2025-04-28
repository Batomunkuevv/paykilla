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
