var computadora=document.getElementById('computadora')
var usuario =document.querySelectorAll('.btn-usuario')
var opciones=['piedra', 'papel', 'tijera']
var ganador=document.getElementById('ganador')
var resultadoUsuario=document.getElementById('puntos-usuario')
var resultadoComputadora=document.getElementById('puntos-computadora')
var seleccionUsuario=document.getElementById('seleccion-usuario')
var puntosComputadora=1
var puntosUsuario=1
var contenedorGanador=document.getElementById('contenedor-ganador')
var closeGanador=document.getElementById('close-ganador')
var ganador=document.getElementById('ganador')
var jugarAgain=document.getElementById('jugar-again')
var lottie=document.getElementById('contenedor-lottie')
var btnReglas=document.getElementById('reglas-jugar')
var contenedorReglas=document.getElementById('contenedor-reglas')
var info=document.getElementById('info')

// document.oncontextmenu = function(){return false}

usuario.forEach(boton => {
    boton.addEventListener('click',function(){
    var computadoraResultado=opciones[Math.floor(Math.random()*3)]
    computadora.innerHTML= '<img src="/img/red-'+computadoraResultado+'.png" alt="">'
    var usuario=boton.value
    console.log('u'+usuario);
    seleccionUsuario.innerHTML ='<img src="/img/green-'+usuario+'.png" alt="">'
    seleccionUsuario.classList.remove('igual')
    computadora.classList.remove('igual')
    switch (true) {
        case (usuario===computadoraResultado):
            console.log('igual');
            seleccionUsuario.classList.add('igual')
            computadora.classList.add('igual')
            break;
        case (usuario==='piedra' && computadoraResultado==='tijera'):
            console.log('Has ganado!');
            resultadoUsuario.innerHTML= puntosUsuario++
            break;
        case (usuario==='papel' && computadoraResultado==='piedra'):
            console.log('Has ganado!');
            resultadoUsuario.innerHTML= puntosUsuario++
            break;
        case (usuario==='tijera' && computadoraResultado==='papel'):
            console.log('Has ganado!');
            resultadoUsuario.innerHTML= puntosUsuario++
            break;
        default:
            resultadoComputadora.innerHTML=puntosComputadora++
            break;
    }

    function retrasoGanadores(){
        setTimeout(ganadores, 2000)
    }

    function ganadores() {
        if(puntosComputadora===6){
            ganador.innerHTML='Perdiste esta vez, ¿quieres intentarlo de nuevo?'
            ganador.style.border='4px solid rgb(152, 64, 80)'
            ganador.style.color='rgb(152, 64, 80)'
            contenedorGanador.style.display='block'
            puntosComputadora=1
            puntosUsuario=1
            lottie.innerHTML='<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script><lottie-player src="https://lottie.host/9ac95d94-b484-4a89-a34d-22ebebfd3b63/RcGuqnJXFB.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></lottie-player>'
            contenedorGanador.style.background='linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(222, 123, 141) 71%)';
            jugarAgain.style.boxShadow='1px 6px 6px rgb(152, 64, 80)'
            
        }
        
        if(puntosUsuario===6){
            ganador.innerHTML='¡Ganaste! ¿Jugamos otra ronda?'
            ganador.style.border='4px solid rgb(206, 213, 3)'
            ganador.style.color='rgb(206, 213, 3)'
            contenedorGanador.style.display='block'
            puntosComputadora=1
            puntosUsuario=1
            lottie.innerHTML='<lottie-player src="https://lottie.host/1e47e80b-1eb5-4e24-a574-f6a1dce34a9c/MjtKzfHdNJ.json" background="transparent" speed="1" style="width: 70vw; height: 300px;" loop autoplay></lottie-player>'
            contenedorGanador.style.background='linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(242, 245, 136) 71%)';
            jugarAgain.style.boxShadow='1px 6px 6px rgb(206, 213, 3)'
        }
    }

    retrasoGanadores()




 
    

})

})

// closeGanador.addEventListener('click', function(){
//     contenedorGanador.style.display='none'
//     resultadoComputadora.innerHTML=0
//     resultadoUsuario.innerHTML= 0
// })

jugarAgain.addEventListener('click', function(){
    contenedorGanador.style.display='none'
    resultadoComputadora.innerHTML=0
    resultadoUsuario.innerHTML= 0
})

info.addEventListener('click', function(){
    contenedorReglas.style.display='block'
})

btnReglas.addEventListener('click', function(){
    contenedorReglas.style.display='none'
})




