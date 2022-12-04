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
    if((section1[0]-section2[0] <= 0 ) && (section1[1]- section2[1] >= 0)){
        // console.log(section1)
        // console.log(section2)
        // console.log(section1[0])
        // console.log(section2[0])
        // console.log(section1[0]<section2[0])

        return 1
    }
    if((section2[0]-section1[0] <= 0 ) && (section2[1]- section1[1] >= 0)){

        return 1
    }
    return 0
}


console.log(input)

var score = 0
for (pair of input){
    var splittedPair = splitSection(pair)
    // console.log(splittedPair)
    // console.log(sectionOverlap(splittedPair[0], splittedPair[1]))

    score += sectionOverlap(splittedPair[0], splittedPair[1])
}

console.log(score)

console.log("------------")
