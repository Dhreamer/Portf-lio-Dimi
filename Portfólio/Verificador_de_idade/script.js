function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'nenehomem.png')
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                res.appendChild(img)
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovemhomem.png')
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                res.appendChild(img)
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adultohomem.png')
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                res.appendChild(img)
            } else if (idade < 149){
                //IDOSO
                img.setAttribute('src', 'idosohomem.png')
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                res.appendChild(img)
            }else {
                //MOZÃO
                img.setAttribute('src', 'mozao.png')
                res.innerHTML = 'Te amo muito meu amoooooooor :3'
                res.appendChild(img)
            }
            

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'nenemulher.png')
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                res.appendChild(img)
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovemmulher.png')
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                res.appendChild(img)
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adultamulher.png')
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                res.appendChild(img)
            } else {
                //IDOSO
                img.setAttribute('src', 'idosamulher.png')
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                res.appendChild(img)
            }
        }
        
        img.style.padding = '8px'
        res.style.textAlign = 'center'
            
    }

}