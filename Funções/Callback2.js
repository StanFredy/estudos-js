const notas = [ 7.7, 8.0, 2.3,7.1 , 9.5, 5.6 ]

//sem callback

let notasBaixas1 =[]

for(let i in notas){
    if(notas[i]< 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback
notasBaixas2 = notas.filter(function(nota){
    return nota <7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota =>nota < 7)
console.log(notasBaixas3)