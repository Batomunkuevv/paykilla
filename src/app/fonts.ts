import localFont from "next/font/local";

const familijenGrotesk = localFont({
    src: [
        {
            path: "./fonts/Familijen-Grotesk/FamiljenGrotesk-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/Familijen-Grotesk/FamiljenGrotesk-Regular.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/Familijen-Grotesk/FamiljenGrotesk-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/Familijen-Grotesk/FamiljenGrotesk-Medium.woff",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/Familijen-Grotesk/FamiljenGrotesk-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/Familijen-Grotesk/FamiljenGrotesk-SemiBold.woff",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/Familijen-Grotesk/FamiljenGrotesk-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/Familijen-Grotesk/FamiljenGrotesk-Bold.woff",
            weight: "700",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-familijen-grotesk",
});

export const fontsVariables = familijenGrotesk.variable;
