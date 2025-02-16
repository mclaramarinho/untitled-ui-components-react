import Logger, { LogLevel } from "../utils/Logger";
/**
 * Defines the parameters required to create a `BaseException`.
 */
export interface BaseExceptionParams {
    /**
     * The main error message describing the exception.
     */
    message: string;
    /**
    * An optional detailed description of the exception.
    */
    longDescription?: string;
}
/**
 * Represents a base exception class that can be extended by other exception types.
*/
export declare class BaseException extends Logger {
    /**
     * The main error message describing the exception.
     */
    message: string;
    /**
    * An optional detailed description of the exception.
    */
    longDescription?: string;
    /**
    * Creates an instance of `BaseException`.
    *
    * @param {BaseExceptionParams} params - The parameters for the exception.
    * @param {string} params.message - The main error message.
    * @param {string} [params.longDescription] - An optional detailed description.
    */
    constructor(params: BaseExceptionParams);
    /**
     * Logs message to the console.
     */
    log(level?: LogLevel): void;
}
