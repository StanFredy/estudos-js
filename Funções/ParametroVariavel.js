function soma (){
    let soma = 0 
    for(i in arguments){
        soma += arguments[i]
    }
    return soma 
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 3.3, " teste"))


function somaNumerosIfinitamenteV1(){
    const args = Array.from(arguments)
     let acumulador = 0

    return args.reduce((acumulador, valorAtual) => acumulador += valorAtual)
}
console.log(somaNumerosIfinitamenteV1(1,2))
