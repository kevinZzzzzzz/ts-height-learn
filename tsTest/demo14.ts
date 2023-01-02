// 只读属性 readonly
class Personss{
    public readonly name: string
    constructor(name: string){
        this.name = name
    }
}
const personss = new Personss('kevinZZZZZZZZ')
// personss.name = 'kevinhahahah'
console.log(personss.name);



// 抽象属性: 使用于各个子类都必须有的属性，且属性值不一样，抽象属性只能声明在抽象类中
abstract class Girlss {
    abstract skill()
}

class Waiter extends Girlss{
    skill() {
        console.log('哈哈哈哈哈');
    }
}

class BaseTeacher extends Girlss {
    skill() {
        console.log('呵呵呵呵呵');
    }
}

class SeniorTeacher extends Girlss {
    skill() {
        console.log('哦哦哦哦哦');
    }
}

