import * as icons from "react-feather";
import { UntitledColors } from "../../types/colors.types";

export default interface UntitledIconProps {
    icon: UntitledIconType;
    
    size?: number;

    variant?: UntitleIconVariant;

    bgColor?: UntitledColors;
    
    customBgColor?: string;
    customSecondaryBgColor?: string;

    customIconColor?: string;
    iconColor?: UntitledColors;
}

const iconNamesFromFeatherIcons = Object.keys(icons);

export type UntitledIconType = (typeof iconNamesFromFeatherIcons)[number];

export type UntitleIconVariant = "no-bg" | "light" | "double-color-light" | "double-color-dark" | "square-fill-light" | "square-fill" | "square-fill-dark" | "square-outline";