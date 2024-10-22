import { Luchador } from './luchador';

export class Guerrero extends Luchador {
    constructor(nombre: string, nivel: number = 1, puntosDeVida: number = 150, fuerza: number = 20) {
        super(nombre, nivel, puntosDeVida, fuerza);
    }

    atacar(): void {
        console.log(`${this.nombre} lanza un ataque feroz, causando ${this.fuerza * 3} de daño.`);
    }
}
