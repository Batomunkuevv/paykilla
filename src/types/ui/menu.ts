import { ClassNameProp } from "../global";

export interface MenuItem {
    href: string;
    label: string;
}

export interface MenuItemProps extends MenuItem, ClassNameProp {
    isActive: boolean;
}

export interface MenuProps extends ClassNameProp {
    items: MenuItem[];
    twoColumns?: boolean;
}
