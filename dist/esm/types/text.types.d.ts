import { CSSProperties } from "react";
import { UntitledColors, UntitledColorShades } from "./colors.types";
import { UntitledFontWeights } from "./typography.types";
/**
 * @borrows UntitledFontWeights as weight
 * @borrows UntitledColorShades as color
 * @borrows UntitledColors as color
 */
export interface TextBaseType {
    /**
     * The text content of the header.
     * Accepts a `string` or `number`.
     */
    text?: string | number;
    /**
     * The font weight of the header.
     */
    weight?: UntitledFontWeights;
    /**
    * The color of the header text.
    * Can be a predefined color from `UntitledColorShades` or `UntitledColors`,
    * or a custom color string (e.g., HEX, RGB, or color name).
    *
    */
    color?: UntitledColorShades | UntitledColors | string;
    /**
     * Additional styles to be applied to the header.
     * Overrides color set by prop.
     * Accepts a `CSSProperties` object.
     */
    styles?: CSSProperties;
}
