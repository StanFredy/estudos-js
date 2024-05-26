const fabricantes = ["Mercedes" , "Audi", "BMW"]

function imprimir (nome, indice) {
    console.log (`${indice + 1}. ${nome}`)

}
fabricantes.forEach(imprimir) /*Calback: Eh passar uma função e ela será usada quando determinado
                                 evento acontecer, nesse código o evento é um looping*/
 fabricantes.forEach(fabricantes => console.log(fabricantes))                                