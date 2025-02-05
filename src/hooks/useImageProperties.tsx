import { useEffect, useState } from "react";
import { useImageSource } from "./useImageSource";

interface useImagePropertiesType {
    assetBaseUrl: string;
    assetPath: string;
    width?: number;
    height?: number;
}

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