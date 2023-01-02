// generic泛型: 在定义函数、接口、类的时候不能预先确定要使用的数据类型，而是在使用过程中才能确定数据类型
(function () {
    // 需求： 定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量，作用：根据数量产生对应个数的数据，存放在一个数组中
    function getArr1(value, count) {
        var arr = [];
        for (var i = 0; i < count; i++) {
            arr.push(value);
        }
        return arr;
    }
    var arr1 = getArr1(111.22, 3);
    console.log(arr1);
    function getArr2(value, count) {
        var arr = [];
        for (var i = 0; i < count; i++) {
            arr.push(value);
        }
        return arr;
    }
    var arr2 = getArr2('hahaha', 3);
    console.log(arr2);
    console.log('======================');
    function getArr3(value, count) {
        var arr = [];
        for (var i = 0; i < count; i++) {
            arr.push(value);
        }
        return arr;
    }
    var arr3 = getArr3(1, 3);
    console.log(arr3);
    console.log('======================');
    function getArr4(value, count) {
        var arr = [];
        for (var i = 0; i < count; i++) {
            arr.push(value);
        }
        return arr;
    }
    var arr4 = getArr4(123, 3);
    var arr41 = getArr4('123', 3);
    console.log(arr41[0]);
})();
