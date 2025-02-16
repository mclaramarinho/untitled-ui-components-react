import { ComponentException } from "./components";
/**
 * Exception thrown when an image is not found.
 * Extends `ComponentException` to provide additional details about the missing image.
 */
export declare class ImageNotFoundException extends ComponentException {
    /**
     * The path of the image that was not found.
     */
    imgPath?: string;
    private static EXCEPTION;
    /**
     * Creates an instance of `ImageNotFoundException`.
     *
     * @param {string} component - The name of the component where the exception occurred.
     * @param {string} [imgPath] - The path of the missing image (if available).
     */
    constructor(component: string, imgPath?: string);
}
/**
 * Exception thrown when neither `img` nor `imgPath` properties are set.
 * Extends `ComponentException` to indicate improper usage of image-related properties.
 */
export declare class ImagePathOrSourceMustBeSetException extends ComponentException {
    static EXCEPTION: string;
    /**
     * Creates an instance of `ImagePathOrSourceMustBeSetException`.
     *
     * @param {string} component - The name of the component where the exception occurred.
     */
    constructor(component: string);
}
