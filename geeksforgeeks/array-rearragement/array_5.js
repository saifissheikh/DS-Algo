// Rearrange array in alternating positive & negative items with O(1) extra space | Set 1

function rearrange(arr) {
    let newArr = [];
    let i = 0;
    while(arr.length) {
        if(arr[i] > 0 && newArr[newArr.length - 1] < 0) {
            newArr.push(arr[i]);
            arr.splice(i, 1);
        }  
        else if(arr[i] < 0 && newArr[newArr.length - 1] > 0) {
            newArr.push(arr[i]);
            arr.splice(i, 1);
        }
        else if(a) {

        }
    }
    return newArr;
}