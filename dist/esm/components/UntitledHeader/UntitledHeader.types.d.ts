import { CSSProperties } from "react";
import { UntitledColors, UntitledColorShades } from "../../types/colors.types";
import { UntitledFontWeights } from "../../types/typography.types";
export interface UntitledHeaderProps {
    /**
     * The text content of the header.
     * Accepts a `string` or `number`.
     */
    text?: string | number;
    /**
     * The font weight of the header.
     * Should be a value from `UntitledFontWeights` (not defined here).
     */
    weight?: UntitledFontWeights;
    /**
     * The color of the header text.
     * Can be a predefined color from `UntitledColorShades` or `UntitledColors`,
     * or a custom color string (e.g., HEX, RGB, or color name).
     */
    color?: UntitledColorShades | UntitledColors | string;
    /**
     * The font size of the header.
     * Can be a predefined size from `UntitledHeaderFontSizes` or a custom numeric value.
     */
    size?: number | UntitledHeaderFontSizes;
    /**
     * The semantic level of the header (`h1` to `h6`).
     * If not provided, it can be inferred from `size` using `HeaderLevelsByFontSize`.
     */
    level?: UntitledHeaderLevels;
    /**
     * Additional styles to be applied to the header.
     * Overrides color set by prop.
     * Accepts a `CSSProperties` object.
     */
    styles?: CSSProperties;
}
export type UntitledHeaderFontSizes = '2XL' | 'XL' | 'LG' | 'MD' | 'SM' | 'XS';
export type UntitledHeaderLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export declare enum HeaderLevelsByFontSize {
    '2XL' = "h1",
    'XL' = "h2",
    'LG' = "h3",
    'MD' = "h4",
    'SM' = "h5",
    'XS' = "h6"
}
