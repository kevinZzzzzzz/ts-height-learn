(function () {
    var person = {
        id: 1,
        name: 'kevinZzzzz',
        age: 19,
        // sex: '男'
    };
    // person.id = 100
    console.info(person);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    // const searchString: ISearchFunc = function(source: string, subString:string): boolean {
    var searchString = function (source, subString) {
        return source.search(subString) > -1;
    };
    console.log(searchString('kevinZzzzz', 'Z'));
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    // 定义一个类，然后通过接口来约束这个类
    var Person1 = /** @class */ (function () {
        function Person1() {
        }
        Person1.prototype.fly = function () {
            console.log('kevin12312');
        };
        return Person1;
    }());
    var person1 = new Person1();
    person1.fly();
    var Person2 = /** @class */ (function () {
        function Person2() {
        }
        Person2.prototype.fly = function () {
            console.log('I can fly');
        };
        Person2.prototype.swin = function () {
            console.log('i can swim');
        };
        return Person2;
    }());
    var person2 = new Person2();
    person2.fly();
    person2.swin();
    var Person3 = /** @class */ (function () {
        function Person3() {
        }
        Person3.prototype.fly = function () {
            console.log('I can fly1');
        };
        Person3.prototype.swin = function () {
            console.log('i can swim1');
        };
        return Person3;
    }());
    var person3 = new Person3;
    person3.fly();
    person3.swin();
    // 总结:接口与接口之间继承extends，类与接口之间叫实现implements 
})();
