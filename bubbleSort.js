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