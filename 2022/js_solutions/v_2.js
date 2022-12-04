const helper = require("../helpers/general.js")

console.log("------------")

var strategy = helper.load_input("v_2").split('\n')

console.log(strategy)

function shapeScore(round){
    return round[2].charCodeAt(0)-87
}

// function outcomeScore(round){
//     var calculus = Math.abs(round[0].charCodeAt(0)+23round[2].charCodeAt(0))
//     if(calculus > 2) calculus = 0
//     return calculus*3
// }

function outcomeScore(round){
        var outcome=round[2].charCodeAt(0)-round[0].charCodeAt(0)-23
        if (outcome == 0 ) return 3;
        if (outcome == 1 || outcome == -2 ) return 6;
        return 0;
}      
        

var score = 0
for (round of strategy){
    score += ( shapeScore(round) + outcomeScore(round) )
}

console.log(score)
console.log("------------")


