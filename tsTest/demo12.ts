//  类的构造函数
class Persons {
    public name: string;
    public sex ?: string;
    constructor(name: string,sex?: string) {
        this.name = name
        this.sex = sex
    }
}
// class Persons {
//     constructor(public name: string) {}
// }
// 子类继承父类，子类的构造函数必须调用super()
class Teachers extends Persons {
    constructor(public age: number) {
        super('kevinZZZZZZZ')
    }
}
const persons = new Persons('kevinZzzzz','male')
const teachs = new Teachers(19)
console.log(persons.name, persons.sex);
console.log(teachs.name, teachs.sex, teachs.age);
