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
            
            if (idade >= 0 && idade < 10) {

            } else if (idade < 21) {

            } else if (idade < 50) {

            } else {

            }
        } else if (fsex[1].checked) {
            genero = "Mulher"

            if (idade >= 0 && idade < 10) {

            } else if (idade < 21) {

            } else if (idade < 50) {

            } else {
                
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        
    }
}