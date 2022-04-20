function zeroMatrix(matrix) {
    let zeroRows = [];
    let zeroCols = [];

    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            if(matrix[row][col] === 0) {
                zeroRows[row] = true;
                zeroCols[col] = true;
            }
        }
    }

    for(let row = 0; row < zeroRows.length; row++) {
        if(zeroRows[row]) {
            nulifyRow(matrix, row);
        }
    }

    for(let col = 0; col < zeroCols.length; col++) {
        if(zeroCols[col]) {
            nulifyCol(matrix, col);
        }
    }
    return matrix;
}

function nulifyRow(matrix, row) {
    for(let j = 0; j < matrix[0].length; j++) {
        matrix[row][j] = 0;
    }
}

function nulifyCol(matrix, col) {
    for(let j = 0; j < matrix.length; j++) {
        matrix[j][col] = 0;
    }
}

let arr = [[1, 2, 0, 5], [3, 4, 5, 0], [6, 1, 2, 1], [1, 3, 5, 1]];
console.log(zeroMatrix(arr));