import { LogoProps } from "@t";

import { ResponsiveImage } from "@components";

export const Logo = ({ className, type = "black" }: LogoProps) => {
    const logoSrcObject = {
        white: "logo.svg",
        black: "logo-black.svg",
        footer: "logo-footer.svg",
    };

    return <ResponsiveImage className={className} src={logoSrcObject[type]} alt="Paykilla logo" title="Paykilla logo" aspectRatio={175 / 45}></ResponsiveImage>;
};
