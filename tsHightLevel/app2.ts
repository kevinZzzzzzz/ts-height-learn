interface Person {
  name: string,
  age?: number,
  [propName: string]: string | number | undefined
}
let p: Person = {
  name: '张三',
  age: 18,
  nickName: '哈哈哈哈'
}
// console.log(p)


function Arr(...args: any): void {
  // console.log(arguments)
  let arr: IArguments = arguments
}
Arr(1,2,3,4,'123')

let s: symbol = Symbol('kevin')
let s2: symbol = Symbol('kevin') // symbol 存储的是唯一值，因为内存地址指针位置不同
let s1: symbol = Symbol(123213)
// console.log(s === s2, s1) // false Symbol(123213)‘

let obj = {
  [s2]: '哈哈哈哈',
  [s]: '呵呵呵呵',
  name: 'kevinzZzzzzz'
}
// console.log(obj, obj[s2])
for (let key in obj) {
  console.log(key) // 查不到symbol
}
// console.log(Object.keys(obj))
// console.log(JSON.stringify(obj))

// 如何查询symbol
// console.log(Object.getOwnPropertySymbols(obj))


// 迭代器Iterator
type mapKeys = string | number
let arr: Array<number> = [4, 5, 6]
let set: Set<number> = new Set([1, 2, 3])
let map: Map<mapKeys, mapKeys> = new Map()
map.set('1', '哈哈哈哈')
map.set('2', '呵呵呵呵')
let obj1 = {
  name: 1
}
function gen(erg: any) {
  let it: Iterator<any> = erg[Symbol.iterator]()
  let next: any = { done: false }
  while( !next.done ) {
    next = it.next()
    if (!next.done) {
      console.log(next)
    }
  }
}
// gen(map)
for (let item of arr) {
  console.log('item', item);
}

