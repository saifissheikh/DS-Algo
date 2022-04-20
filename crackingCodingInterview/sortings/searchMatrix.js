function search(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let left = 0;
    let right = rows * cols;
    while(left <= right) {
        let midpoint = Math.floor((left + right)/2);
        let midele = matrix[Math.floor(midpoint/cols)][midpoint%cols];
        if(midele === target) return midele;
        else if(target > midele) left = midpoint + 1;
        else right = midpoint - 1;
    }
    
    return false;
}

console.log(search([[1, 4, 5],[10, 15, 20], [21, 24, 26]], 0));