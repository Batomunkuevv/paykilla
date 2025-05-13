import { LogoProps } from "@t";

import { ResponsiveImage } from "@components";

export const Logo = ({ className, type = "black" }: LogoProps) => {
    const logoSrcObject = {
        white: "logo-white.svg",
        black: "logo-black-2.svg",
        footer: "logo-footer-2.svg",
    };

    return <ResponsiveImage className={className} src={logoSrcObject[type]} alt="Paykilla logo" aspectRatio={175 / 45}></ResponsiveImage>;
};
