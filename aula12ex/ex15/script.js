function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var formAno = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')

    if (formAno.value.length == 0 || formAno.value > ano) {
        alert('ERRO! Verifique os dados e tente novamente.')
    } else {
        var formSexo = document.getElementsByName('radiosexo')
        var idade = ano - Number(formAno.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (formSexo[0].checked) {
            genero = 'Homem'

            if (idade < 10) {
                img.setAttribute('src', 'img/crianca-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adulto-m.png')
            } else {
                img.setAttribute('src', 'img/idoso-m.png')
            }

        } else {
            genero = 'Mulher'

            if (idade < 10) {
                img.setAttribute('src', 'img/crianca-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adulta-f.png')
            } else {
                img.setAttribute('src', 'img/idosa-f.png')
            }
        }

        resultado.innerHTML = `${genero} com ${idade} anos<br>`
        resultado.appendChild(img)
    }
}