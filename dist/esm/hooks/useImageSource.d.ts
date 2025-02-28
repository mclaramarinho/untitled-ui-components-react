import type { ModuleExport } from "../types";
/**
 * Declares the properties passed to useImageSource hook
 * @interface
 */
export interface UseImageSourceType {
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
     * The root url
     * @type string | undefined
     * @example "D://Documents"
     */
    imgModule?: ModuleExport;
}
/**
 * Returns src and srcPath for image
 * @param params
 */
export declare const useImageSource: (params: UseImageSourceType) => {
    src: ModuleExport | undefined;
    srcPath: string | undefined;
    update: () => void;
};
