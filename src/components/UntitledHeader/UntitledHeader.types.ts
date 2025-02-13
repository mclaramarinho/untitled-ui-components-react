import { UntitledColors } from "../../types/colors.types";
import { UntitledFontWeights } from "../../types/typography.types";

export default interface UntitledHeaderProps {
    text?: string | number;
    weight?: UntitledFontWeights;
    color?: string | UntitledColors;
    size?: number | UntitledHeaderFontSizes;
    level?: UntitledHeaderLevels;
}

export type UntitledHeaderFontSizes = '2XL' | 'XL' | 'LG' | 'MD' | 'SM' | 'XS';
export type UntitledHeaderLevels = 'h1' | 'h2'| 'h3' | 'h4' | 'h5' | 'h6'; 
export enum HeaderLevelsByFontSize {
    '2XL' = 'h1',
    'XL' = 'h2',
    'LG' = 'h3',
    'MD' = 'h4',
    'SM' = 'h5',
    'XS' = 'h6'
}