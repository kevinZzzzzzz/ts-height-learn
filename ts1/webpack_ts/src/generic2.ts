// 多个泛型参数的函数： 函数中有多个泛型的参数
(() => {
    function getMsg<K,V,B>(value: K, number: V, bool: B): [K, V, B] {
        return [value, number, bool]
    }
    const arr1 = getMsg<string, number, boolean>('hahaha',123, true)
    console.log(arr1)
})()