// Obs: para formatar datas temos algumas opções, como segue abaixo.

import assert from 'assert' /* importação da biblioteca assert (nativa do node.JS), para fazer testes unitários */
// para ver a data atual use: node -p 'new Date().toISOString()'
const date = new Date("2022-01-25 00:00") // node -p 'new Date("2022-01-25 00:00")'
// o valor é: 2022-01-25T03:00:00.000Z = "2022-01-25 00:00"

{  /* Opcão 1: a mais difícil e menos usada, feita com regex (um assunto de JavaScript) e usando a função ISOString() */
    const regex = /^([0-9]{4}) - (0[1-9]|1[0-2]) - (0[1-9]|1[0-9]|2[0-9]|3[0-1])/ 
    const [full, year, month, day] = regex.exec(date.toISOString())
    const actual = `${day}/${month}/${year}`
    const expected = "25/01/2022"
    assert.equal(actual, expected)
    console.log({actual})
}

const options = { // Podemos mudar a forma da data alterando-a nos valores dos objetos abaixo
    year: "numeric",
    month: "long",
    day: "numeric"
}

{  // Opção 2:
    const actual = date.toLocaleDateString("pt-br", options) // toLocaleDateString - passa o idioma que iremos trabalhar, o idioma local.
    const expected = "25 de janeiro de 2022"
    assert.equal(actual, expected)
    console.log({actual})
}

{ // Opção 3:
    const actual = date.toLocaleDateString("pt-br", {
        ...options,
        month: "numeric"
    })
    const expected = "25/01/2022"
    assert.equal(actual, expected)
    console.log({actual})
}

{ // Opção 4:
    // Vamos usar o objeto Intl (para internacionalização)
    const actual = new Intl.DateTimeFormat("pt-br").format(date)
    const expected = "25/01/2022"
    assert.equal(actual, expected)
    console.log({actual})
}

{ // Opção 5:
    // Vamos usar o objeto Intl (para internacionalização)
    const actual = new Intl.DateTimeFormat("pt-br", {
        dateStyle: "full", timeStyle: "long"
    }).format(date)
    const expected = "terça feira, 25 de janeiro de 2022 00:00:00 BRT"
    assert.equal(actual, expected)
    console.log({actual})
}