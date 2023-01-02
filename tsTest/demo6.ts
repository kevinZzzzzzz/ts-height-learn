const numberArr : number[] = [1,2,3,4]
const stringArr : string[] = ['a','b','c']

const underfinedArr : undefined[] = [undefined]

console.log(numberArr,stringArr,underfinedArr)


const arr : (number | string)[] = [1,'www', 2, '3']

// type alias 类型别名
const xiaojiejies : {name: string, age: number}[] = [
    {name: 'kevin',age: 18},
    {name: 'kevin1',age: 19},
    {name: 'kevin2',age: 20},
]

type Lady = {
    name:  string,
    age: number
}

const xiaojiejiess : Lady[] = [
    {name: 'kevin',age: 18},
    {name: 'kevin1',age: 19},
]

class Madam {
    name: string;
    age: number;
}
const xiaojiejiesss : Madam[] = [
    {name: 'kevin',age: 18},
    {name: 'kevin1',age: 19},
]
