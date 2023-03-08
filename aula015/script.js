function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("input#iano")
    var res = document.querySelector('div#res')


    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERROR] Digite os campos novamente!")
    } 
}