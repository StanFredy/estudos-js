let comparaCOmThis = function (param){
    console.log(this === param)
}

comparaCOmThis(global)

const obj = {}

comparaCOmThis = comparaCOmThis.bind(obj)
comparaCOmThis(global)
comparaCOmThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)


comparaComThisArrow = comparaComThisArrow.bind(obj) /* Na arrow function o this não varia mesmo forçando
                                                    o desvio com o bind, a arrow mantém a chamada na qual 
                                                    o this está associado*/

