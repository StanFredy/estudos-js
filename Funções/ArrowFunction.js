let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a   // A arrow fuction é uma função anônima
}

dobro = a => 2 * a // return implícito
console.log (dobro(Math.PI))

let ola  =  function(){
    return 'Olá'
}
ola = () => 'olá'
ola = _ => 'olá' // possui parâmetro e na chamada não é preciso declarar
