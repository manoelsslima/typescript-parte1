export class Negociacao {

    constructor(public readonly data: Date, public readonly quantidade: number, public readonly valor: number) {}

    // outra forma de modelar a classe. O TS infere os atributos da classe
    //constructor(private _data: Date, private _quantidade: number, private _valor: number) {}
    /*
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    
    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }
    */
    get volume(): number {
        return this.quantidade * this.valor;
    }
}