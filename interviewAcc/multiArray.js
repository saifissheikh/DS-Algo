function sort(arr) {
    return arr.sort((a, b) => a - b);
}

function findIntersection(arr1, arr2, arr3) {
    arr1 = sort(arr1)// pre-populating example arrays for you to test
    arr2 = sort(arr2);
    arr3 = sort(arr3);
    let result = [];
    let x = 0, y = 0, z = 0;
  
    while (!isOOB()) {
      if (arr1[x] == arr2[y] && arr2[y] == arr3[z]) {
        result.push(arr1[x]);
        x++;
        y++;
        z++;
      } else if (arr1[x] < arr2[y]) {
        x++;
      } else if (arr2[y] < arr3[z]) {
        y++;
      } else z++;
    }
  
    return result;
  
    function isOOB() {
      if (x >= arr1.length || y >= arr2.length || z >= arr3.length) {
        return true;
      }
      return false;
    }
  }

console.log(findIntersection([3, 4, 6, 1, 2], [4, 1, 3, 5, 6], [3, 6, 1]));