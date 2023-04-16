function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO!] Verifique os dados e tente novamente')
    } else {
        var genero = document.getElementsByName('radgen')
        var idade = ano - Number(fano.value)
        var gen = ''
        if (genero[0].checked) {
            gen = 'Homem'
        } else {
            gen = 'Mulher'
        }
        res.innerHTML = `Detectamos um(a) ${gen} com ${idade} anos!`
    }
}