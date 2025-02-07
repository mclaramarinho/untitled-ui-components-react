import { useEffect, useState } from "react";
import { useImageSource } from "./useImageSource";

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
     * When assetBaseUrl is defined, assetPath will be concatenated to it
     * 
     * @type string
     * @example "D://Documents/MyFile.jpeg" OR "MyFile.jpeg"
     */
    assetPath: string;

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
 * Sets width, height, src and src path for images
 * @param params
 */
export const useImageProperties = (params:useImagePropertiesType) => {
    const [width, setWidth] = useState<number|undefined>();
    const [height, setHeight] = useState<number|undefined>();

    const { src, srcPath } = useImageSource({ ...params });

    useEffect(() => {
        setWidth(params.width);
        setHeight(params.height);
    }, [params.width, params.height])

    return { width, height, src, srcPath };
}