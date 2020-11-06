const arr = [4,1,3,2]
var answer = true;

const checkMap = new Map()

const max = arr.length;

let res

for(let i=0; i<max; i++){
    if(arr[i] > max) res =  false;
    checkMap.set(arr[i], 0)
}

if(checkMap.length === max) res=  true;
else res= false;


console.log(checkMap)

console.log("#",checkMap.size)


console.log(res);