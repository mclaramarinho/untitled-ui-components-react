/**
 * Logger class to log messages to the console
 * @class
 */
export default class Logger {
    /**
     * Method to log based on loglevel passed as param
     * @static
     */
    static log(level: LogLevel, message: string): void;
    /**
     * Logs a medium priority message to the console
     * @static
     * @returns string
     */
    static warn: (message: string) => void;
    /**
     * Logs a high priority message to the console
     * @static
     * @returns string
     */
    static error: (message: string) => void;
    /**
     * Logs a low priority message to the console
     * @static
     * @returns string
     */
    static info: (message: string) => void;
}
/**
 * Log level enum
 * @enum
 */
export declare enum LogLevel {
    /**
     * Low priority log
     */
    INFO = 0,
    /**
     * Medium priority log
     */
    WARN = 1,
    /**
     * High priority log
     */
    ERROR = 2
}
