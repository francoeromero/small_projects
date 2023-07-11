const cronometro = document.getElementById('cronometro');
const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');

let [horas, minutos, segundos] = [0, 0, 0]
let intervaloDeTiempo;
let estadoCronometro = 'pausado';

function actualizarCronometro(){
    segundos++;
    if(segundos / 60 === 1){ // 60/60 = 1 y cuando sea igual a 1 suman los minutos
        segundos = 0;
        minutos++;
        if(minutos / 60 === 1){
            minutos = 0;
            horas++;
        }
    }
    const segundosConFormato = asignarFormato(segundos);
    const minutosConFormato = asignarFormato(minutos);
    const horasConFormato = asignarFormato(horas);

    cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`
}
// hasta 10 se agregue un 0 a su lado 
function asignarFormato(unidadDeTiempo) {
    return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
}


botonInicioPausa.addEventListener('click', function(){
    if(estadoCronometro === 'pausado'){
        intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
        botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
        botonInicioPausa.classList.remove('iniciar');
        botonInicioPausa.classList.add('pausar');
        estadoCronometro = 'andando';
    }else{
        window.clearInterval(intervaloDeTiempo);
        botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
        botonInicioPausa.classList.remove('pausar');
        botonInicioPausa.classList.add('iniciar');
        estadoCronometro = 'pausado';
    }
})

botonReiniciar.addEventListener('click', function(){
    window.clearInterval(intervaloDeTiempo);
    horas = 0;
    minutos = 0;
    segundos = 0;
    // reiniciar
    cronometro.innerText = '00:00:00';
    // actualizar botones
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');
    estadoCronometro = 'pausado';
})