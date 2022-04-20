rotateImage = (arr) => reverse(transpose(arr));

transpose = (matrix) => {
    for(let row of matrix) {
        for(let col of row) {
            let temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp;
        }
    }
    return matrix;
}

reverse = (matrix) => matrix.map(row => row.reverse());