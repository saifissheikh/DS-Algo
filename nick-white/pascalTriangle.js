function pascalTriangle(numRows) {
    let triangle = [];
    if(numRows === 0) return triangle;

    let firstRow = [];
    firstRow.push(1);
    triangle.push(firstRow);
    let prevRow;
    let row;
    for(let i = 1; i < numRows; i++) {
        prevRow = triangle[i - 1];
        row = [1];

        for(let j = 1; j < i; j++) {
            row.push(prevRow[j - 1] + prevRow[j]);
        }

        row.push(1);
        triangle.push(row);
    }
    return triangle;
}

console.log(pascalTriangle(6));