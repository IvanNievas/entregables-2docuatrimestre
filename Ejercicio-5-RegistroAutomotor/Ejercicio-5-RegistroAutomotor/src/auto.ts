export class Auto {
    constructor(private _marca: string, private _modelo: string, private _año: number) {}

    get marca(): string {
        return this._marca;
    }

    get modelo(): string {
        return this._modelo;
    }

    get año(): number {
        return this._año;
    }
}
