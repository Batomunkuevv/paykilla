import { ButtonSecondaryProps } from "@t";
import clsx from "clsx";
import Link from "next/link";

export const ButtonSecondary = ({ href, children, isDisabled, ...props }: ButtonSecondaryProps) => {
    return (
        <Link
            href={href}
            className={clsx("block w-fit text-button hover:text-orange-hover focus:text-orange-focus transition-all duration-300 outline-none", {
                "text-disabled pointer-events-none": isDisabled,
            })}
            {...props}
        >
            {children}
        </Link>
    );
};
