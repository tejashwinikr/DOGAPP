import { performDraw, startSessionManagement } from '@datadog/browser-core';
export var LOGGER_SESSION_KEY = 'logs';
export var LoggerTrackingType;
(function (LoggerTrackingType) {
    LoggerTrackingType["NOT_TRACKED"] = "0";
    LoggerTrackingType["TRACKED"] = "1";
})(LoggerTrackingType || (LoggerTrackingType = {}));
export function startLoggerSession(configuration, areCookieAuthorized) {
    if (!areCookieAuthorized) {
        var isTracked_1 = computeTrackingType(configuration) === LoggerTrackingType.TRACKED;
        return {
            getId: function () { return undefined; },
            isTracked: function () { return isTracked_1; },
        };
    }
    var session = startSessionManagement(configuration.cookieOptions, LOGGER_SESSION_KEY, function (rawTrackingType) {
        return computeSessionState(configuration, rawTrackingType);
    });
    return {
        getId: session.getId,
        isTracked: function () { return session.getTrackingType() === LoggerTrackingType.TRACKED; },
    };
}
function computeTrackingType(configuration) {
    if (!performDraw(configuration.sampleRate)) {
        return LoggerTrackingType.NOT_TRACKED;
    }
    return LoggerTrackingType.TRACKED;
}
function computeSessionState(configuration, rawSessionType) {
    var trackingType = hasValidLoggerSession(rawSessionType) ? rawSessionType : computeTrackingType(configuration);
    return {
        trackingType: trackingType,
        isTracked: trackingType === LoggerTrackingType.TRACKED,
    };
}
function hasValidLoggerSession(trackingType) {
    return trackingType === LoggerTrackingType.NOT_TRACKED || trackingType === LoggerTrackingType.TRACKED;
}
//# sourceMappingURL=loggerSession.js.map