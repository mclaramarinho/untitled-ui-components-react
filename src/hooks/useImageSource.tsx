import { useEffect, useState } from "react";
import type { ModuleExport } from "../types";
import { ImageNotFoundException } from "../exceptions/images";
import Logger from "../utils/Logger";

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
export const useImageSource = (params: UseImageSourceType) => {
    const [src, setSrc] = useState<ModuleExport>();
    const [srcPath, setSrcPath] = useState<string>();
    
    const update = () => {
        if(!params.imgModule){
            if(params.assetFileName){
                setSrcPath((params.assetBaseUrl ?? "") + params.assetFileName);
            }
        }
    };

    useEffect(() => update(), [params.assetFileName]);

    useEffect(() => {
        if(!srcPath) return;

        import(srcPath)
        .then(mod => {
            if(!mod) throw new ImageNotFoundException("UntitledSvgRenderer", srcPath);

            setSrc(mod.default)
        })
        .catch((err: any) => {
            if(err instanceof TypeError){
                const msg = (err as TypeError).message.toLowerCase();
                console.log(msg)
                if(msg.includes("failed to fetch")) 
                    throw new ImageNotFoundException("UntitledSvgRenderer", srcPath);
                
                else
                    Logger.error((err as TypeError).message)
                
            }else if(err instanceof ImageNotFoundException){
                err.log();
            }
        })
        .catch((err: any) => { 
            if(err instanceof ImageNotFoundException)
                err.log();
        })
    }, [srcPath]);



    return { src, srcPath, update };
}