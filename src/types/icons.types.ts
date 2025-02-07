import ImageBaseType, { ImageSizeType } from "./image.types";

/** @description Base type for all Icon components 
 * @extends ImageBaseType
*/
export default interface IconBaseType extends ImageBaseType{
    /** Optional attribute
     * @type ImageSizeType
     */
    size?: ImageSizeType;
}


// TODO - check if needed
export class FixedIconSize {
    static get XS () : ImageSizeType {
        return { width: 12, height: 12 };
    }

    static get SM () : ImageSizeType {
        return { width: 16, height: 16 };
    }

    static get MD () : ImageSizeType {
        return { width: 20, height: 20 };
    }

    static get LG () : ImageSizeType {
        return { width: 24, height: 24 };
    }
    
    static get XL () : ImageSizeType {
        return { width: 32, height: 32 };
    }
    
    static get XXL () : ImageSizeType {
        return { width: 48, height: 48 };
    }
}
