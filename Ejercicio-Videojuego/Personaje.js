"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, nivel, puntosDeVida) {
        if (nivel === void 0) { nivel = 1; }
        if (puntosDeVida === void 0) { puntosDeVida = 100; }
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }
    Personaje.prototype.atacar = function () {
        console.log("".concat(this.nombre, " est\u00E1 atacando."));
    };
    Personaje.prototype.defender = function () {
        console.log("".concat(this.nombre, " se est\u00E1 defendiendo."));
    };
    Personaje.prototype.toString = function () {
        return "".concat(this.nombre, " - Nivel: ").concat(this.nivel, ", Puntos de Vida: ").concat(this.puntosDeVida);
    };
    return Personaje;
}());
exports.Personaje = Personaje;
