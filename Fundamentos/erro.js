function tratarErroElançar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUppercase() + '!!!') //bloco q pode informar um erro

    } catch(e){
        tratarErroElançar(e) //Pode tratar e relançar um erro informando o tipo de erro
    }finally{
        console.log('final') //sempre vai ser executado, apresentando erro ou não
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)