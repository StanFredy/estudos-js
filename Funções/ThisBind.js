const pessoa = {
    saudacao: 'Bom dia!',
     falar(){
        console.log(this.saudacao)
     }
}
pessoa.falar()
const falar = pessoa.falar

falar() // conflito em paradigmas: funcional e OO

const falardePessoa = pessoa.falar.bind(pessoa) //o bind amarra um objeto pra ele ser o dono daquela função(execução)
//this varia de acordo com a chamada de cada função
falardePessoa()
