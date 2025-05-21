import { Metadata } from "next";

import { LocaleType } from "@t";

import enSeo from "@locales/en/seo.json";
import ruSeo from "@locales/ru/seo.json";

import { Burger, ContactUsSection } from "@components";

const SEO_BY_LOCALE = {
    en: enSeo,
    ru: ruSeo,
};

export const generateMetadata = async ({ params }: { params: Promise<{ locale: LocaleType }> }): Promise<Metadata> => {
    const { locale } = await params;
    const seo = SEO_BY_LOCALE[locale]?.contactUs;

    return {
        title: seo.title,
        description: seo.description,
    };
};

const ContactUs = () => {
    return (
        <>
            <Burger />
            <ContactUsSection />
        </>
    );
};

export default ContactUs;
