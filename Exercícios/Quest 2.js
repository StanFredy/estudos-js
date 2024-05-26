function triangulo(lado_1,lado_2,base){
    if(lado_1 == lado_2 && lado_2 == base ){
         console.log("Equilátero")

      }
     else
        if(lado_1 != lado_2 && base == lado_2){

            console.log("Isósceles")
        }
     else{
        console.log("Escaleno")
     }
}
triangulo(2,2,2)
triangulo(1,3,4)
triangulo(2,3,3)