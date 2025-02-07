import { useEffect, useState } from "react";
import { ModuleExport } from "storybook/internal/types";
import { ImageNotFoundException } from "../exceptions/images";
import Logger from "../utils/Logger";

export interface UseImageSourceType {
    assetBaseUrl?: string;
    assetPath: string;
    imgModule?: ModuleExport;
}

export const useImageSource = (params: UseImageSourceType) => {
    const [src, setSrc] = useState<ModuleExport>();
    const [srcPath, setSrcPath] = useState<string>();

    useEffect(() => {
        if(!params.imgModule){
            setSrcPath((params.assetBaseUrl ?? "") + params.assetPath);
        }
    }, [params.assetPath]);

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

    return { src, srcPath };
}