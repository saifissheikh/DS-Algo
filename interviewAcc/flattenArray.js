// [[2], [2, 3], [[5, 1], 1]] calculate level sum

function getSum(arr, level, sum) {
    level = level || 1;
    sum = sum || 0;
	for(let i = 0; i < arr.length; i++) {
		if(Array.isArray(arr[i]))
			sum += getSum(arr[i], level + 1) * level + 1;
		else
			sum += arr[i] * level;
	}
	return sum;
}

console.log(getSum([1, 2, [3, [4]]]));