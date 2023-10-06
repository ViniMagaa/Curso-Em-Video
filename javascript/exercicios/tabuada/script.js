function tabuada() {
    let num = document.getElementById('inum').value
    let res = document.getElementById('res')
    
    res.innerText = ''
    
    for(let i = 1; i <= 10; i++) {
        let mult = i * num
        res.innerHTML += `<p> ${i} x ${num} = ${mult} </p>`
    }
}