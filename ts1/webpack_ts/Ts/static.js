// static静态成员： 在类中通过static修饰的属性和方法，那么就是静态的属性及静态的方法，=====静态成员
// 静态成员在使用的时候通过类名.的语法使用
(function () {
    var Person = /** @class */ (function () {
        function Person(name) {
            // 此时this是实例对象，name1是静态属性，不能通过实例对象直接调用静态属性
            // 只能通过类名来调用 类.
            // this.name1 = name
        }
        Person.sayHi = function () {
            console.log('萨瓦迪卡');
        };
        return Person;
    }());
    var person = new Person('哈哈哈');
    // console.log(person.name)
    // person.sayHi()
    console.log(Person.name);
    Person.sayHi();
})();
