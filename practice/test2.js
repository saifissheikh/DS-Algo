function consSum(num) {
    let sum = 0;
    let count = 0;
    for(let i = 1; i < num; i++) {
        // console.log(sum);
        if(i + sum == num) {
            count++;
            sum = i;
        } 
        else if(i + sum > num) {
            sum = i;
        } else {
            sum += i;
        }
    }
    return count;
}

function priceCheck(items, correctPrice, soldItems, soldPrice) {
    let itemMap = {};
    let errors = 0;
    for(let i = 0; i < items.length; i++) {
        itemMap[items[i]] = correctPrice[i]; 
    }
    for(let i = 0; i < soldItems.length; i++) {
        if(itemMap[soldItems[i]] != soldPrice[i]) {
            errors++;
        }
    }
    return errors;
}

function limit(lo, hi, k) {
    let results = [];
    for(let i = lo; i <= hi; i++) {
        for(let j = i + 1; j <= hi; j++) {
            if(i ^ j <= k)
                results.push(i ^ j);
        }
    }
    return Math.max(...results);
}

// function uniCareer(arrival, duration) {
//     let time = 0;
//     let hosting = false;
//     let count = 0;
//     for(let i = 0; i < arrival.length; i++) {
//         if(arrival[i] + duration[i] > arrival[i + 1]) {
//             continue;
//         }
//         if(arrival[i] >= time) {
//             hosting = false;
//         }
//         if(!hosting) {
//             time = time + duration[i];
//             hosting = true;
//             count++;
//         }
//     }
//     return count;
// }

function uniCareer(arrival, duration) {
        let drop = 0;
        let NumOfEvents = arrival.length;
        let intervals = [];

        for (let i = 0; i < NumOfEvents; i++) {
            let temp = [];
            temp.push(arrival[i])
            temp.push(arrival[i] + duration[i]);
            intervals.push(temp); 
        }

        intervals.sort((a, b) => a[1] - b[1]);
        // the finish time of first event;
        let curTime = intervals[0][1];

        for (let i = 1; i < NumOfEvents; i++) {
            let toSchedual = intervals[i];
            if (toSchedual[0] < curTime)
                drop++;
            else {
                curTime = toSchedual[1];
            }
        }
        return NumOfEvents - drop;
}


console.log(uniCareer([1, 3, 3, 5, 7], [10, 2, 2, 2, 1]));