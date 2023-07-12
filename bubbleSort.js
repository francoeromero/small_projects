let mi_lista = [ 3, 5, 7, 1, 4, 2, 9, 8, 6];

function ordenar(){

    let revisar = true;

    while(revisar){
        revisar = false;
        for(let i = 0; i < mi_lista.length; i++){
            let izq = mi_lista[i];
            let der = mi_lista[i+1];
            if(izq > der){
                revisar = true;
                mi_lista[i] = der;
                mi_lista[i+1] = izq;
            }
        }
    }
    return mi_lista;
}

console.log(ordenar())


let lista = [1, 5, 4, 7, 8 , 0, 10]

function bubbleSort(lista){
    for(let i = 0; i < lista.length; i++){
        for(let a = 0; a < lista.length - 1 - i; a++){
            if(lista[a] > lista[a+1]){
                const temp = lista[a];
                lista[a] = lista[a+1];
                lista[a+1] = temp;
            }
        }
    }
    return lista;
}

console.log(bubbleSort(lista))