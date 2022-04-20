function largestTeam(arr) {
    let p = arr.length;
    let maxTeam = [];

    for(let i = 0; i < p; i++) {
        let collab = 1;
        for(let j = 0; j < arr[0].length; j++) {
            if(arr[i][j] == 1 && i != j)
                collab++;
            for(let k = 0; k < arr[0].length; k++) {
                if(arr[k][j] == 1 && arr[i][j] == 1 &&  i != j && k != j && k != i)
                    collab++;
            }
        }
        maxTeam.push(collab);
    }
    return Math.max(...maxTeam);
}

console.log(largestTeam([[1, 1, 0, 0], [0, 1, 0, 1], [0, 0, 1, 0], [0, 1, 0, 1]]));