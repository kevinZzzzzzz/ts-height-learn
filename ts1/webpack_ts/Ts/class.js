/*
    类：可以理解为模版，通过模版可以规定实例化对象
*/
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
/* 继承：类与类之间的关系
    A类继承了B类，A叫子类，B叫基类
    子类——————>派生类
    基类-—————》超类（父类）
    一旦发生了继承关系，就有了父子类的关系
*/
(function () {
    var Person = /** @class */ (function () {
        // 构造函数在定义实例化对象的时候，直接对属性的值进行初始化
        function Person(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        Person.prototype.sayHey = function (str) {
            console.log(this.name + "-" + this.age + "-" + this.gender, str);
        };
        return Person;
    }());
    var person = new Person('kevin', 20, '男');
    person.sayHey('hahahah');
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, gender) {
            // 调用的是父类的构造函数，使用的是super 
            return _super.call(this, name, age, gender) || this;
        }
        Student.prototype.sayHey = function (str) {
            console.log(str);
            // super.sayHey(str)
        };
        return Student;
    }(Person));
    var student = new Student('kebin', 18, '女');
    student.sayHey('呵呵呵');
    /* 总结：类与类之间如果是有继承关系需要使用extends
        子类中如果调用父类中的构造函数（包括调用父类的方法 ），需要使用super，
        包括可以改写父类的方法
    */
})();
