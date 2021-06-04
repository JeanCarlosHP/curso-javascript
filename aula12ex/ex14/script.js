function carregar() {
    var mensagem = document.getElementById('hora-msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 19
    var minuto = data.getMinutes()

    mensagem.innerHTML = `Agora são ${hora}:${minuto}`

    if (hora < 12) {
        imagem.src = 'imagens/manha.png'
        document.body.style.background = '#fdd88f'
        mensagem.style.color = '#fdd88f'

    } else if (hora <= 18) {
        imagem.src = 'imagens/tarde.png'
        document.body.style.background = '#89a2bc'
        mensagem.style.color = '#89a2bc'
        
    } else {
        imagem.src = 'imagens/noite.png'
        document.body.style.background = '#9d82b8'
        mensagem.style.color = '#9d82b8'
    }
}
