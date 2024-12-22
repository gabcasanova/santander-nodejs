const numero1 = 100
const numero2 = 200
const numero3 = 100

if (numero1 > 1) {
    console.log("esse número é maior que 1")
}

if (numero1 > 200) {
    console.log("esse número é maior que 200")
} else {
    console.log("esse número é menor que 200")
}

if (numero2 < numero1) {
    console.log("numero 2 é menor que número 1")
}

if (numero2 >= numero1) {
    console.log(`${numero2} é maior ou igual que ${numero1}`)
}

if (numero1 === numero3) {
    console.log("Os números são iguais")
}

console.log(100 < 20)
console.log(true || true)    // || representa OR
console.log(true || false)

console.log("---")

console.log(true && true) // || representa AND
console.log(true && false)
console.log(false && true)