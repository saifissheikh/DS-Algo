class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val =  val;
    }
}

function crateMinBST1(arr) {
	return crateMinBST(arr, 0, arr.length - 1);
}

function crateMinBST(arr, start, end) {
    if(end < start)
        return null;

    let mid = Math.floor((start + end) / 2);
    let n = new Node(arr[mid]);
    n.left = crateMinBST(arr, start, mid - 1);
    n.right = crateMinBST(arr, mid + 1, end);
    return n;
}

console.log(crateMinBST1([2, 3, 6, 9, 10, 12, 15]));
