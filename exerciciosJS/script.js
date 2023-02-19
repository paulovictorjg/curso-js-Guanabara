function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = 12
    msg.innerHTML = (`Agora sao ${hora} horas`)
    if (hora >= 0 && hora < 12){
        Image.src = 'imgfotomanha.svg'
    }else if (hora >= 12 && hora < 18){
        Image.src = 'fototarde.svg'
    }else(hora >= 18 && hora < 23)
        Image.src = 'fotonoite.svg'
}