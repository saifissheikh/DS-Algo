function isPalindrome(num) {
    let str = num.toString();
    let i = 0, j = str.length - 1;

    while(i <= j) {
        if(str[i] !== str[j]) return false;
        i++;
        j--;
    }
    return true;
}

function otherWay(num) {
    if(num === 0) return true;

    if(num < 0 || num % 10 === 0) return false;

    let rev_num = 0;

    while(num > rev_num) {
        let pop = num % 10;
        num = Math.floor(num / 10);

        rev_num = (rev_num * 10) + pop;
    }

    if(num === rev_num || num === Math.floor(rev_num/10)) return true;
    else return false;
}

console.log(otherWay(123321));