// 泛型 在调用时确定类型，参数的类型也会相应统一
// function join(first : string | number, second : string | number) {
//     return `${first}${second}`
// }
// let a = join('kevinZzzz', 18)
// console.log(a)
// function join<kevin>(first : kevin, second : kevin) {
//     return `${first}${second}`
// }
function join<T,P>(first : T, second : P) {
    return `${first}${second}`
}
console.log(join<string,number>('kevinZzzz', 18))


// 泛型中数组的使用
function myFun<T>(params: Array<T>) {
    return params;
}
myFun<string>(['213','124'])