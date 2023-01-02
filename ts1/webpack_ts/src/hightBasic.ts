
(() => {
    //  接口：对值所具有的结构进行类型检查，可以通过接口来对定义对象的类型、个数、是否必须
    interface IPerson {
        // readonly: 表示只读
        readonly id: number,
        name: string,
        age: number,
        // ?: 非必须
        sex?: string
    }
    const person: IPerson = {
        id: 1,
        name: 'kevinZzzzz',
        age: 19,
        // sex: '男'
    }
    // person.id = 100
    console.info(person)

    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')

    // 函数类型： 通过接口的方式来作为函数的类型来使用
    interface ISearchFunc {
        // 定义一个调用签名
        (source: string, subString:string): number | boolean
    }
    // const searchString: ISearchFunc = function(source: string, subString:string): boolean {
    const searchString: ISearchFunc = function(source, subString) {
        return source.indexOf(subString)
    }
    console.log(searchString('kevinZzzzz', 'Z'), 'search')

    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')

    //  类的类型： 类的类型可以通过接口实现
    // extends 继承类；implements 实现接口，可以实现多继承。
    interface IFly {
        fly()
    }
    // 定义一个类，一个接口，然后在这个类内实现这个接口
    class Person1 implements IFly {
        fly() {
            console.log('kevin12312')
        }
    }
    const person1 = new Person1()
    person1.fly()

    interface ISwin {
        swin(): void
    }
    class Person2 implements IFly, ISwin {
        fly() {
            console.log('I can fly')
        }
        swin() {
            console.log('i can swim')
        }
    }
    const person2 = new Person2()
    person2.fly()
    person2.swin()

    /* 总结：类可以通过接口的方式来定义当前这个类的类型
       类可以继承一个接口，也可以继承多个接口，但要注意要将接口的内容都实现
    */
    // 也可以一个接口继承多个接口
    interface IMyFlyAndSwin extends IFly,ISwin {}
    class Person3 implements IMyFlyAndSwin {
        fly() {
            console.log('I can fly1')
        }
        swin() {
            console.log('i can swim1')
        }
    }
    const person3 = new Person3()
    person3.fly()
    person3.swin()

    // 总结:类和类、接口与接口之间继承extends，类与接口之间叫实现implements 
})(),

(() => {
    type obj1 = {
        name: string
    }
    // 接口通过extend继承， 类型通过‘&’实现继承
    type obj2 = obj1 & {
        age: number
    }
    const a: obj1 = {
        name: 'hah'
    }
    const b: obj2 = {
        name: 'kevin',
        age: 10
    }
    console.log(a)
    console.log(b)

    type obj3 = (x: string, y: number) => Object
    const getObj: obj3 = function(x, y) {
        return {
            x,
            y
        }
    }
    console.log(getObj('aaa', 123))
})()