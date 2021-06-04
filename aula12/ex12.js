var date = new Date()
var horas = date.getHours()
var minutos = date.getMinutes()

console.log(`Hora atual: ${horas}:${minutos}`)

if (horas < 6) {
    console.log('Boa madrugada')
} else if (horas < 12) {
    console.log('Bom dia')
} else if (horas < 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}
