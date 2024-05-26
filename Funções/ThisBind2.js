function pessoa (){
    this.idade = 0

const self = this
setInterval(function(){
       self.idade++
        console.log(this.idade) //Dispara uma função a partir do invervalo selecionado
     }/*.bind(this)*/, 1000)
}

new pessoa