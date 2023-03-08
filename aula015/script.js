function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("input#iano")
    var res = document.querySelector('div#res')


    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERROR] Digite os campos novamente!")
    } else {
        var fsex = document.getElementsByName("sexo")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= )
        } else if (fsex[1].checked) {
            genero = "Mulher"
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        
    }
}