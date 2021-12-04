export{}
const fs = require('fs');

fs.readFile('src/inputs/day4.txt', 'utf8' , (err, data) => {
    let calledNumbers;
    data.split("\n").forEach((line, index) => {
        if(index == 0)
            calledNumbers = line.split(/[,\r]+/);
    })
    const boardRaw = data.split(/[\n\s]+/).filter((p) => p.trim())
    boardRaw.shift()
    let boardlist = []
    while(boardRaw.length > 0){
        let board = Array(5).fill(0).map(x => Array(5).fill(0))
        for(let y = 0; y < 5; y++) {
            for(let x = 0; x < 5; x++) {
                board[y][x] = boardRaw[y*5+x]
            }
        }
        boardRaw.splice(0, 25);
        boardlist.push(board)
    }
    let calledNumber;
    try{
        calledNumbers.forEach((number) => {
            for(let i = 0; i < boardlist.length; i++) {
                if(boardlist[i].some((row) => row.includes(number))){
                    boardlist[i].some((row, ri) => row.some((cell, ci) => {
                        if(cell == number){
                            boardlist[i][ri][ci] = '';
                            //I don't know exactly what I was thinking when I was writing this part... but it works...
                            if(row.every((cell) => cell == '')) {
                                calledNumber = number;
                                throw (boardlist[i])
                            }
                            if(boardlist[i].every((row) => row[ci] == '')){
                                calledNumber = number;
                                throw (boardlist[i])
                            }
                        }   
                    }))
                }       
            }

        })
    } catch (e) {
        let nonEmpty = 0;
        e.forEach(row => {
            row.forEach(cell => {
                if(cell != '')
                    nonEmpty += parseInt(cell);
            })
        })
        console.log(nonEmpty*calledNumber);
    }
    //pt2
    let lastWinner;
    let lastNumber;
    calledNumbers.forEach((number) => {
        for(let i = 0; i < boardlist.length; i++) {
            if(boardlist[i].some((row) => row.includes(number))){
                boardlist[i].some((row, ri) => row.some((cell, ci) => {
                    if(cell == number){
                        boardlist[i][ri][ci] = '';
                        try{
                            if(row.every((cell) => cell == '')) {
                                lastWinner = boardlist[i]
                                lastNumber = number
                                boardlist.splice(i,1)
                                i--
                            }
                            if(boardlist[i].every((row) => row[ci] == '')){
                                lastWinner = boardlist[i]
                                lastNumber = number
                                boardlist.splice(i,1)
                                i--
                            } 
                        } catch (e){
                            let nonEmpty = 0;
                            lastWinner.forEach(row => {
                                row.forEach(cell => {
                                    if(cell != '')
                                        nonEmpty += parseInt(cell);
                                })
                            })
                            console.log(nonEmpty*lastNumber);
                        }
                    }   
                }))
            }       
        }

    })

})

