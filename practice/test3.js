function cipher(str, k) {
    str = str.split('');
    let alpha = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    alpha = alpha.split('');
    for(let i = 0; i < str.length; i++) {
        if(alpha.indexOf(str[i]) - k < 0) {
            str[i] = ''
        }
    }
}

function harvest(profits, k) {
    let maxProfit = 0;
    let n = profits.length;
    let gap = Math.floor(n/k);
    for(let i = 0; i < profits.length; i++) {
        let temp = 0;
        for(let j = 0; j < profits.length; j++) {
            if(j != gap && j != i) {
                temp += profits[j];
            }
        }
        if(temp > maxProfit)
            maxProfit = temp;
    }
    return maxProfit;
}

console.log(harvest([1, 5, 1, 3, 7, -3], 2));