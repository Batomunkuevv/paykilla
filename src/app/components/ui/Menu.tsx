"use client";

import { usePathname } from "next/navigation";

import { MenuProps } from "@t";

import { MenuItem } from "@components";

export const Menu = ({ className, items, twoColumns }: MenuProps) => {
    const pathName = usePathname();

    const renderMenuItems = (menuItems: typeof items) =>
        menuItems.map((item, i) => <MenuItem key={i} label={item.label} href={item.href} isActive={pathName === item.href} />);

    if (twoColumns) {
        const middle = Math.round(items.length / 2);
        const firstCol = items.slice(0, middle);
        const secondCol = items.slice(middle);

        return (
            <nav className={className}>
                <ul>{renderMenuItems(firstCol)}</ul>
                <ul>{renderMenuItems(secondCol)}</ul>
            </nav>
        );
    }

    return (
        <nav className={className}>
            <ul>{renderMenuItems(items)}</ul>
        </nav>
    );
};
