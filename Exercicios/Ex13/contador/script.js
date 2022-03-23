function contar(){
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let pas = document.getElementById('txtpas')
    let res = document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        // window.alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        /*
        if(p <= 0){
            window.alert('Passo inválido! Considerando passo = 1.')
            p = 1
        }
        if(i < f){ // Contagem Crescente
            for(c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
            }
        } else{ // Contagem Decrescente
            for(c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f6a9}`
    }
    */

        if(p <= 0){
            window.alert('Passo inválido! Considerando passo = 1.')
            p = 1
        }
        if(i < f){
            while(i <= f){
                res.innerHTML += `${i} \u{1f449}`
                i += p
            }
        } else{
            while(i >= f){
                res.innerHTML += `${i} \u{1f449}`
                i -= p
            }
        }
        res.innerHTML += `\u{1f6a9}`
    }
}