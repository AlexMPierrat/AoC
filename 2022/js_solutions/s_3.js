const helper = require("../helpers/general.js")

console.log("------------")

var input = helper.load_input("s_3").split('\n')

console.log(input)

function splitSacks(rucksack){
    var sacks = []
    for (var i=0; i<rucksack.length; i+=rucksack.length/2)
        sacks.push(rucksack.substring (i, i+rucksack.length/2))
    return sacks
}

function findCommon(rucksack){
    var sack1 = rucksack[0]
    var sack2 = rucksack[1]
    for (item1 of sack1){
        for(item2 of sack2){
            if(item1 === item2)
                return item1
        }
    }
    console.log('failure')
}
function computePrio(item){
    var code = item.charCodeAt(0)
    if(code > 96)
        return code-96
    return code-38
}
var score = 0
for (rucksack of input)
   score += computePrio(findCommon(splitSacks(rucksack)))
console.log(score)

console.log("------------")

console.log("a".charCodeAt(0))
console.log("must equal 1")
console.log("z".charCodeAt(0))
console.log("must equal 26")
console.log("A".charCodeAt(0))
console.log("must equal 27")
console.log("Z".charCodeAt(0))
console.log("must equal 52")
console.log("------------")
