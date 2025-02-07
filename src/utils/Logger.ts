/**
 * Logger class to log messages to the console
 * @class
 */
export default class Logger {
    /**
     * Method to log based on loglevel passed as param
     * @static
     */
    public static log(level: LogLevel, message: string){
        switch(level){
            case LogLevel.INFO:
                Logger.info(message);
                break;
            case LogLevel.WARN:
                Logger.warn(message);
                break;
            case LogLevel.ERROR:
                Logger.error(message);
                break;
        }
    }

    /**
     * Logs a medium priority message to the console
     * @static
     * @returns string
     */
    public static warn = (message: string) => console.warn('[WARN] - ' + new Date().toISOString() + message);

    /**
     * Logs a high priority message to the console
     * @static
     * @returns string
     */
    public static error = (message: string) => console.error('[ERROR] - ' + new Date().toISOString() + message);

    /**
     * Logs a low priority message to the console
     * @static
     * @returns string
     */
    public static info = (message: string) => console.log('[INFO] - ' + new Date().toISOString() + message);
}

/**
 * Log level enum
 * @enum
 */
export enum LogLevel{
    /**
     * Low priority log
     */
    INFO,
    /**
     * Medium priority log
     */
    WARN,
    /**
     * High priority log
     */
    ERROR
}