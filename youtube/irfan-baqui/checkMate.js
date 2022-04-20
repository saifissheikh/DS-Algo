
function checkMate(kx, ky, qx, qy) {
    if(kx === ky || qx=== qy || Math.abs(kx - qx) === Math.abs(qx - qy))
        return true;
    return false;
}
    
console.log(checkMate(1, 3, 2, 3));