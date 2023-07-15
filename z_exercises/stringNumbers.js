// hacer una funcion que ingrese un string con numeros y operadores, y devolver su resultado 

let string = '6+6+6-1';

function calculo(str){
    let acumulador = '';
    let numeros = [];
    for(let i = 0; i < str.length; i++){
        if(!isNaN(str[i])){
            acumulador += str[i];
        }
        else if(str[i] === '+'){
            numeros.push(parseInt(acumulador));
            numeros.push(str[i]);
            acumulador = '';
        }
        else if(str[i] === '-'){
            numeros.push(parseInt(acumulador));
            numeros.push(str[i]);
            acumulador = '';
        }
    }
    numeros.push(parseInt(acumulador));
    console.log(numeros) // [6, '+', 6, '+', 6, '-', 1]
    
    let resultado = numeros[0];

    for(let i = 1; i < numeros.length; i += 2){
        const operador = numeros[i];

        if(operador === '+'){
            resultado += numeros[i+1];
        }
        else if(operador === '-'){
            resultado -= numeros[i+1];
        }
    }
    return resultado;
}

console.log(calculo(string)) // 17