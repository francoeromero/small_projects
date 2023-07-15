const lista = [3, 5, 7, 1, 4, 2, 9, 8, 6];
const listaOrdenada = insertionSort(lista);
console.log(listaOrdenada); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

function insertionSort(arr){

    for(let i = 1; i < arr.length; i++){
        const key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
