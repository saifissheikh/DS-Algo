function quickSort(arr, left, right){
    let partitionIndex;
 
 
   if(left < right){
     partitionIndex = partition(arr, left, right);
     
    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
   }
   return arr;
 }

function partition(arr, left, right) {
    let pivot = arr[right];
    let pi = left;
    for(let i = left; i < right; i++) {
        if(arr[i] < pivot) {
            swap(arr, i, pi);
            pi++;
        }
    }
    swap(arr, pi, right);
    return pi;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr1 = [9, 5, 2, 1, 8, 3, 4];
quickSort(arr1 , 0, arr1.length - 1);

console.log(arr1);