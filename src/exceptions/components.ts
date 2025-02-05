import { BaseException, BaseExceptionParams } from "./base";

/**
 * Represents an exception specific to a component in the system.
 * Extends the `BaseException` class to provide additional context about the component where the error occurred.
 */
export class ComponentException extends BaseException {
    /**
     * The name of the component where the exception occurred.
     */
    component: string;
    /**
     * Additional data related to the exception.
     * This can be any type of information useful for debugging.
     */
    data?: any;

    /**
     * Creates an instance of `ComponentException`.
     * 
     * @param {Object} params - The parameters for the exception.
     * @param {string} params.component - The name of the component where the exception occurred.
     * @param {string} params.exception - A brief description of the exception.
     * @param {string} [params.longDescription] - A detailed description of the exception.
     * @param {any} [params.data] - Additional data related to the exception.
     */
    constructor({ component, exception, longDescription, data } : ComponentExceptionParams){
        super({ message: ComponentException.buildMessage(component, exception, data), longDescription});

        this.component = component;
        this.data = data;
    }

    /**
     * Builds a formatted error message for the exception.
     * 
     * @param {string} component - The name of the component where the exception occurred.
     * @param {string} exception - A brief description of the exception.
     * @param {any} [data] - Additional data related to the exception.
     * @returns {string} The formatted error message.
     * @private
     */
    private static buildMessage(component: string, exception: string, data? : any) : string {
        const dataText = data ? ` - Data: ${data}` : "";
        return `${component} - ERROR - ${exception}${dataText}`
    }
}





/**
 * Defines the parameters required to create a `ComponentException`.
 * Extends `BaseExceptionParams` to include additional component-specific details.
 */
export interface ComponentExceptionParams extends BaseExceptionParams {
    /**
     * The name of the component where the exception occurred.
     */
    component: string;
    /**
     * A brief description of the exception.
     */
    exception: string;
    /**
     * Additional data related to the exception.
     */
    data?: any;
}