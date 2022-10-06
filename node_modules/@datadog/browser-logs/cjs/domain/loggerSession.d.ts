import { Configuration } from '@datadog/browser-core';
export declare const LOGGER_SESSION_KEY = "logs";
export interface LoggerSession {
    getId: () => string | undefined;
    isTracked: () => boolean;
}
export declare enum LoggerTrackingType {
    NOT_TRACKED = "0",
    TRACKED = "1"
}
export declare function startLoggerSession(configuration: Configuration, areCookieAuthorized: boolean): LoggerSession;
