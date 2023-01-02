// 多个泛型参数的函数： 函数中有多个泛型的参数
(function () {
    function getMsg(value, number, bool) {
        return [value, number, bool];
    }
    var arr1 = getMsg('hahaha', 123, true);
    console.log(arr1);
})();
