import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';

export class RegistroAutomotor {
    private vehiculos: (Auto | Moto | Camion)[] = [];

    public agregarVehiculo(vehiculo: Auto | Moto | Camion): void {
        this.vehiculos.push(vehiculo);
    }

    public obtenerVehiculos(): (Auto | Moto | Camion)[] {
        return this.vehiculos;
    }

    public modificarVehiculo(indice: number, vehiculo: Auto | Moto | Camion): void {
        if (indice >= 0 && indice < this.vehiculos.length) {
            this.vehiculos[indice] = vehiculo;
        } else {
            throw new Error('Índice fuera de rango');
        }
    }

    public darDeBaja(indice: number): void {
        if (indice >= 0 && indice < this.vehiculos.length) {
            this.vehiculos.splice(indice, 1);
        } else {
            throw new Error('Índice fuera de rango');
        }
    }
}
