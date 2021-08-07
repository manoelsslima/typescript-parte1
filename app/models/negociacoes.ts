import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    //lista(): Array<Negociacao> {
    // ReadonlyArray garante a imutabilidade
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;

        // spread operator (...) para retornar cópia e não a lista original
        //return [...this.negociacoes];
    }

}