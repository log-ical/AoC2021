export{}
const fs = require('fs');

fs.readFile('src/inputs/day3.txt', 'utf8' , (err, data) => {
    let gammaRate = [];
    let epsilonRate = [];
    let columns = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    data.split("\n").forEach(line => {
        line.split("").forEach((bit, i) =>
        {
            parseInt(bit)
            if(bit == 0)
            {
                columns[i] = columns[i] + 1
            }
            if(bit == 1)
            {
                columns[i] = columns[i] - 1
            }
        })
    });
    for(let i = 0; i < columns.length; i++)
    {
        if(columns[i] > 0)
        {
            gammaRate.push(1);
            epsilonRate.push(0);
        }
        if(columns[i] < 0)
        {
            epsilonRate.push(1);
            gammaRate.push(0);
        }
    }
    console.log(parseInt(gammaRate.join(""), 2) * parseInt(epsilonRate.join(""), 2));
})

