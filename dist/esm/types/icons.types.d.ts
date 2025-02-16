import { ImageBaseType, ImageSizeType } from "./image.types";
/** @description Base type for all Icon components
 * @extends ImageBaseType
*/
export interface IconBaseType extends ImageBaseType {
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
export declare class FixedIconSize {
    /**
     * Extra-small size (12x12)
     * @static
     */
    static get XS(): ImageSizeType;
    /**
    * Small size (16x16)
    * @static
    */
    static get SM(): ImageSizeType;
    /**
    * Medium size (20x20)
    * @static
    */
    static get MD(): ImageSizeType;
    /**
    * Large size (24x24)
    * @static
    */
    static get LG(): ImageSizeType;
    /**
    * Extra-large size (32x32)
    * @static
    */
    static get XL(): ImageSizeType;
    /**
    * Double-extra-large size (48x48)
    * @static
    */
    static get XXL(): ImageSizeType;
}
