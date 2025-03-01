import * as icons from "react-feather";
import { UntitledColors, UntitledColorShades } from "../../types/colors.types";
import { CSSProperties } from "react";

export interface UntitledIconProps {
    icon: UntitledIconType;
    
    size?: number;

    variant?: UntitleIconVariant;

    bgColor?: UntitledColors;
    
    customBgColor?: string;
    customSecondaryBgColor?: string;

    customIconColor?: string;
    iconColor?: UntitledColors;

    styles?: UntitledIconStyles;
}

export const iconNamesFromFeatherIcons = Object.keys(icons);

export type UntitledIconType = (typeof iconNamesFromFeatherIcons)[number];

export type UntitleIconVariant = "no-bg" | "light" | "double-color-light" | "double-color-dark" | "square-fill-light" | "square-fill" | "square-fill-dark" | "square-outline";

export interface UntitledIconStyles {
    outerWrapper: CSSProperties;
    innerWrapper: CSSProperties;
}