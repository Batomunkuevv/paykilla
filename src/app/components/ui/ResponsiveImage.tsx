import clsx from "clsx";

import Image from "next/image";

import { ResponsiveImageProps } from "@t";

export const ResponsiveImage = ({
    src,
    alt,
    title,
    basePath = "/images",
    aspectRatio = 16 / 9,
    className,
    wrapperClassName,
    imageClassName,
    sizes = "100vw",
    priority = false,
}: ResponsiveImageProps) => {
    const paddingTop = `${(1 / aspectRatio) * 100}%`;

    return (
        <div className={clsx("overflow-hidden", className)}>
            <div style={{ paddingTop: paddingTop }} className={clsx("relative", wrapperClassName)}>
                <Image
                    src={`${basePath}/${src}`}
                    alt={alt}
                    title={title}
                    fill
                    sizes={sizes}
                    priority={priority}
                    className={clsx("object-cover", imageClassName)}
                />
            </div>
        </div>
    );
};
