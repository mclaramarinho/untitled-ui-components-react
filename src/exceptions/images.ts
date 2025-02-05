import { ComponentException, ComponentExceptionParams } from "./components";

export class ImageNotFoundException extends ComponentException {
    imgPath?: string;
    static EXCEPTION = "Image not found";

    constructor(component: string, imgPath?: string){
        super({ component: component, exception: ImageNotFoundException.EXCEPTION, data: imgPath } as ComponentExceptionParams);
        this.imgPath = imgPath;
    }
}

export class ImagePathOrSourceMustBeSetException extends ComponentException {
    static EXCEPTION = "Property img or imgPath must be set";

    constructor(component: string){
        super({ component: component, exception: ImagePathOrSourceMustBeSetException.EXCEPTION } as ComponentExceptionParams);
    }
}