/* 多态： 父类型的引用指向子类型的对象，不同类型的对象针对相同的方法，产生不同的行为*/
//       前提：是继承同个父类型
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
(function () {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.run = function (distance) {
            if (distance === void 0) { distance = 0; }
            console.log(this.name + "\u8DD1\u4E86" + distance + "\u7C73");
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name) {
            return _super.call(this, name) || this;
        }
        Dog.prototype.run = function (distance) {
            if (distance === void 0) { distance = 0; }
            _super.prototype.run.call(this, distance);
            // console.log(`${this.name}跑了${distance}米`)
        };
        return Dog;
    }(Animal));
    var Pig = /** @class */ (function (_super) {
        __extends(Pig, _super);
        function Pig(name) {
            return _super.call(this, name) || this;
        }
        Pig.prototype.run = function (distance) {
            if (distance === void 0) { distance = 0; }
            _super.prototype.run.call(this, distance);
            // console.log(`${this.name}跑了${distance}米`)
        };
        return Pig;
    }(Animal));
    var ani = new Animal('哈哈');
    var dog = new Dog('小狗');
    var pig = new Pig('小猪');
    ani.run();
    dog.run(5);
    pig.run(10);
    console.log('>>>>>>>>>>>>>>>>>>>>');
    // 父类型创建子类型对象
    var dog1 = new Dog('大黄');
    var pig1 = new Pig('大白');
    dog1.run(6);
    pig1.run(11);
    console.log('>>>>>>>>>>>>>>>>>>>>');
    function showRun(ani) {
        ani.run(Math.floor((Math.random() * 10) + 1));
    }
    console.log(dog);
    showRun(dog);
    showRun(pig);
    showRun(dog1);
    showRun(pig1);
    console.log('>>>>>>>>>>>>>>>>>>>>');
    // class Person {
    //     name: string
    //     constructor(name: string) {
    //         this.name = name
    //     }
    // }
    // const person = new Person('')
    // showRun(person)
})();
