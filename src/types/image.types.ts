import { ModuleExport } from "storybook/internal/types";

export default interface ImageBaseType{
    altText: string;
    ariaHidden?: boolean;
    imgPath?: string;
    img?: ModuleExport;
}
export type ImageSizeType = {
    width: number;
    height: number;
}
