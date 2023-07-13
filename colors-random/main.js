// elementos DOM
const boton = document.getElementById('boton-color');
const botonCopiar = document.getElementById('boton-copiar');
const hexadecimal = document.getElementById('color');
const fondo = document.querySelector('.fondo')

// funcion 1
function generarCodigoHexadecimal(){
    let digitos = '0123456789ABCDEF';
    let codigoHex = '#';

    for(let i = 0; i < 6; i++){
        let indiceAleatorio = Math.floor(Math.random() * digitos.length);
        codigoHex += digitos[indiceAleatorio];
    }
    return codigoHex;
}
// funcion 2
function aplicarColorHex(){
    let colorAleatorio = generarCodigoHexadecimal();
    fondo.style.background = colorAleatorio; // document.body.style.backgroundColor
    hexadecimal.textContent = colorAleatorio;    
}
// crear el evento
boton.addEventListener('click', aplicarColorHex);

function copiarCodigo() {
    let codigo =  hexadecimal.innerText;
    
    // creo un elemento de entrada de texto oculto
    let input = document.createElement('input');
    input.style.opacity = '0';
    document.body.appendChild(input);
    
    // paso el valor del contenido al input oculto
    input.value = codigo;
    
    // selecciono el contenido del input oculto
    input.select();
    
    // Copiar el contenido seleccionado al portapapeles
    document.execCommand('copy');
    
    // Eliminar el input oculto
    document.body.removeChild(input);

    setTimeout(function(){
        botonCopiar.innerText = 'Copiado!'
    }, 100);

    setTimeout(function(){
        botonCopiar.innerText = 'Copiar'
    }, 2000);
  }
  
    
botonCopiar.addEventListener('click', copiarCodigo)




// otra forma de hacerlo:
// function cambioColor(){

//     let colorRandom = Math.round(Math.random()*10);
//     switch (colorRandom) {
//         case 1:
//             colorRandom = '#FF6347';
//             hexadecimal.textContent = '#FF6347'
//         break;
//         case 2:
//             colorRandom = '#00FFFF';
//             hexadecimal.textContent = '#00FFFF';
//         break;
//         case 3:
//             colorRandom = '#800080';
//             hexadecimal.textContent = '#800080';
//         break;
//         case 4:
//             colorRandom = '#FFFF00';
//             hexadecimal.textContent = '#FFFF00';
//         break;
//         case 5:
//             colorRandom = '#008000';
//             hexadecimal.textContent = '#008000';
//         break;
//         case 6:
//             colorRandom = '#FF00FF';
//             hexadecimal.textContent = '#FF00FF';
//         break;
//         case 7:
//             colorRandom = '#0000FF';
//             hexadecimal.textContent = '#0000FF';
//         break;
//         case 8:
//             colorRandom = '#FFA500';
//             hexadecimal.textContent = '#FFA500';
//         break;
//         case 9:
//             colorRandom = '#FF69B4';
//             hexadecimal.textContent = '#FF69B4';
//         break;
//         default:
//             colorRandom = '#800000'
//             hexadecimal.textContent = '#800000'
//         break;
//     }
//     fondo.style.background = colorRandom;
//     console.log(colorRandom)
// }
// boton.addEventListener('click', cambioColor);
