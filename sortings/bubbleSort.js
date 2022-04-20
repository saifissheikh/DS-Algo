 function sortEle(arr) {
    return arr.sort();
 }

 function bubbleSort(arr) {
    for(let i = arr.length - 1; i >= 0; i--) {
        for(let j = 0; j <= i - 1; j++) {
            if(arr[j] > arr[j+1])
                swap(arr, j, j+1);
        }
    }
    return arr;
 }

 function optimizedBubbleSort(arr) {
     let noSwaps;
    for(let i = arr.length - 1; i >= 0; i--) {
        noSwaps = true;
        for(let j = 0; j <= i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
 }

 function swap(arr, index1, index2) {
     let temp = arr[index1];
     arr[index1] = arr[index2];
     arr[index2] = temp;
 }

 console.log(bubbleSort([6, 4, 15, 10]));