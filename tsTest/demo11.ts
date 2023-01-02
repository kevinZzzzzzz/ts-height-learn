// private 私有的，只允许在类的内部使用，不能在类的外部使用(包括在继承中不能使用)
// protected 受保护的，只允许在类的内部、继承中使用，不能在类的外部使用
// public 公共的，默认添加 表示在类的内部和类的外部都允许调用

class Person {
    public name: string;
    public sayHello() {
        return this.name + ' say: hello'
    }
}
const person = new Person()
person.name = 'kevinZzzzz'
console.log(person.sayHello());
