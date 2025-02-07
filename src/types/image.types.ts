import { ModuleExport } from "storybook/internal/types";

/**
 * Base type for any image-containing component
 */
export default interface ImageBaseType{
    /**
     * [REQUIRED] parameter to set image alt attribute
     * @type string
     */
    altText: string;

    /**
     * [OPTIONAL] parameter to set image alt attribute
     * @type boolean | undefined
     */
    ariaHidden?: boolean;

    /**
     * [OPTIONAL] parameter that indicates the image path url
     * @type string | undefined
     */
    imgPath?: string;

    /**
     * [OPTIONAL] parameter to set image src attribute
     * @type ModuleExport | undefined
     */
    img?: ModuleExport;
}

/**
 * Image size object
 * @property width
 * @property height
 */
export type ImageSizeType = {
    /**
     * @type number
     */
    width: number;
    
    /**
     * @type number
     */
    height: number;
}
