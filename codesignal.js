function orderingTaxi(length) {
    // TODO: complete the function
    let taxiPos = 0;

    return function(startPos, endPos) {
        let sum = 0;
        if(startPos < 0 || startPos > length || endPos < 0 || endPos > length)
            return false;
        let extra = 0;
        if(startPos !== taxiPos) {
            extra = Math.abs(startPos - taxiPos);
            console.log(extra);
        }
        let dist = Math.abs(startPos - endPos) + extra;
        console.log(dist);
        if(dist <= 5)
            sum += dist * 100;
        else if(dist <= 10)
            sum += dist * 150;
        else
            sum += dist * 200;
        
        taxiPos = endPos;
        return sum;
    }
}

const requestOrder = orderingTaxi(20);
console.log(requestOrder(0, 3)); // the total length the driver went through to make a trip is 3, so the passenger should pay 300.
console.log(requestOrder(6, 9)); // the total length the driver went through to make a trip is 6, so the passenger should pay 900.
console.log(requestOrder(12, 0)); //