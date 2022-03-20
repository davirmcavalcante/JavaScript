//alert('Olá!')
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = '../imagens/fotomanha-400x284.png'
        document.body.style.background = '#7ec1f7'
    } else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = '../imagens/fototarde-400x284.png'
        document.body.style.background = '#ff8a22'
    } else{
        //BOA NOITE!
        img.src = '../imagens/fotonoite-400x284.png'
        document.body.style.background = '#012537'
    }
}