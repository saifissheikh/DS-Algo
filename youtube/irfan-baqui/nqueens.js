function nqueens(n) {
    let queens = [];
    if(n <= 0) return null;

    if(placeQueen(0)) return queens;
    else return null;

    function placeQueen(col) {
        if(col >= n) return true;
        let row = 0;
        while(row < n) {
            queens.push([row, col]);
            if(isSafe(row, col) && placeQueen(col + 1)) {
                return true;
            }
            queens.pop();
            row++;
        }
        return false;
    }

    function isSafe(row, col) {
        let r, c;
        for(let i = 0; i < queens.length - 1; i++) {
            r = queens[i][0];
            c = queens[i][1];
            if(r === row) return false;
            if(Math.abs(r - row) === Math.abs(c - col)) return false;
        }
        return true;
    }
}

console.log(nqueens(8));
