const skill = "CBD"
const skill_trees =  ["BACDE", "CBADF", "AECB", "BDA"]

const skillLength = skill.length

// {"C", 1},
// {"B}" ,2}

const skillMap = new Map()


for(let i=0; i<skillLength ;i++) {
    skillMap.set(skill[i], i)
}

let res = 0


for(let tress of skill_trees){
    skillMap.forEach((key, value)=>{
        console.log(tress)
        console.log(value)
        console.log(tress.indexOf(value))
        console.log("######")

    })

}