function contar() {
    var inicio = parseInt(document.getElementById('numinicio').value)
    var fim = parseInt(document.getElementById('numfim').value)
    var passo = parseInt(document.getElementById('numpasso').value)
    var text = document.getElementById('res')

    text.innerHTML = ""

    if (passo <= 0) {
        alert("O passo deve ser um número positivo!")
    } else if (inicio >= fim) {
        alert("O início deve ser menor que o fim!")
    } else {
        for (var i = inicio; i <= fim; i += passo) {
            text.innerHTML += i + " 👉 " 
        }
    }
}