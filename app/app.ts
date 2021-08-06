import { Negociacao } from "./models/negociacao";

const negociacao = new Negociacao(new Date());
console.log(negociacao);
negociacao.quantidade = 10000;
console.log(negociacao);