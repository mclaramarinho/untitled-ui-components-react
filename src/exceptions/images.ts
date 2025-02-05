import { ComponentException, ComponentExceptionParams } from "./components";

/**
 * Exception thrown when an image is not found.
 * Extends `ComponentException` to provide additional details about the missing image.
 */
export class ImageNotFoundException extends ComponentException {
    /**
     * The path of the image that was not found.
     */
    imgPath?: string;
   
    private static EXCEPTION = "Image not found";

    /**
     * Creates an instance of `ImageNotFoundException`.
     * 
     * @param {string} component - The name of the component where the exception occurred.
     * @param {string} [imgPath] - The path of the missing image (if available).
     */
    constructor(component: string, imgPath?: string){
        super({ component: component, exception: ImageNotFoundException.EXCEPTION, data: imgPath } as ComponentExceptionParams);
        this.imgPath = imgPath;
    }
}

/**
 * Exception thrown when neither `img` nor `imgPath` properties are set.
 * Extends `ComponentException` to indicate improper usage of image-related properties.
 */
export class ImagePathOrSourceMustBeSetException extends ComponentException {
    static EXCEPTION = "Property img or imgPath must be set";


    /**
     * Creates an instance of `ImagePathOrSourceMustBeSetException`.
     * 
     * @param {string} component - The name of the component where the exception occurred.
     */
    constructor(component: string){
        super({ component: component, exception: ImagePathOrSourceMustBeSetException.EXCEPTION } as ComponentExceptionParams);
    }
}