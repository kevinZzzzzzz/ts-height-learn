/* 
    类：可以理解为模版，通过模版可以规定实例化对象
*/

/* 继承：类与类之间的关系
    A类继承了B类，A叫子类，B叫基类
    子类——————>派生类
    基类-—————》超类（父类）
    一旦发生了继承关系，就有了父子类的关系
*/
(() => {
    class Person {
        name: string
        age: number
        gender: string
        [x: string]: any
        // 构造函数在定义实例化对象的时候，直接对属性的值进行初始化
        constructor(name: string, age: number, gender: string) {
            this.name = name
            this.age = age
            this.gender = gender
        }
        sayHey(str: string): void {
            console.log(`${this.name}-${this.age}-${this.gender}`, str)
        }
    }
    const person = new Person('kevin', 20, '男')
    person.sayHey('hahahah')

    class Student extends Person {
        [x: string]: any
        constructor(name: string, age: number, gender: string) {
            // 调用的是父类的构造函数，使用的是super 
            super(name,age,gender)
        }
        sayHey(str: string): void {
            console.log(str)
            super.sayHey(str)
        }
    }
    const student = new Student('kebin', 18, '女')
    student.sayHey('呵呵呵')
// 单独查找Person是Person类里面的constructor，即构造函数，而这个构造函数的原型prototype是指整个Person类
    console.log(person, Person)
    console.log(person.__proto__, Person.prototype)
    console.log('++++==================>')
    console.log(student.__proto__, Student.prototype.__proto__)
    console.log('++++==================>')
    console.log(Student.prototype)
    console.log(Person.prototype.__proto__)
    console.log(student.constructor === Student)
    /* 总结：类与类之间如果是有继承关系需要使用extends
        子类中如果调用父类中的构造函数（包括调用父类的方法 ），需要使用super，
        包括可以改写父类的方法
    */
})()