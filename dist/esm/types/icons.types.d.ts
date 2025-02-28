import { ImageSizeType } from "./image.types";
/** @description Base type for all Icon components
*/
export interface IconBaseType {
    /**
     * [OPTIONAL] If undefined, the icon will have its regular size
     *
     * @type ImageSizeType
     */
    size?: ImageSizeType;
    /**
     * [OPTIONAL] parameter to set image ariaHidden attribute
     * @type boolean | undefined
     */
    ariaHidden?: boolean;
    /**
     * [REQUIRED] parameter to set image alt attribute
     * @type string
     */
    altText: string;
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
