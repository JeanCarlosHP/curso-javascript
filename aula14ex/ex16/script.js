var btnContar = document.getElementById('btn-contar')
btnContar.addEventListener('click', contar)

function contar() {
    var inputInicio = document.getElementById('input-inicio')
    var inputFim = document.getElementById('input-fim')
    var inputPasso = document.getElementById('input-passo')
    var res = document.getElementById('resultado')

    if (inputInicio.value.length == 0 || inputFim.value.length == 0 || inputPasso.value.length == 0) {
        res.innerHTML = '<p>Impossível Contar</p>'

    } else {
        var inicio = Number(inputInicio.value)
        var fim = Number(inputFim.value)
        var passo = Number(inputPasso.value)

        res.innerHTML = '<p>Contando...</p>'

        for (var c = inicio; c < fim; c += passo) {
            res.innerHTML += `   ${c}    &#x1F449`
        }

        res.innerHTML += `    &#x1F3C1`
    }
}
