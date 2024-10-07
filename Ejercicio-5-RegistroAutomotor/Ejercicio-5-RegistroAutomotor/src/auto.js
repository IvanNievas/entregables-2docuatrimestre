"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(_marca, _modelo, _año) {
        this._marca = _marca;
        this._modelo = _modelo;
        this._año = _año;
    }
    Object.defineProperty(Auto.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "a\u00F1o", {
        get: function () {
            return this._año;
        },
        enumerable: false,
        configurable: true
    });
    return Auto;
}());
exports.Auto = Auto;
