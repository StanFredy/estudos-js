const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradoro: 'Rua ABC',
        numero: 1000 }
}    
     const {nome, idade} = pessoa
    console.log(nome, idade)

    const {nome: n, idade: i} = pessoa
    console.log(n, i)
   
    const {sobrenome, malHumor = true} = pessoa
    console.log(sobrenome,malHumor)

    const {endereco:{logradoro, numero, cep }} = pessoa
