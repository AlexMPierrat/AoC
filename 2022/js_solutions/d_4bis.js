const helper = require("../helpers/general.js")

console.log("------------")

//var input = helper.load_input("d_4_simple").split('\n')
var input = helper.load_input("d_4").split('\n')

function splitSection(sectionsList){
    var sections = sectionsList.split(',')
    sections[0] = sections[0].split('-')
    sections[1] = sections[1].split('-')
    return sections
}

function sectionOverlap(section1, section2){
    if((section1[1]-section2[0] < 0 ) || (section2[1]-section1[0] < 0 ) ){
        return 0
    }
    return 1
}


console.log(input)

var score = 0
for (pair of input){
    var splittedPair = splitSection(pair)
    score += sectionOverlap(splittedPair[0], splittedPair[1])
}

console.log(score)

console.log("------------")
