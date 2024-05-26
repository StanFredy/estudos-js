var numero = 1 //var tem escopo global e de função apenas
{
    let numero = 3 //let tem escopo global,de bloco e de função
    console.log('dentro=',numero)
}
console.log('fora=',numero)