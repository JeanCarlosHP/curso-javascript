var btnGerar = document.getElementById('btn-gerar')
btnGerar.addEventListener('click', gerar)

function gerar() {
    var numero = document.getElementById('input-numero')

    if (numero.value.length == 0) {
        alert('Por favor, digite um número!')

    } else {
        var multiplicando = Number(numero.value)
        var selectTabuada = document.getElementById('tabuada')

        selectTabuada.innerHTML = ''

        for (var i = 1; i <= 10; i++) {
            var option = document.createElement('option')
            option.innerHTML = `${multiplicando} x ${i} = ${multiplicando * i}`
            selectTabuada.appendChild(option)
        }
    }
}