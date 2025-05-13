import clsx from "clsx";

import { MenuItemProps } from "@/types";

export const MenuItem = ({ label, href, isActive, className }: MenuItemProps) => (
    <li className={clsx("[&:not(:last-child)]:mb-[7px] [&:not(:last-child)]:xl:mb-[3px] md:[&:not(:last-child)]:mb-[4px]", className)}>
        <a
            href={href}
            className={clsx(
                "pb-[4px] block w-fit border-b-2 text-menu hover:text-orange-hover focus:text-orange-hover outline-none transitionl-all duration-300",
                {
                    "border-orange": isActive,
                    "border-transparent": !isActive,
                }
            )}
        >
            {label}
        </a>
    </li>
);
