function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') // O mesmo que criar a tag img no HTML.
        img.setAttribute('id', 'foto') // O mesmo que colocar um id = 'foto' na tag img do HTML.

        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', '../imagens-editadas/crianca-m-400px.png') /* Coloca o atributo src na tag img, endereçando a imagem. */
            } else if(idade < 25){
                // Jovem
                img.setAttribute('src', '../imagens-editadas/jovem-m-400px.png')
            } else if(idade < 50){
                // Adulto
                img.setAttribute('src', '../imagens-editadas/adulto-m-400px.png')
            } else if(idade < 60){
                // Quase idoso
                img.setAttribute('src', '../imagens-editadas/idoso-legal-400px.png')
            } else if(idade < 80){
                // Idoso
                img.setAttribute('src', '../imagens-editadas/idoso-niver-400px.png')
            } else{
                // Muito idoso
                img.setAttribute('src', '../imagens-editadas/idoso-demais-400px.png')
            }
        } else if(fsex[1].checked){
            gênero= 'Mulher'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', '../imagens-editadas/crianca-f-400px.png')
            } else if(idade < 25){
                // Jovem
                img.setAttribute('src', '../imagens-editadas/jovem-f-400px.png')
            } else if(idade < 50){
                // Adulta
                img.setAttribute('src', '../imagens-editadas/adulta-f-400px.png')
            } else if(idade < 60){
                // Quase idosa
                img.setAttribute('src', '../imagens-editadas/idosa-ruiva-400px.png')
            } else if(idade < 70){
                // Idosa
                img.setAttribute('src', '../imagens-editadas/idosa-taca-400px.png')
            } else{
                // Muito idosa
                img.setAttribute('src', '../imagens-editadas/idosa-lingua-400px.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}