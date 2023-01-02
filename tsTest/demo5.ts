// function getTotal(one: number, two: number): number {
//     return one + two
// }

// const total = getTotal(1,2)

// 2、void 表示函数没有返回值
// function sayHello(): void {
//     console.log('hello world')
// }
// sayHello()

// 3、never 表示函数永远执行不完
function errorFuntion(): never {
    throw new Error()
    console.log('hello world')
}
function forNever() : never {
    while(true){
        console.log('hello world');
    }
}
// errorFuntion()
// forNever()

function add({one, two} : {one: number, two: number}) {
    return one + two
}
const total = add({one: 1, two: 2})