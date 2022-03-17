var agora = new Date()
var diaSem = agora.getDay()
/*
0 = Domingo
1 = Segunda 
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/
// console.log(diaSem)

switch (diaSem){
    case 0:
        console.log('Domingo')
        break /* Caso não coloque o break, o switch vai rodar todos os cases até encontrar um break ou default. Logo, é necessário colocar break em cada um dos cases. */
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia Inválido!')
        break // Esse break é o unico opcional do comando switch.
}
/* Note que o switch serve para valores exatos. Caso seja necessário analisar intervalos, ou outras condições, deve-se usar outro comando, como o if/else. */
/* Estrutura do Switch:
Switch (Expressão){
    case valor 1:
        comando
        break
    case valor 2:
        comando
        break
    case valor 3:
        comando
        break
    .   .
    .   .
    .   .
    case valor n:
        comando
        break
    default:
        comando
        break
}
*/