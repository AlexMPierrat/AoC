const helper = require("../helpers/general.js")

console.log("------------")

var strategy = helper.load_input("v_2").split('\n')

console.log(strategy)

function shapeScore(round){
    return round[2].charCodeAt(0)-87
}

function decryptRound(round){
  switch (round) {
    case "A X":
      return "A Z"
    case "A Y":
      return "A X"
    case "A Z":
      return "A Y"
    case "B X":
      return "B X"
    case "B Y":
      return "B Y"
    case "B Z":
      return "B Z"
    case "C X":
      return "C Y"
    case "C Y":
      return "C Z"
    case "C Z":
      return "C X"

  } 
}  

function outcomeScore(round){
        var outcome=round[2].charCodeAt(0)-round[0].charCodeAt(0)-23
        if (outcome == 0 ) return 3;
        if (outcome == 1 || outcome == -2 ) return 6;
        return 0;
}      
var strategy2 = []
for (round of strategy){
  round =  decryptRound(round)
  strategy2.push(round)
}
var score = 0
for (round of strategy2){
     score += ( shapeScore(round) + outcomeScore(round) )
 }
console.log(score)
console.log("------------")
