/* 修饰符modifier */
// public修饰符：类中成员默认的修饰符，表示公共的属性，任何位置都可以访问的这个属性
// private修饰符：表示私有属性，只能在定义的类中使用，类外无法访问到该属性,子类也是无法访问的
// protected修饰符：表示保护属性, 只能在父类和子类的实例对象使用，外部无法使用,
// readonly修饰符： 表示只读属性，只能读取不能修改，类中的普通方法也是无法修改，只能constructor中修改
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 构造函数中的参数也可以使用修饰符，一旦使用就相当于类中有了该属性 
(function () {
    var Person = /** @class */ (function () {
        function Person(name, age, gander) {
            this.name = name;
            this.age = age;
            this.gander = gander;
        }
        Person.prototype.say = function () {
            console.log(this.age + '岁的' + this.name + '： ' + '哈哈哈哈哈');
        };
        return Person;
    }());
    var person1 = new Person('哈哈哈', 10);
    console.log(person1.name);
    // console.log(person1.age) // 属性“age”为私有属性，只能在类“Person”中访问
    person1.say();
    console.log('>>>>>>>>>>>>>>>>');
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age) {
            return _super.call(this, name, age) || this;
        }
        Student.prototype.play = function () {
            // console.log('哈哈哈啊哈', this.name, this.age) //属性“age”为私有属性，只能在类“Person”中访问
            console.log('哈哈哈啊哈', this.name);
        };
        return Student;
    }(Person));
    var student = new Student('呵呵呵', 20);
    // console.log(student.age) // 属性“age”为私有属性，只能在类“Person”中访问。
    console.log('>>>>>>>>>>>>>>>>');
    var Student1 = /** @class */ (function (_super) {
        __extends(Student1, _super);
        function Student1(name, age, gander) {
            return _super.call(this, name, age, gander) || this;
        }
        Student1.prototype.run = function () {
            console.log('呵呵呵呵呵呵', this.gander);
        };
        return Student1;
    }(Person));
    var stu1 = new Student1('啊啊啊啊啊', 20, '女');
    // console.log(stu1.gander) // 属性“gander”受保护，只能在类“Person”及其子类中访问
    stu1.run();
    console.log('>>>>>>>>>>>>>>>>');
    var Person2 = /** @class */ (function () {
        function Person2(name) {
            this.name = name;
        }
        Person2.prototype.say = function () {
            // this.name = name // 无法分配到 "name" ，因为它是只读属性
            console.log(this.name);
        };
        return Person2;
    }());
    var person2 = new Person2('kevin');
    person2.say();
    // person2.name = 'kebin' // 无法分配到 "name" ，因为它是只读属性。
    console.log(person2.name);
})();
