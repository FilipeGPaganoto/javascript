var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
hora = 13

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    img.src = "imagens/madrugada.jpg"
    document.body.style.background = "#E2CD9F   "
} else if (hora >= 12 && hora <= 18) {
    img.src = "imagens/dia.jpg"
    document.body.style.background = "#B9846F"
} else {
    img.src = "imagens/noite.jpg"
    document.body.style.background = "#515154"
}