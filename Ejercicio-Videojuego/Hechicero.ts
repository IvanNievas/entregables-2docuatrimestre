import { Mago } from './mago';

export class Hechicero extends Mago {
    constructor(nombre: string, nivel: number = 1, puntosDeVida: number = 80, mana: number = 150) {
        super(nombre, nivel, puntosDeVida, mana);
    }

    atacar(): void {
        console.log(`${this.nombre} conjura un poderoso hechizo, causando daño mágico devastador.`);
    }
}
