function contar() {
    let ini = window.document.getElementById("txti")
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert ('[ERROR] Faltam Dados!')
    } else {
        res.innerHTML = 'Contando: </br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            res.innerHTML = '[ERROR] Impossivel contar !'
            p = 1
        } 
        if (i < f) {
            // CONTAGEM CRESCENTE
            for(let c = i ; c <= f ; c += p){
                res.innerHTML += `${c} \u{1F642} `
            }
        } else {
            // CONTAGEM REGRESSIVA
            for(let c = i ; c >= f ; c -= p){
                res.innerHTML += `${c} \u{1F642} `
            } 
        }
       res.innerHTML += `\u{1F918}`
    }  
}