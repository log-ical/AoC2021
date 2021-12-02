export{}
const fs = require('fs');

fs.readFile('src/inputs/day2.txt', 'utf8' , (err, data) => {
    let xPos = 0;
    let zPos = 0;

    let aim = 0;
    let xPos2 = 0;
    let zPos2 = 0;
    data.split("\n").forEach(line => {
        let words = line.split(" ")
        if(words[0] == "forward")
        {
            xPos += parseInt(words[1]);
            xPos2 += parseInt(words[1]);
            zPos2 += parseInt(words[1])*aim;
        }
        else if (words[0] == "up")
        {
            zPos -= parseInt(words[1]);
            aim -= parseInt(words[1]);
        }
        else if (words[0] == "down")
        {
            zPos += parseInt(words[1]);
            aim += parseInt(words[1]);
        }
    });
    let res = xPos*zPos;
    console.log(res);

    let res2 = xPos2*zPos2;
    console.log(res2);
})