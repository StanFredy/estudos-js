function transforma_real(decimal){
   
    valorReal = `R$ ${decimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorReal)
}
transforma_real(0.1 + 0.4)

