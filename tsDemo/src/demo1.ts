/**
 * 类型保护
    1、类型断言 as
    2、in方法
    3、typeof方法
    4、instanceof方法 只能用在类上！！！
 */ 
interface Waiter {
    anjiao: boolean;
    say: () => {}
}
interface Teacher {
    anjiao: boolean;
    skill: ()=> {}
}
// 1
function judgeWho(animal: Waiter | Teacher) { 
    if(animal.anjiao) {
        (animal as Teacher).skill()
    } else {
        (animal as Waiter).say
    }
}
// 2
function judgeWhoTow(animal: Waiter | Teacher) {
    if('skill' in animal) {
        animal.skill()
    } else {
        animal.say()
    }
}
// 3
function add(first: string | number,second: string | number) {
    if(typeof first === 'string' && typeof second === 'string') {
        return `${first}${second}`
    }
    if(typeof first === 'number' && typeof second === 'number') {
        return first + second
    }
    return 'hahaha'
}

// 4
class NumberObj {
    count: number = 0
}
function addObj(first : Object | NumberObj, second : object | NumberObj) {
    if(first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count; 
    }
    return 0
}
