// overloading：函数重载，函数名字相同，函数参数和个数不同
(() => {
    // 函数重载声明
    function add(x: string, y: string): string
    function add(x: number, y: number): number
    function add(x: number, y: string): void

    // interface aa {
    //     (x:string|number, y:string|number): string | number
    // }
    // 函数声明
    function add(x:string|number, y:string|number): string | number {
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y  // 字符串拼接
        } else if (typeof x === 'number' && typeof y === 'number') {
            return x + y // 数字相加
        } else {
           console.log([x, y])
           return 123
        }
    }
    console.log(add(1, 1))
    console.log(add('kevin', 'zzzzz'))
    console.log(add(123, 'zzzzz'))

    // 此时如果不做函数重载是不会报错的
    // console.log(add(1, 'q'))
    // console.log(add('q', 1))
})()