// 在类中使用泛型
// class SelectGirls<T> {
//     constructor(private girls: T[]) {}
//     getGirls(index: number): T{
//         return this.girls[index]
//     }
// }
// const selectGirls = new SelectGirls<string>(['呵呵','哈哈','哦哦'])
// console.log(selectGirls.getGirls(2))


// 泛型中的继承
// interface Girl {
//     name: string
// }
// class SelectGirls<T extends Girl> {// 泛型继承Girl接口，要求传入的参数必须有name属性
//     constructor(private girls: T[]) {}
//     getGirls(index: number): string{
//         return this.girls[index].name
//     }
// }
// const selectGirls = new SelectGirls(
//     [
//         {name: '哈哈'},
//         {name: '呵呵'},
//         {name: '哦哦'}
//     ]
// )
// console.log(selectGirls.getGirls(2))


// 泛型的约束
class SelectGirls<T extends number | string> {// 约束泛型必须是number或者string类型
    constructor(private girls: T[]) {}
    getGirls(index: number): T{
        return this.girls[index]
    }
}
const selectGirls = new SelectGirls<string>(['呵呵','哈哈','哦哦'])
console.log(selectGirls.getGirls(2))
