// 接口只是一种能力，一个约束而已
(function () {
    function showFullName(person) {
        return person.firstName + '·' + person.firstName;
    }
    console.log(showFullName({
        // firstName: 'kevin',
        lastName: 'zhang'
    }));
})();
