// 存储器memory: 通过getter/setter对类中的属性进行有效的操作
(function () {
    var Person = /** @class */ (function () {
        function Person(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        Object.defineProperty(Person.prototype, "fullname", {
            get: function () {
                console.log('get....');
                return this.firstname + '_' + this.lastname;
            },
            set: function (val) {
                console.log('set....');
                var name = val.split('_');
                this.firstname = name[0];
                this.lastname = name[1];
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var person = new Person('kevin', 'zzzzz');
    console.log(person.fullname);
    person.fullname = 'kebin_Zzzzzz';
    console.log(person.firstname);
    console.log(person.lastname);
})();
