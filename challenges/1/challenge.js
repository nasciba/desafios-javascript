/*
 * Somar os argumentos
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que some
 * todos os argumentos providos.
 *
 */

const sumArguments = (arr) => {
    let numbers = arr.filter(item => typeof item === "number").reduce((acc, item) => acc + item, 0);
    let strings = arr.filter(item => typeof item === "string" ).join("")
     if(numbers && strings) {
         return String(numbers) + strings;
     }
     else if(numbers) {
         return numbers
     }
     else {
         return strings
     }
}
    
    



module.exports = sumArguments

