// 函数的完整写法
// 可选参数
// 默认参数
// 剩余参数...agrs
(() => {
    
    function getFullName(firstname: string = 'hahaha', lastname?: string):string {
        if (lastname) {
            return firstname + '_' + lastname
        } else {
            return firstname
        }
    }
    console.log(getFullName('kevin','zzzzz'))
    console.log(getFullName(undefined,'zzzzz'))
    console.log(getFullName())
    console.log(getFullName('kevin'))

    function getArgs(str: number | string, ...agrs: Array<string|number>) {
        console.log(str)
        console.log(agrs)
    }
    getArgs(1,2,'2',4)
})()