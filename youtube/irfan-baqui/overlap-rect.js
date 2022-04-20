function overlap(r1t, r1b, r2t, r2b) {
	let ydist = distance(r1b.y, r2b.y, r1t.y, r2t.y);
	if(ydist <= 0) return false;
	let xdist = distance(r1b.x, r2b.x, r1t.x, r2t.x);
	if(xdist <= 0) return false;
	return xdist * ydist;
}

function distance(r1bxy, r2bxy, r1txy, r2txy) {
	return (Math.min(r1txy, r2txy) - Math.max(r1bxy, r2bxy));
}

console.log((overlap({x: 2, y: 1}, {x: 5, y:5}, {x: 3, y: 2}, {x: 5, y: 7})));
