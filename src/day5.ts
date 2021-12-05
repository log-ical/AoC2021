export{}
const fs = require('fs');

fs.readFile('src/inputs/day5.txt', 'utf8' , (err, data) => {
    const dataArray = data.split('\n').map(line => line.split(/[, \n\r]+/).filter(x => x != '->' && x != ''));
    let grid = new Array(1000).fill(0).map(() => new Array(1000).fill(0));
    let grid2 = new Array(1000).fill(0).map(() => new Array(1000).fill(0));
    for(let i = 0; i < dataArray.length; i++){
        let x = parseInt(dataArray[0][0])
        let y = parseInt(dataArray[0][1])
        let x2 = parseInt(dataArray[0][2])
        let y2 = parseInt(dataArray[0][3])
        dataArray.splice(0,1)
        i--
        if(x===x2)
            for(let yi = Math.min(y,y2); yi <= Math.max(y,y2); yi++){
                grid[yi][x]++;
                grid2[yi][x]++;
            }
        else if(y===y2)
            for(let xi = Math.min(x,x2); xi <= Math.max(x,x2); xi++){
                grid[y][xi]++;
                grid2[y][xi]++;
            }
        else if ((x > x2 && y > y2) || (x < x2 && y < y2))
            for (let diagX = Math.min(x, x2), diagY = Math.min(y, y2); diagX <= Math.max(x, x2); diagX++, diagY++) 
                grid2[diagY][diagX]++;
        else 
            for (let diagX = Math.min(x, x2), diagY = Math.max(y, y2); diagX <= Math.max(x, x2); diagX++, diagY--) 
                grid2[diagY][diagX]++;
    }
    let count = 0;
    let count2 = 0;
    for(let i = 0; i < grid.length; i++)
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] > 1)
                count++;
            if(grid2[i][j] > 1)
                count2++
        }
    console.log(count);
    console.log(count2);
})
