// 函数的完整写法
(function () {
    function add(x, y) {
        return x + y;
    }
    var add2 = function (x, y) {
        return x + y;
    };
    console.log(add('1', '2'));
    console.log(add2(1, 2));
})();
