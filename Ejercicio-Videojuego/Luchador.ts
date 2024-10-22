import { Personaje } from './personaje';

export class Luchador extends Personaje {
    fuerza: number;

    constructor(nombre: string, nivel: number = 1, puntosDeVida: number = 120, fuerza: number = 15) {
        super(nombre, nivel, puntosDeVida);
        this.fuerza = fuerza;
    }

    atacar(): void {
        console.log(`${this.nombre} ataca con su espada, causando ${this.fuerza * 2} de daño.`);
    }
}
