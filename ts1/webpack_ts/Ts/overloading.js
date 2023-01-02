// overloading：函数重载，函数名字相同，函数参数和个数不同
(function () {
    // 函数声明
    function add(x, y) {
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y; // 字符串拼接
        }
        if (typeof x === 'number' && typeof y === 'number') {
            return x + y; // 数字相加
        }
    }
    console.log(add(1, 1));
    console.log(add('kevin', 'zzzzz'));
    // 此时如果不做函数重载是不会报错的
    // console.log(add(1, 'q'))
    // console.log(add('q', 1))
})();
