const helper = require("../helpers/general.js")

console.log("------------")

var calorie_list = helper.load_input("j_1").split('\n');
var acc = 0;
var max = 0;

for (val of calorie_list){
    val = parseInt(val)
    if (isNaN(val)){
        if(acc>max){
            max=acc;
        }
        acc=0;
    } else {
        acc += val;
        
    } 
}

console.log(max);

acc = 0
var elf_List = []

for (val of calorie_list){
    val = parseInt(val)
    if (isNaN(val)){
        elf_List.push(acc)
        acc=0;
    } else {
        acc += val;
        
    } 
}
function compareElf(a, b) {
    return b - a;
}

elf_List.sort(compareElf);
console.log(elf_List);

console.log(elf_List[0]+elf_List[1]+elf_List[2])
