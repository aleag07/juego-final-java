
let numeroSecreto = 0;
let contador = 0;
let listaDeNumerosSorteads = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
console.log(numeroSecreto);
function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(contador);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero secreto en ${contador} ${(contador === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor')
        } else{
            if(numeroDeUsuario < numeroSecreto){
                asignarTextoElemento('p','El numero secreto es mayor')
            }
        }
        contador++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.getElementById('valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteads);
    //Si ya sorteamos todos los numeros
    if (listaDeNumerosSorteads.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else{
        // Si el numero generado esta incluido en la lista
        if (listaDeNumerosSorteads.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaDeNumerosSorteads.push(numeroGenerado);
            return numeroGenerado;
        }
}
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    contador = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalor de numeros
    //generar numero aleatorio
    //resetear contador
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

