export default class Logger {
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
    private static warn = (message: string) => console.warn('[WARN] - ' + new Date().toISOString() + message);

    private static error = (message: string) => console.error('[ERROR] - ' + new Date().toISOString() + message);

    private static info = (message: string) => console.log('[INFO] - ' + new Date().toISOString() + message);
}

export enum LogLevel{
    INFO,
    WARN,
    ERROR
}