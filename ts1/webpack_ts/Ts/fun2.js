// 函数的完整写法
// 可选参数
// 默认参数
// 剩余参数...agrs
(function () {
    function getFullName(firstname, lastname) {
        if (firstname === void 0) { firstname = 'hahaha'; }
        if (lastname) {
            return firstname + '_' + lastname;
        }
        else {
            return firstname;
        }
    }
    console.log(getFullName('kevin', 'zzzzz'));
    console.log(getFullName(undefined, 'zzzzz'));
    console.log(getFullName());
    console.log(getFullName('kevin'));
    function getArgs(str) {
        var agrs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            agrs[_i - 1] = arguments[_i];
        }
        console.log(str);
        console.log(agrs);
    }
    getArgs(1, 2, '2', 4);
})();
