//Estratégia para gerar valor padrão 
function soma (a,b,c){
   a = a || 1
   b = b || 1
   c = c || 1
}
console.log(soma(), soma(2), soma(1,2,3) , soma(0, 0 , 0))

//estrategia 2, 3 , 4

function soma2(a, b , c){
    a = a !== undefined ? a: 1
    b = 1 in arguments ? b: 1
    c = isNaN(c) ? 1 : c
}
console.log(soma2(), soma2(3),soma2(1,2,3))
 // valor padrão es2015
 function soma3(a = 1, b =1, c = 1){
    return a + b + c 
 }
  console.log(soma3(0))