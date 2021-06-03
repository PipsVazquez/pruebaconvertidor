const temperatura = document.querySelector('#tempInput')
const cuadro = document.querySelector('#form')

const convertir = document.querySelector('#convertir')
const reiniciar = document.querySelector('#reiniciar')
let temperaturaFarenheit
/*ºF = (ºC · 1,8) + 32 */

//console.log(temperatura)
eventos()



function eventos(){
    convertir.addEventListener('click', convertirTemperatura)
    reiniciar.addEventListener('click', reiniciarDatos)

}


function convertirTemperatura(){
    temperaturaFarenheit = ((temperatura.value*1.8)+32)

    console.log(temperaturaFarenheit != NaN)

    
    if (isNaN(temperaturaFarenheit)){
            mostrarError()
        }
    else{
        
        mostrarTemperatura(temperaturaFarenheit)
        document.getElementById("tempInput").value = ''
    }
}

function mostrarTemperatura(mensaje){
    cuerpoMensaje ='La temperatura en grados Farenheit es: '

    const cuadroTemp = document.createElement('p')
    cuadroTemp.textContent = cuerpoMensaje + mensaje + ' °F'

    cuadroTemp.classList.add('font-weight-bold', 'text-center', 'text-white','bien')

    const numeroAlertas = document.querySelectorAll('.bien')

    console.log(numeroAlertas)
    //console.log(cuadroTemp)

    cuadro.appendChild(cuadroTemp)
}

function reiniciarDatos(){
    document.getElementById("tempInput").value = ''
    window.location.reload();
}


function mostrarError(){
    const cuadroTemp = document.createElement('p')
    cuadroTemp.textContent = 'Dato incorrecto'

    cuadroTemp.classList.add('font-weight-bold', 'text-center', 'alert', 'alert-danger', 'mal')

    console.log(cuadroTemp)
    cuadro.appendChild(cuadroTemp)
}