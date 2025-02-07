import ImageBaseType, { ImageSizeType } from "./image.types";

/** @description Base type for all Icon components 
 * @extends ImageBaseType
*/
export default interface IconBaseType extends ImageBaseType{
    /** Optional attribute 
     * 
     * If undefined, the icon will have its regular size
     * 
     * @type ImageSizeType
     */
    size?: ImageSizeType;
}

/**
 * Used to set the icon to default sizes. Is passed as prop to components.
 * @class
 * @example size={FixedIconSize.SM}
 */
export class FixedIconSize {
    /**
     * Extra-small size (12x12)
     * @static
     */
    static get XS () : ImageSizeType {
        return { width: 12, height: 12 };
    }

     /**
     * Small size (16x16)
     * @static
     */
    static get SM () : ImageSizeType {
        return { width: 16, height: 16 };
    }

     /**
     * Medium size (20x20)
     * @static
     */
    static get MD () : ImageSizeType {
        return { width: 20, height: 20 };
    }

     /**
     * Large size (24x24)
     * @static
     */
    static get LG () : ImageSizeType {
        return { width: 24, height: 24 };
    }
    
     /**
     * Extra-large size (32x32)
     * @static
     */
    static get XL () : ImageSizeType {
        return { width: 32, height: 32 };
    }
    
     /**
     * Double-extra-large size (48x48)
     * @static
     */
    static get XXL () : ImageSizeType {
        return { width: 48, height: 48 };
    }
}
