import { Burger, ContactUsSection } from "@components";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
    return {
        title: "Contact PayKilla — Get Support, Ask Questions, and Explore Payment Solutions",
        description: "Have questions or need assistance? Contact PayKilla's team — we're here to help with payments, security, and account inquiries"
    }
}

const ContactUs = () => {
    return (
        <>
            <Burger />
            <ContactUsSection />
        </>
    );
};

export default ContactUs;
