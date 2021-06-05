function par_impar(numero) {
    if (numero % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

console.log(`Número: ${par_impar(6)}`)
