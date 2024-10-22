import { Personaje } from './personaje';

export class Arquero extends Personaje {
    destreza: number;

    constructor(nombre: string, nivel: number = 1, puntosDeVida: number = 90, destreza: number = 12) {
        super(nombre, nivel, puntosDeVida);
        this.destreza = destreza;
    }

    atacar(): void {
        console.log(`${this.nombre} dispara una flecha, causando ${this.destreza * 1.5} de daño.`);
    }
}
