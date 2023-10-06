function contar() {
    let inicio = document.getElementById('numinicio')
    let fim = document.getElementById('numfim')
    let passo = document.getElementById('numpasso')
    let res = document.getElementById('res')

    res.innerHTML = ""

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível Contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido. Considerando: Passo = 1.')
            p = 1
        }

        if (i > f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            // Contagem decrescente
            for (let c = i; c <= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}