import { Auto } from './auto';

export class Moto extends Auto {
    constructor(marca: string, modelo: string, año: number) {
        super(marca, modelo, año);
    }
}
