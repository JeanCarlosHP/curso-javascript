var btnAdicionar = document.getElementById('btn-add')
btnAdicionar.addEventListener('click', adicionar)

var btnFinalizar = document.getElementById('btn-finalizar')
btnFinalizar.addEventListener('click', finalizar)

var valores = []

function adicionar() {
    let inputNumero = document.getElementById('input-num')
    let valor = inputNumero.value

    if (valor.length == 0 || Number(valor) < 1 || Number(valor) > 100) {
        alert('Valor inválido!')
        inputNumero.value = ''

    } else if (valores.indexOf(valor) != -1) {
        alert('Não é possível adicionar valores duplicados!')
        inputNumero.value = ''

    } else {
        document.getElementById('resultado').innerHTML = ''

        valores.push(valor)

        let select = document.getElementById('select')
        var option = document.createElement('option')
        option.innerHTML = `Valor ${valor} Adicionado.`
        select.appendChild(option)

        inputNumero.value = ''
    }
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')

    } else {
        let result = document.getElementById('resultado')

        let total = valores.length
        let maior_valor = Math.max.apply(null, valores)
        let menor_valor = Math.min.apply(null, valores)
        let soma = 0

        for (i in valores) {
            soma += Number(valores[i])
        }

        let media = soma / total

        result.innerHTML = `<p>Ao todo, temos ${total} números cadastrados.</p>`
        result.innerHTML += `<p>O maior valor informado foi ${maior_valor}.</p>`
        result.innerHTML += `<p>O menor valor informado foi ${menor_valor}.</p>`
        result.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        result.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}