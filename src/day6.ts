export{}
const fs = require('fs')

fs.readFile('src/inputs/day6.txt', 'utf8' , (err, data) => {
    //Thanks Eric
    const Fishies = (data, days) => {
        let dataArray = data.split(',').map(x => parseInt(x));
        let Fishes = Array(9).fill(0);
        for(let age of dataArray)
            Fishes[age]++;
        for(let day = 0; day < days; day++){
            let shift = Fishes.shift();
            Fishes[6] += shift;
            Fishes[8] = shift
        }
        return Fishes.reduce((a, b) => a + b);
    }

    console.log(Fishies(data, 80));
    console.log(Fishies(data, 256));
})



