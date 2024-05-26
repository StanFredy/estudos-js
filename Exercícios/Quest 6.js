/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples(CapitaInicial,taxadDeJuros,tempoAplicacao){
    calculoJuros = (CapitaInicial* taxadDeJuros * tempoAplicacao) + CapitaInicial
    valorJuros =  `O montante é R$ ${calculoJuros.toFixed(2).toString().replace(".", ",") } em juros simples`
    console.log(valorJuros)
    
}

function jurosCompostos(CapitaInicial,taxadDeJurosComposto,tempoAplicacao){
  
    calculoJurosCompostos = CapitaInicial * (1 + taxadDeJurosComposto) ** tempoAplicacao
    valorJurosCompostos = `O montante é R$ ${calculoJurosCompostos.toFixed(2).toString().replace(".", ",") } em juros compostos`
    console.log(valorJurosCompostos)
}
jurosSimples(100, 10/100,2)
jurosCompostos(100,10/100,2)
