function checkCircle(str) {
    let path = str.split('');
    let x = 0, y = 0; 
    let dir = 0;
    let result = [];
    for(let i = 0; i < path.length; i++) {
        let move = path[i]; 
   
      if (move == 'R') 
        dir = (dir + 1)%4; 
      else if (move == 'L') 
        dir = (4 + dir - 1) % 4; 
   
      else 
      { 
         if (dir == 0) 
            y++; 
         else if (dir == 1) 
            x++; 
         else if (dir == 2) 
            y--; 
         else
            x--; 
      }
      if (x == 0 && y == 0)
        result.push('YES');
      else 
        result.push('NO');
    }
    return result;
}

console.log(checkCircle('RGG'));