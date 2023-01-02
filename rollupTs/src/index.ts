// 定义一个类型， 如果是数组类型，就返回数组元素的类型，否则就传入什么类型就返回什么类型
// type TYPE<T> = T extends Array<any> ? T[number] : T
type TYPE<T> = T extends Array<infer U> ? U : T
type AA = TYPE<(string | number | Symbol | boolean)[]>
type BB = TYPE<boolean>

let aa:AA = 21
// console.log(aa)
let bb:BB = false

// infer妙用 提取元素的妙用
type Arr = ['a', 'b', 'c']
// type First<T extends any[]> = T extends [infer one, ...any[], infer last] ? Rest : []
type First<T extends any[]> = T extends [...infer Rest, infer last] ? Rest : []
type a1 = First<Arr>
let arr2: Arr = ['a', 'b', 'c']
let aa1: a1 = ['a', 'b']

// infer妙用 递归反转
type Arr3 = [1,2,3,4]
type ReverArr<T extends any[]> = T extends [infer First, ...infer Rest] ? [...ReverArr<Rest>, First] : T
type Arr4 = ReverArr<Arr3>
let arr3: Arr3 = [1,2,3,4]
let arr4: ReverArr<Arr3> = [4,3,2,1]

