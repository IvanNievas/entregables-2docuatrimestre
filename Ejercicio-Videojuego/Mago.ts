
import { Personaje } from './personaje';

export class Mago extends Personaje {
    mana: number;

    constructor(nombre: string, nivel: number = 1, puntosDeVida: number = 80, mana: number = 100) {
        super(nombre, nivel, puntosDeVida);
        this.mana = mana;
    }

    atacar(): void {
        console.log(`${this.nombre} lanza un hechizo, causando daño mágico.`);
    }
}
