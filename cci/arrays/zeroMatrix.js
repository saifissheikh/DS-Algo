function zeroMat(matrix) {
    let rows = [];
    let cols = [];
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix.length; j++) {
            if(matrix[i][j] == 0) {
                rows.push(i);
                cols.push(j);
            }
        }
    }

    for(let i = 0; i < rows.length; i++) {
        matrix = nullifyRow(rows[i], matrix);
    }

    for(let j = 0; j < cols.length; j++) {
        matrix = nullifyCol(cols[j], matrix);
    }
    return matrix;
}

function nullifyRow(row, matrix) {
    for(let j = 0; j < matrix.length; j++) {
        matrix[row][j] = 0;
    }
    return matrix;
}

function nullifyCol(col, matrix) {
    for(let j = 0; j < matrix.length; j++) {
        matrix[j][col] = 0;
    }
    return matrix;
}

console.log(zeroMat([[1, 0, 1, 2], [3, 4, 5, 4], [1, 3, 4, 3], [1, 3, 4, 5]]));