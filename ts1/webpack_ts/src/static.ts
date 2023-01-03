// static静态成员： 在类中通过static修饰的属性和方法，那么就是静态的属性及静态的方法，=====静态成员
// 静态成员在使用的时候通过类名.的语法使用

(() => {
    class Person {
        static name1: string
        name: string
        constructor(name: string) {
            // 此时this是实例对象，name1是静态属性，不能通过实例对象直接调用静态属性
            // 只能通过类名来调用 类.
            // this.name1 = name
            Person.name1 = name
            this.name = name
        }
        static sayHi() {
            // 静态成员只在静态方法中可以使用this
            console.log('萨瓦迪卡', this.name1)
        }
    }
    const person:Person = new Person('哈哈哈')
    // console.log(person.name)
    // person.sayHi()
    console.log(person.name)
    console.log(Person.name1)
    Person.sayHi()
})()