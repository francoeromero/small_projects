// elementos DOM
        // inputs
        const rojo = document.getElementById('rojo')
        const verde = document.getElementById('verde')
        const azul = document.getElementById('azul')
        // fondo de color
        const fondo = document.body;
        // textos de los valores
        const textRojo = document.getElementById('textRojo');
        const textVerde = document.getElementById('textVerde');
        const textAzul = document.getElementById('textAzul');
        // boton
        const boton = document.getElementById('boton-copiar');

        
        function actualizarRGB(rojo, verde, azul){
            const colorRGB = `rgb(${rojo},${verde},${azul})`;
            fondo.style.background = colorRGB;
        }

        // rojo
        rojo.addEventListener('change', (e)=>{
            let valorRojo = e.target.value;
            textRojo.innerText = valorRojo;
            actualizarRGB(valorRojo, verde.value, azul.value);
        })

        // verde
        verde.addEventListener('change', (e)=>{
            let valorVerde = e.target.value;
            textVerde.innerText = valorVerde;
            actualizarRGB(rojo.value, valorVerde, azul.value);
        })

        // azul
        azul.addEventListener('change', (e) => {
            let valorAzul = e.target.value;
            textAzul.innerText = valorAzul;
            actualizarRGB(rojo.value, verde.value, valorAzul);
        })

        function copiarCodigo(){
            let codigo = `rgb( ${rojo.value}, ${verde.value}, ${azul.value})`;
            // crear input oculto
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
            // cambiar el texto luego de 1 milisegundo
            setTimeout(function(){
                boton.innerText = 'Copiado!';
            }, 100);
            // volver al texto anterior despues de 2 segundos
            setTimeout(function(){
                boton.innerText = 'Copiar';
            }, 2000)
        }
        boton.addEventListener('click', copiarCodigo)


            // boton.innerText = 'Copiado!';
        


        
        


        // function valoresRGB(){
        //     // almacenar los valores a variables
        //     let valorRojo = rojo.value;
        //     let valorVerde = verde.value;
        //     let valorAzul = azul.value;

        //     // mostrar valor en tiempo real
        //     textRojo.textContent = valorRojo;
        //     textVerde.textContent = valorVerde;
        //     textAzul.textContent = valorAzul;

        //     // devolver el estilo css con las variables
        //     return fondo.style.background = `rgb(${valorRojo}, ${valorVerde}, ${valorAzul})`;
        // }
        // addEventListener('input', valoresRGB)