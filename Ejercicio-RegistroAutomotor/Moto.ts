export class Moto {
    private _marca: string;
    private _modelo: string;
    private _año: number;

    constructor(marca: string, modelo: string, año: number) {
        this._marca = marca;
        this._modelo = modelo;
        this._año = año;
    }

    public get marca(): string {
        return this._marca;
    }

    public set marca(value: string) {
        this._marca = value;
    }

    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(value: string) {
        this._modelo = value;
    }

    public get anio(): number {
        return this._año;
    }

    public set anio(value: number) {
        this._año = value;
    }
}
