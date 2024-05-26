const escola = "Cod3r"

console.log(escola.charAt(4)) //pega determinado caractere q tive armazenado naquele indice
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // informa o código na tabela ascii de determinado caractere
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('escola'.concat(escola).concat("!")) // Junta 2 strings
console.log('escola'+ escola + "!")
console.log(escola.replace(3, "e"))

console.log("Ana,maria,Pedro".split(','))