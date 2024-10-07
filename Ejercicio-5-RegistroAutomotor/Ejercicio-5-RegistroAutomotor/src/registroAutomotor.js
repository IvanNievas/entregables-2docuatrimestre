"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.vehiculos = [];
    }
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
    };
    RegistroAutomotor.prototype.obtenerVehiculos = function () {
        return this.vehiculos;
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (indice, vehiculo) {
        if (indice >= 0 && indice < this.vehiculos.length) {
            this.vehiculos[indice] = vehiculo;
        }
        else {
            throw new Error('Índice fuera de rango');
        }
    };
    RegistroAutomotor.prototype.darDeBaja = function (indice) {
        if (indice >= 0 && indice < this.vehiculos.length) {
            this.vehiculos.splice(indice, 1);
        }
        else {
            throw new Error('Índice fuera de rango');
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
