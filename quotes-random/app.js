// elementos DOM
const cita = document.getElementById('cita');
const autor = document.getElementById('autor');
const boton = document.getElementById('boton-cambiar-cita');

function generarEnteroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita(){
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    cita.innerText = `"${citas[indiceAleatorio].texto}"`;
    autor.innerText = citas[indiceAleatorio].autor;
}

cambiarCita()
boton.addEventListener('click', cambiarCita)
