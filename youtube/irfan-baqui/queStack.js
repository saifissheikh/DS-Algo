
let stack = [1, 2, 3, 4, 5];
let result;

function recurse() {
    if(stack.length === 1)
        return stack.pop();
    let currVal = stack.pop();
    result = recurse();
    stack.push(currVal);
    return result;
}

console.log(recurse());
console.log(stack);