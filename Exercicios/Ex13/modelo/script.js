function contar(){
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.querySelector('div#res')
    var tot = Number(ini.value) + Number(pas.value)

    while((Number(ini.value) + Number(pas.value)) < Number(fim.value){
        res.innerHTML = (tot)
        tot += Number(pas.value)
    } 
    alert('Feito!')
}