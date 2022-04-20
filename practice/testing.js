// console.log(Date.UTC(2020,06,24));
// let temp = '2020,06,24';
// console.log(Date.UTC(temp));

let temp = "2020, 06, 24";
 let min = Date.UTC(...temp.split(', '));
 console.log(min);