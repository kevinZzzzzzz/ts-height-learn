// private 私有的，只允许在类的内部使用，不能在类的外部使用(包括在继承中不能使用)
// 封装一个属性，通过get，set方法访问该属性

// class Xiaojiejiesss {
//     constructor(private _age: number){}
//     get age() {
//         return this._age
//     }
//     set age(age: number) {
//         this._age = age
//     }
// }

// const dajiao = new Xiaojiejiesss(28)
// dajiao.age = 10

// class XiaoJieJiesssss extends Xiaojiejiesss {
//     constructor() {
//         super(12)
//     }
// }
// const dajiao2 = new XiaoJieJiesssss()

// console.log(dajiao2.age)



// static 静态属性  不用继承或者new 就可以直接调用类的属性和方法
class Girls {
    sayLove2() {
        return 'I Love2 You!'
    }
    static sayLove() {
        return 'I Love You!'
    }
}
const girls = new Girls()
console.log(girls.sayLove2())
console.log(Girls.sayLove())