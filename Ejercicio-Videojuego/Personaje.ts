export class Personaje {
    nombre: string;
    nivel: number;
    puntosDeVida: number;

    constructor(nombre: string, nivel: number = 1, puntosDeVida: number = 100) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }

    atacar(): void {
        console.log(`${this.nombre} está atacando.`);
    }

    defender(): void {
        console.log(`${this.nombre} se está defendiendo.`);
    }

    toString(): string {
        return `${this.nombre} - Nivel: ${this.nivel}, Puntos de Vida: ${this.puntosDeVida}`;
    }
}
