function parimpar(n){
    if (n % 2 == 0){
        return 'Par!'
    } else{
        return 'Impar!'
    }
}

console.log(parimpar(223))

/* 
let res = parimpar(223)
console.log(res)
*/

/* As funções possuem parâmetros, ação, retorno e chamada. No caso, o n é o parâmetro, o if é a ação, par ou ímpar é o retorno e parimp(223) é a chamada. Lembre que é uma boa prática que cada função criada seja chamada pelo menos uma vez. */

function soma (n1 = 0, n2 = 0){
    return n1 + n2
}

console.log(soma(7,2)) // Aqui ocorre a soma de 7 com 2.
console.log(soma(7)) /* Aqui deveria ocorrer a soma de 7 com nada, que seria 7. Porém o nada é dado como indefinido e então o programa retorna NaN. Para resolver isso, basta atribuir o valor padrão 0 a n1 e a n2, pois caso não seja dado um valor, já existe um valor padrão. */

// Também podemos atribuir uma função à uma variável:
let v = function (x){ 
    return x * 2
}

console.log(v(5))