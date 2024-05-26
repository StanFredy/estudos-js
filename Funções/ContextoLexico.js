const valor = "Global"

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = "local"
    minhaFuncao()  // Quando uma função é declada em JS,ela carrega a informação do contexto q ela foi escrita
}