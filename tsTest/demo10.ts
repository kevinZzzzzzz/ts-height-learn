// 类class
class Ladys {
    content = 'hi, 帅哥'
    sayHello() {
        return this.content
    }
}
const goddess = new Ladys()
// console.log(
//     goddess.sayHello()
// );

// super关键字: 调用父类的方法
class XiaoJieJie extends Ladys {
    sayLove() {
        return super.sayHello() + ',I Love You'
    }
}
const goddess2 = new XiaoJieJie()
goddess2.content = 'hi, honey'
console.log(
    goddess2.sayHello(),
    goddess2.sayLove()
);
