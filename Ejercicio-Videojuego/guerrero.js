"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerrero = void 0;
var luchador_1 = require("./luchador");
var Guerrero = /** @class */ (function (_super) {
    __extends(Guerrero, _super);
    function Guerrero(nombre, nivel, puntosDeVida, fuerza) {
        if (nivel === void 0) { nivel = 1; }
        if (puntosDeVida === void 0) { puntosDeVida = 150; }
        if (fuerza === void 0) { fuerza = 20; }
        return _super.call(this, nombre, nivel, puntosDeVida, fuerza) || this;
    }
    Guerrero.prototype.atacar = function () {
        console.log("".concat(this.nombre, " lanza un ataque feroz, causando ").concat(this.fuerza * 3, " de da\u00F1o."));
    };
    return Guerrero;
}(luchador_1.Luchador));
exports.Guerrero = Guerrero;
