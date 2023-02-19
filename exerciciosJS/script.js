function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora sao ${hora} horas`)
    if (hora >= 0 && hora < 12){
        img.src=('manha.png')
        document.body.style.background = '#E6AAA0'
    }
    else if (hora >= 12 && hora < 18){
        img.src = ('tarde.png')
        document.body.style.background = '#BA5C2C'
    }
    else {
    img.src = ('noite.png')
    document.body.style.background = '#233151'
    }
}