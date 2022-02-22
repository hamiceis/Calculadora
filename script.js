function adicionar(v) {
    let res = document.getElementById('txtN').innerHTML
    document.getElementById('txtN').innerHTML = res + v
}
    
function clean() {
    document.getElementById('txtN').innerHTML = ""
}

function back () {
    let res = document.getElementById('txtN').innerHTML
    document.getElementById('txtN').innerHTML = resultado.substring(0, res.length -1)
}

function calcular () {
    let res = document.getElementById('txtN').innerHTML
    if(res) {
        document.getElementById('txtN').innerHTML = eval(res)
    }
}