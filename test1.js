const v = [[1,4], [3,4], [3, 10]];

const xMap = new Map()
const yMap = new Map()
// key : 1, value : count
for(let item of v){
    const xCount =  xMap.get(item[0]) ? xMap.get(item[0]) + 1 : 1
    const yCount =  yMap.get(item[1]) ? yMap.get(item[1]) + 1 : 1
    xMap.set(item[0], xCount)
    yMap.set(item[1], yCount)
}


let xRes = 0
let yRes= 0

for(let item of xMap){
    const key = item[0]
    const value = item[1]
    if(value === 1) xRes = key
}

for(let item of yMap){
    const key = item[0]
    const value = item[1]
    console.log(value)
    if(value === 1) yRes = key
}

var answer = [
    xRes, yRes
];

console.log(answer)