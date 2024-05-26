var Cadastro = function(nome,cpf,idade){
    this.cpf = ""
    this.nome = ""
    this.idade = ""

    this.Mostrar = function(){
        alert("Nome:" + this.nome)
        alert("CPF:" + this.cpf)
        alert("Idade:" + this.idade)

    }
}
var c = new Cadastro;
// foi testado no browser (olhar funcionamento do alert mais pra frente)

c.Cadastro