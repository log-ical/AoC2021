const fs = require('fs')

fs.readFile('src/inputs/day1.txt', 'utf8' , (err, data) => {
    //part 1
    data = data.split('\n');
    data = data.map( (x) => parseInt(x));
    let inc = 0;
    for (let i = 0; i < data.length; i++) {
        if(data[i] > data[i-1]) 
        {
            inc++;
        }
    }
    console.log(inc);
    //part 2
    let inc2 = 0;
    for(let i = 0; i < data.length; i++) {
        if(data[i+1] + data[i+2] + data[i+3] > data[i] + data[i+1] + data[i+2]) 
        {
            inc2++;
        }
    }
    console.log(inc2);
})