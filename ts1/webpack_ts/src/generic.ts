// generic泛型: 在定义函数、接口、类的时候不能预先确定要使用的数据类型，而是在使用过程中才能确定数据类型
(() => {
    // 需求： 定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量，作用：根据数量产生对应个数的数据，存放在一个数组中
    function getArr1(value: number, count:number):number[] {
        const arr: number[] = []
        for(let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    let arr1 = getArr1(111.22, 3)
    console.log(arr1)
    function getArr2(value: string, count:number):string[] {
        const arr: string[] = []
        for(let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    let arr2 = getArr2('hahaha', 3)
    console.log(arr2)


console.log('======================')
    function getArr3(value: any, count:number):any[] {
        const arr: any[] = []
        for(let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    let arr3 = getArr3(1, 3)
    console.log(arr3)

console.log('======================')
    function getArr4<T>(value: T, count: number):T[] {
        let arr: Array<T> = []
        for(let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    const arr4 = getArr4<number>(123,3)
    const arr41 = getArr4<string>('123',3)
    console.log(arr41[0])


    console.log('======================')

    interface obj {
        name: string,
        age: number
    }
    const a: obj = {
        name: 'kevin',
        age: 27
    }
    const b: obj = {
        name: 'kebin',
        age: 28
    }
    function getArr5<T>(...args: Array<T>): T[] {
        let arr: T[] = []
        let count: number = args.length
        for(let o = 0; o < count; o++) {
            arr.push(args[o])
        }
        return arr
    }
    const arr5 = getArr5<obj>(a, b)
    console.log(arr5)

    // keyof 约束范型对象
    function getObj<T, K extends keyof T>(obj: T, key: K) {
        return obj[key]
    }
    let obj = {a: 1, b: 2, c: 3}
    getObj(obj, 'a')
    // getObj(obj, 'o') // 类型“"o"”的参数不能赋给类型“"a" | "b" | "c"”的参数。t
})()