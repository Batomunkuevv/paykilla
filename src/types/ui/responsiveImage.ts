import { ClassNameProp } from "@t";

export interface ResponsiveImageProps extends ClassNameProp {
    src: string;
    alt: string;
    title?: string;
    aspectRatio: number;
    basePath?: string;
    className?: string;
    wrapperClassName?: string;
    imageClassName?: string;
    sizes?: string;
    priority?: boolean;
    width?: number;
    height?: number;
}
