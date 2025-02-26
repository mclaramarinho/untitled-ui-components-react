import { TextBaseType } from "../../types/text.types";
/**
 * @extends TextBaseType
 */
export interface UntitledHeaderProps extends TextBaseType {
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
export declare enum HeaderFontSizeByLevel {
    'h1' = "2XL",
    'h2' = "XL",
    'h3' = "LG",
    'h4' = "MD",
    'h5' = "SM",
    'h6' = "XS"
}
