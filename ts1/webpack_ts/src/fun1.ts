// 函数的完整写法
(() => {
    function add(x: string,y:string): string {
        return x + y
    }
    // =======================
    const add2: (x: number,y:number) => number = function(x: number,y:number):number {
        return x + y
    }
    // =======================
    interface aa {
        (x: number,y:number): number
    }
    const add3: aa = function(x: number,y:number):number {
        return x + y
    }
    console.log(add('1','2'))
    console.log(add2(1,2))
    console.log(add3(1,3))
})()