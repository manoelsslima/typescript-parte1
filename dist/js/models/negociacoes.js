export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //lista(): Array<Negociacao> {
    // ReadonlyArray garante a imutabilidade
    lista() {
        return this.negociacoes;
        // spread operator (...) para retornar cópia e não a lista original
        //return [...this.negociacoes];
    }
}
