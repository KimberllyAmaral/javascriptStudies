// For in em arrays
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}
// for in em objetos
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silvia',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}