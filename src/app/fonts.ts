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

const myseoSansCyrl = localFont({
    src: [
        {
            path: "./fonts/MuseoSansCyrl/MuseoSansCyrl-500.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/MuseoSansCyrl/MuseoSansCyrl-500.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/MuseoSansCyrl/MuseoSansCyrl-700.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/MuseoSansCyrl/MuseoSansCyrl-700.woff",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/MuseoSansCyrl/MuseoSansCyrl-700.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/MuseoSansCyrl/MuseoSansCyrl-700.woff",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/MuseoSansCyrl/MuseoSansCyrl-700.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/MuseoSansCyrl/MuseoSansCyrl-700.woff",
            weight: "700",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-museo-sans-cyrl",
});

export const fontsVariables = [familijenGrotesk.variable, myseoSansCyrl.variable];
