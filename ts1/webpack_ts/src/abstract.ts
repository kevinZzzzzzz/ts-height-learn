// abstract抽象类：包含抽象方法(抽象方法一般没有具体内容的实现)，也可以包含实例方法，抽象类是不能被实例化,只能用作被其他类继承，
// 为了让子类进行实例化及实现内部的抽象方法
// 抽象类的目的和作用都是为了子类服务的
(() => {
    abstract class Animal { // 定义抽象方法，需要先定义抽象类   
        // abstract eat() {方法“eat”不能具有实现，因为它标记为抽象。
        // }
        name: string
        constructor(name: string) {
            this.name = name
        }
        abstract eat():void
        abstract sayHi():void
        abstract changeName(name: string): void
    }
    class Dog extends Animal {
        // 重新实现抽象类重的方法，此时这个eat方法就是Dog的实例方法
        eat() {
            console.log('吃肉', this.name)
        }
        sayHi() {
            console.log('hi111')
        }
        changeName(name: string) {
            this.name = name
        }
    }
    // new Animal() // 无法创建抽象类的实例。
    const dog: Dog = new Dog('🐶')
    dog.eat()
    dog.sayHi()
})() 