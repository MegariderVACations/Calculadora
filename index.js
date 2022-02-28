var botonUno = document.getElementById('botonUno')
var botonDos = document.getElementById('botonDos')
var botonTres = document.getElementById('botonTres')
var botonCuatro = document.getElementById('botonCuatro')
var botonCinco = document.getElementById('botonCinco')
var botonSeis = document.getElementById('botonSeis')
var botonSiete = document.getElementById('botonSiete')
var botonOcho = document.getElementById('botonOcho')
var botonNueve = document.getElementById('botonNueve')
var botonCero = document.getElementById('botonCero')
var botonSuma = document.getElementById('botonSuma')
var botonResta = document.getElementById('botonResta')
var botonDivision = document.getElementById('botonDivision')
var botonMul = document.getElementById('botonMul')
var botonRetro = document.getElementById('botonRetro')
var actual = document.getElementById('actual')
var resultado = document.getElementById('resultado')
var Beliminar = document.getElementById('botonEliminar')
var operaciones = document.getElementById('operaciones')

botonUno.addEventListener('click', clickUno)
botonDos.addEventListener('click', clickDos)
botonTres.addEventListener('click', clickTres)
botonCuatro.addEventListener('click', clickCuatro)
botonCinco.addEventListener('click', clickCinco)
botonSeis.addEventListener('click', clickSeis)
botonSiete.addEventListener('click', clickSiete)
botonOcho.addEventListener('click', clickOcho)
botonNueve.addEventListener('click', clickNueve)
botonCero.addEventListener('click', clickCero)
botonSuma.addEventListener('click', clickSuma)
botonResta.addEventListener('click', clickResta)
Beliminar.addEventListener('click', FEliminar)
botonDivision.addEventListener('click', clickDivision)
botonMul.addEventListener('click', clickMul)
botonRetro.addEventListener('click', clickRetro)


function clickUno(){
    if(actual.innerHTML == 0){
        actual.innerHTML = '1'
    }else{
        actual.innerHTML += '1'
    }
}
function clickDos(){
    if(actual.innerHTML == '0'){
        actual.innerHTML = '2'
    }else{
        actual.innerHTML += '2'
    }
}
function clickTres(){
    if(actual.innerHTML == '0'){
        actual.innerHTML = '3'
    }else{
        actual.innerHTML += '3'
    }
}
function clickCuatro(){
    if(actual.innerHTML == '0'){
        actual.innerHTML = '4'
    }else{
        actual.innerHTML += '4'
    }
}
function clickCinco(){
    if(actual.innerHTML == '0'){
        actual.innerHTML = '5'
    }else{
        actual.innerHTML += '5'
    }
}
function clickSeis(){
    if(actual.innerHTML == '0'){
        actual.innerHTML = '6'
    }else{
        actual.innerHTML += '6'
    }
}
function clickSiete(){
    if(actual.innerHTML == '0'){
        actual.innerHTML = '7'
    }else{
        actual.innerHTML += '7'
    }
}
function clickOcho(){
    if(actual.innerHTML == '0'){
        actual.innerHTML = '8'
    }else{
        actual.innerHTML += '8'
    }
}
function clickNueve(){
    if(actual.innerHTML == '0'){
        actual.innerHTML = '9'
    }else{
        actual.innerHTML += '9'
    }
    
}
function clickCero(){
    if(actual.innerHTML == '0'){
        actual.innerHTML = '0'
    }else{
        actual.innerHTML += '0'
    }
}

function clickSuma(){
    let elemento = {}
    let operacion = 0
    let valorActual = parseInt(actual.innerHTML)
    let valoResultado = parseInt(resultado.innerHTML)
    operacion = valorActual + valoResultado
    elemento = document.createElement('li')
    elemento.innerHTML = "" + valoResultado + " + " + valorActual + " = " + operacion
    operaciones.appendChild(elemento)
    resultado.innerHTML = operacion
    actual.innerHTML = '0'
    
}
function clickDivision(){
    
    let operacion = 0
    let valorActual = parseInt(actual.innerHTML)
    let valoResultado = parseInt(resultado.innerHTML)
    
    if(valorActual != 0){
        operacion = valoResultado / valorActual
        elemento = document.createElement('li')
        elemento.innerHTML = "" + valoResultado + " / " + valorActual + " = " + operacion
        operaciones.appendChild(elemento)
    }else{
        resultado.innerHTML = 'Error'
    }
    resultado.innerHTML = operacion
    actual.innerHTML = '0'
    
}

function clickMul(){
    
    let operacion = 0
    let valorActual = parseInt(actual.innerHTML)
    let valoResultado = parseInt(resultado.innerHTML)
    operacion = valorActual * valoResultado
    elemento = document.createElement('li')
    elemento.innerHTML = "" + valoResultado + " x " + valorActual + " = " + operacion
    operaciones.appendChild(elemento)
    operacion = valorActual * valoResultado
    resultado.innerHTML = operacion
    actual.innerHTML = '0'
}
function clickResta(){
    
    let operacion = 0
    let valorActual = parseInt(actual.innerHTML)
    let valoResultado = parseInt(resultado.innerHTML)
    operacion = valoResultado - valorActual
    elemento = document.createElement('li')
    elemento.innerHTML = "" + valoResultado + " - " + valorActual + " = " + operacion
    operaciones.appendChild(elemento)
    resultado.innerHTML = operacion
    actual.innerHTML = '0'
    
}
function clickRetro(){ 
    actual.innerHTML = actual.innerHTML.slice(0,actual.innerHTML.length - 1) 
    if(actual.innerHTML.length == 0){
        actual.innerHTML = '0'
    }
}
function FEliminar(){
    resultado.innerHTML = '0'
    actual.innerHTML = '0'
}