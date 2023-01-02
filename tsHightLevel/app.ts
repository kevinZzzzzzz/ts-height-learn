// 修饰器
const watcher: ClassDecorator = (target: Function) => {
  // console.log(target)
  target.prototype.getName = <T>(name: T): T => {
    return name
  }
}
@watcher
class A {}

@watcher
class B {}
let a = new A()
let b = new B()
// console.log((b as any).getName('哈哈哈哈哈'))

// 修饰器传参  高阶函数 
const watcherHight = (name: string): ClassDecorator => {
  return (target: Function) => {
    console.log(target, 'watcherHight')
    target.prototype.getName = <T>(name: T): T => {
      return name
    }
    target.prototype.getNames = () => {
      return name
    }
  }
}
const log: ClassDecorator = (target: Function) => {
  console.log(target, 'log')
  target.prototype.a = '123123123'
}

const logs: PropertyDecorator = (...args: any[]) => {
  console.log(args,'args')
}
const logs1: MethodDecorator = (...args: any[]) => {
  console.log(args,'logs1')
}
const logs2: ParameterDecorator = (...args: any[]) => {
  console.log(args,'logs2')
}
@log
@watcherHight('kevinZzzzzz1111')
class C {
  @logs
  name: string | undefined
  constructor() {

  }
  @logs1
  getname(@logs2 name: string) {
    return '123'
  }
}
let c = new C()
console.log((c as any).prototype)
console.log((<any> c).getName('哈哈哈哈'))