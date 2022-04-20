function groupAnagrams(arr) {
	let sortedArr = arr.map((word) => {
		return word.split('').sort().join('');
	});
	return sortedArr.sort();
}

console.log(groupAnagrams(['abcc','xyz','rea', 'bcca',]));
