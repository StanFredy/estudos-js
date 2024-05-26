function criarProduto(nome,preco){
    return{
        nome,
        preco,
        desconto:0.1
    }
}
console.log(criarProduto('lata','2','2.5'))