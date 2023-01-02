/* 修饰符modifier */
// public修饰符：类中成员默认的修饰符，表示公共的属性，任何位置都可以访问的这个属性
// private修饰符：表示私有属性，只能在定义的类中使用，类外无法访问到该属性,子类也是无法访问的
// protected修饰符：表示保护属性, 只能在父类和子类的实例对象使用，外部无法使用,
// readonly修饰符： 表示只读属性，只能读取不能修改，类中的普通方法也是无法修改，只能constructor中修改

// 构造函数中的参数也可以使用修饰符，一旦使用就相当于类中有了该属性 
(()=>{
    class Person {
        public name: string
        private age: number
        protected gander: string
        constructor(name: string, age: number, gander?: string ) {
            this.name = name
            this.age = age
            this.gander = gander
        }
        say() {
            console.log(this.age+'岁的'+this.name+': '+'哈哈哈哈哈')
        }
    }
    const person1: Person = new Person('哈哈哈', 10, '男')
    console.log(person1.name)
    // console.log(person1.gander) // 属性“gander”受保护，只能在类“Person”及其子类中访问
    // console.log(person1.age) // 属性“age”为私有属性，只能在类“Person”中访问
    person1.say()

    console.log('>>>>>>>>>>>>>>>>')
    class Student extends Person {
        constructor(name:string,age:number, gander?: string ) {
            super(name,age, gander)
        }
        play() {
            // console.log('哈哈哈啊哈', this.name, this.age) //属性“age”为私有属性，只能在类“Person”中访问
            console.log('哈哈哈啊哈', this.name, this.gander)
        }
    }
    const student: Student = new Student('呵呵呵', 20, '男')
    student.play()
    // console.log(student.age) // 属性“age”为私有属性，只能在类“Person”中访问。
    
    console.log('>>>>>>>>>>>>>>>>',)
    class Student1 extends Person {
        constructor(name:string,age:number, gander?: string) {
            super(name,age,gander)
        }
        run() {
            console.log('呵呵呵呵呵呵', this.gander)
        }
    }
    const stu1: Student1 = new Student1('啊啊啊啊啊', 20, '女')
    // console.log(stu1.gander) // 属性“gander”受保护，只能在类“Person”及其子类中访问
    stu1.run()

    console.log('>>>>>>>>>>>>>>>>')
    class Person2 {
        readonly name: string
        constructor(name: string) {
            this.name = name
        }
        say() {
            // this.name = name // 无法分配到 "name" ，因为它是只读属性
            console.log(this.name)
        }
    }
    const person2 = new Person2('kevin')
    person2.say()
    // person2.name = 'kebin' // 无法分配到 "name" ，因为它是只读属性。
    console.log(person2.name)
})()