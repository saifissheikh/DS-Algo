function longestSub(arr) {
	let long = 0;
	let set = {};

	for(let num of arr)
		set[num] = true;
	for(let num in set) {
		if(!set[num - 1]) {
            let count = 1;
            let cur = num + 1;
			while(set[cur + 1]) {
				cur++;
				count++;
			}
            long = Math.max(count, long);
		}
	}

	return long;
}

// function longestSubs(arr) {
//     let set = {};
//     arr.forEach(function(val) {
//       set[val] = true
//     });
//     let longest = 0;
  
//     Object.keys(set).forEach(function(val) {
//       if (!set[val-1]) {
//         let curr = val;
//         subsequenceLength = 1;
  
//         while(set[curr+1]) {
//           subsequenceLength++;
//           curr++;
//         }
  
//         longest = Math.max(subsequenceLength, longest)
//       }
//     });
//     return longest;
//   }

console.log(longestSub([2,1,6,9,4,3]));