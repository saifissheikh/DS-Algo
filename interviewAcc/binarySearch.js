binarySearch = (arr, item) => {
	let low = 0;
	let high = arr.length - 1;
	let mid;

	while(low <= high) {
		mid = Math.floor((low + high)/2);
		if(arr[mid] === item)
			return mid;

		else if(item > arr[mid])
			low = mid + 1;

		else
			high = mid - 1;
	}
	return -1;
}

console.log(binarySearch([2, 5, 8, 12, 17, 22, 25, 30], 5));
