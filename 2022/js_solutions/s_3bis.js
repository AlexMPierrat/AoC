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

function findBadge(rucksack1, rucksack2, rucksack3){
    for (item1 of rucksack1){
        for(item2 of rucksack2){
            for(item3 of rucksack3){
                if(item1 === item2 && item1 === item3 && item2 === item3){
                    console.log(item1)
                    return item1;
                }
            }
        }
    }
    console.log('failure')
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
// for (rucksack of input)
for (var i=0; i<input.length; i+=3){
    score += computePrio(findBadge(input[i],input[i+1], input[i+2]))
}
console.log(score)

console.log("------------")

