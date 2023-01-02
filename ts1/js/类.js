(function () {
    var Person = /** @class */ (function () {
        // 定义一个构造函数
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + '_' + this.lastName;
        }
        return Person;
    }());
    function showFullName(person) {
        return person.fullName;
    }
    var person = new Person('kevin', 'zhang');
    console.log(showFullName(person));
})();
