var idade = 25
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}
/* Aqui temos uma estrutura condicional aninhada, ou seja, um condicional dentro de outro.
Note que o else if (){} poderia ser um else {if(){}}. */