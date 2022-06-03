let num = [5, 8, 4]

console.log(num)
console.log(`Nosso vetor inicialmente é o ${num}`)

/* 
Veja como declarar um vetor (array):
let nomeVetor = [valor1, valor2, valor3, ..., valorn]
                   0,      1,      2,    ...,   n-1 : índices
         
Para adicionar um valor em uma nova posição podemos usar:
- num[3] = 6    e então teremos [5, 8, 4, 6].
- num.push(7) que acrescenta 7 ao final do vetor, e então teremos [5, 8, 4, 6, 7].

Para saber o comprimento, temos:
- num.length que me dirá quantos elementos o vetor tem. No caso, são 5 elementos.

Para ordenação, temos:
- num.sort() que ordena os elementos em ordem crescente, e então teremos [4, 5, 6, 7, 8]

Para procurar um valor dentro do array, temos:
- num.indexOf(n) se n estiver no vetor então retornará a posição de n, senão retornará -1.

OBS: note que o num.push, o num.sorte(), dentre outros, são métodos e, portanto, vêm com os parênteses ao final. Já o num.length no JavaScript é um atributo e não um método, diferentemente de outras linguagens, e portanto não recebe o parênteses ao final.
*/

num.sort()
num.push(1)
console.log(`Nosso vetor agora é: `)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

//console.log(`O valor 1, procurado, está na posição ${num.indexOf(1)}`)

let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor procurado está na posição ${pos}`)
}

/* 
OBS: em JavaScript, os arrays podem conter elementos de diferentes tipos - inteiros, strings, valores lógicos, etc., diferentemente de outras linguagens, pois o array no JS é heterogêneo. A limitação dos arrays aqui é que os indices são fixos, para solucionar isso, pode-se usar objetos em vez de arrays. Os objetos são declarados com chaves ao invés de colchetes. Ex: let amigo = {nome: 'José', sexo: 'M', peso: 85.4, engordar(p){}}
*/