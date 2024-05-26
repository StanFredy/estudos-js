let valor // não inicializada
console.log(valor)


valor = null //ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 4.6
console.log(produto)

//delete produto.preco  *Para tirar o atributod de um objeto

produto.preco = null //sem preço *se quiser tira um valor explicitamente usar o null
