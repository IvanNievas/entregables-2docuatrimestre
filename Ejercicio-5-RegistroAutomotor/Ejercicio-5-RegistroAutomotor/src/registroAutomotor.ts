import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';

export class RegistroAutomotor {
    private vehiculos: Auto[] = [];

    public agregarVehiculo(vehiculo: Auto): void {
        this.vehiculos.push(vehiculo);
    }

    public obtenerVehiculos(): Auto[] {
        return this.vehiculos;
    }

    public modificarVehiculo(indice: number, vehiculo: Auto): void {
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
