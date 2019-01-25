"use strict";
var Logger = /** @class */ (function () {
    function Logger(level) {
        var _this = this;
        this.Level = {
            Info: 1,
            Warning: 2,
            Error: 3
        };
        this.selectedLevel = this.Level.Info;
        this.setLevel = function (level) {
            _this.selectedLevel = level;
        };
        this.shouldLog = function (level) {
            return level >= _this.selectedLevel;
        };
        this.info = function () {
            var data = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                data[_i] = arguments[_i];
            }
            if (_this.shouldLog(_this.Level.Info)) {
                console.info.apply(console, data);
            }
        };
        this.error = function () {
            var data = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                data[_i] = arguments[_i];
            }
            if (_this.shouldLog(_this.Level.Error)) {
                console.error.apply(console, data);
            }
        };
        this.warn = function () {
            var data = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                data[_i] = arguments[_i];
            }
            if (_this.shouldLog(_this.Level.Warning)) {
                console.warn.apply(console, data);
            }
        };
        this.selectedLevel = level ? level : this.selectedLevel;
    }
    return Logger;
}());
var logger = new Logger();
logger.info('hello world', {}); // console.info called with 'hello world' and {}
logger.error('error!', new Error('msg')); // console.error called with 'error!', and new Error('msg')
logger.setLevel(logger.Level.Warning); // only warning messages and higher should log
logger.warn('danger!'); // console.warn called with 'danger!'
logger.error('high danger!'); // console.error called with 'high danger!'
logger.info('everything is okay'); // nothing should be invoked here since log level is Warning
