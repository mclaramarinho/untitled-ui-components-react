import { ModuleExport } from "../types";
/**
 * Declares the properties passed to useImageProperties hook
 * @interface
 */
interface useImagePropertiesType {
    /**
     * The root url
     * @type string | undefined
     * @example "D://Documents"
     */
    assetBaseUrl?: string;
    /**
     * When assetBaseUrl is undefined, this will be the full path of the image
     *
     * When assetBaseUrl is defined, assetFileName will be concatenated to it
     *
     * @type string
     * @example "D://Documents/MyFile.jpeg" OR "MyFile.jpeg"
     */
    assetFileName: string;
    /**
     * @type number | undefined
     */
    width?: number;
    /**
     * @type number | undefined
     */
    height?: number;
}
/**
 * Return type for useImageProperties hook
 * @interface
 */
export interface useImagePropertiesReturnType {
    width: number | undefined;
    height: number | undefined;
    src: ModuleExport | undefined;
    srcPath: string | undefined;
}
/**
 * Sets width, height, src and src path for images
 * @param params
 * @returns useImagePropertiesReturnType
 */
export declare const useImageProperties: (params: useImagePropertiesType) => useImagePropertiesReturnType;
export {};
