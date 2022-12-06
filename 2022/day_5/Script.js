const { connect } = require("http2")
const helper = require("../helpers/general.js")

var cratesSimple = helper.load_input('','l_5_1_simple.txt').split('\n')
var crates =  helper.load_input('','l_5_1.txt').split('\n')
var movesSimple = helper.load_input('','l_5_2_simple.txt').split('\n')
var moves = helper.load_input('','l_5_2.txt').split('\n')
      
// function threePiles(crates){
//     var finalCrates = []
//     var pile1 = []
//     var pile2 = []
//     var pile3 = []
//     for(i=crates.length-1;i>-1;i--){
//         if(crates[i][1] != ' ')
//         pile1.push(crates[i][1])
//     }
//     for(i=crates.length-1;i>-1;i--){
//         if(crates[i][5] != ' ')
//         pile2.push(crates[i][5])
//     }
//     for(i=crates.length-1;i>-1;i--){
//         if(crates[i][9] != ' ')
//         pile3.push(crates[i][9])
//     }
//     finalCrates.push(pile1)
//     finalCrates.push(pile2)
//     finalCrates.push(pile3)
//     return finalCrates;
// }

function Piler(crates, stacks){
    var finalCrates = []
    var pile = []
    for(j=0;j<stacks;j++){
        var z = 1+(4*j)
        for(i=crates.length-1;i>-1;i--){
            if(crates[i][z] != ' '){
                pile.push(crates[i][z]);
            }
        }
        //console.log(pile)
        finalCrates.push(pile)
        pile = []
    }
    return finalCrates;
}

function processInstruction(instruction){
    var move = instruction.split(' ')
    move[0]=move[1]
    move[1]=move[3]
    move[2]=move[5]
    return move;
}

function executeMove(crates, instruction){
    var number = parseInt(instruction[0])
    var from = parseInt(instruction[1])
    var to = parseInt(instruction[2])
    for(i=0;i<number;i++){
        crates[to-1].push(crates[from-1].pop())
    }
    return crates
}

function answerReader(finalCrates){
    var answer = []
    for(i=0;i<finalCrates.length;i++){
        answer.push(finalCrates[i].pop())
    }
    console.log(answer)

}
console.log("------FILES LOADED------")
//console.log(crates)

console.log(moves)

// cratesSimple = Piler(cratesSimple, 3)
// console.log(cratesSimple)

// for (instruction of movesSimple){
//     console.log(processInstruction(instruction))
//     cratesSimple = executeMove(cratesSimple, processInstruction(instruction))
// }
// console.log(cratesSimple)

crates = Piler(crates, 9)
for (instruction of moves){
    console.log(processInstruction(instruction))
    crates = executeMove(crates, processInstruction(instruction))
}
// console.log(crates)
answerReader(crates)
// crates = Piler(crates, 9)
// console.log(crates)
