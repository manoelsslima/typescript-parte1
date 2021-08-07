export class Negociacao {

    //constructor(public readonly data: Date, public readonly quantidade: number, public readonly valor: number) {}

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
*/
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number) {}

    get data(): Date {
        // programação defensiva. Evita o data.setDate(x) dos objetos Date
        // comportamento similar ao clone
        const data = new Date(this._data.getTime());
        return this.data;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }
}