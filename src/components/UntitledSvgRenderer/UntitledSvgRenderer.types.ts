import ImageBaseType from "../../types/image.types";

/**
 * Type for UntitledSvgRenderer component
 * @interface
 * @extends ImageBaseType
 */
export default interface UntitledSvgRendererProps extends ImageBaseType {
    /**
     * [OPTIONAL] - If undefined, image size will not be altered
     */
    width?: number;
    /**
     * [OPTIONAL] - If undefined, image size will not be altered
     */
    height?: number;
}
