function reverse(arr) {
	for(let i = 0; i < Math.floor(arr.length/2); i++) {
		swap(arr, i, arr.length - i - 1);
	}

	function swap(arr, i, j) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
}

console.log(reverse([1, 2, 3,7, 4, 5, 6]));
