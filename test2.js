const arr = [1,1,3,3,0,1,1]

const answer = []

for(let i=0; i<arr.length; i++){
    if(i===0) {
        answer.push(arr[i])
    }else{
        const last = answer[answer.length-1]
        console.log(last, arr[i])
        if(arr[i] === last){continue}
        else answer.push(arr[i])
    }
}

console.log(answer)