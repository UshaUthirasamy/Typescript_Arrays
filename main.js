"use strict";
exports.__esModule = true;
var DotnetPiper = /** @class */ (function () {
    function DotnetPiper(name, age) {
        this.name = name;
        this.age = age;
        this.NameValue = null;
        this.BloggerName = null;
        this.BloggerName = name;
    }
    Object.defineProperty(DotnetPiper.prototype, "GetName", {
        get: function () {
            return "Blogger name " + this.BloggerName + " coming from Class constructor :";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DotnetPiper.prototype, "SetName", {
        set: function (value) {
            this.NameValue = value;
        },
        enumerable: false,
        configurable: true
    });
    return DotnetPiper;
}());
var obj = new DotnetPiper("Sachin Kalia", 31);
console.log(obj.GetName);
