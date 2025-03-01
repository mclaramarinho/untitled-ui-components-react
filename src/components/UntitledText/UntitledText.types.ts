import { TextBaseType } from "../../types/text.types";

 /**
 * @extends TextBaseType
 * @borrows UntitledHeaderFontSizes as size
 */
export interface UntitledTextProps extends TextBaseType{
    /**
     * The font size of the header.  
     * Can be a predefined size from `UntitledHeaderFontSizes` or a custom numeric value.
     */
    size?: number | UntitledTextFontSizes;
}


export type UntitledTextFontSizes = 'XL' | 'LG' | 'MD' | 'SM' | 'XS';

