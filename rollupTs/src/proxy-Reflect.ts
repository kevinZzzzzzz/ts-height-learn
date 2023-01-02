/* 
  proxy
*/
type Person = {
  name: string,
  age?: number,
  text?: string,
  [name: string]: any
}

const proxy = (object: any, key: keyof Person) => {
  console.log(object,key )
  return new Proxy(object, {
    get(target, prop, receiver) {
      console.log('====获取内容get====', receiver )
      return Reflect.get(target, prop, receiver)
    },
    set(target, prop, value, receiver) {
      console.log('====跟新内容set====',value, receiver )
      return Reflect.set(target, prop, value, receiver)
    }
  })
}
const logAccess = (obj: Person, key: keyof Person) => {
  return proxy(obj, key)
}
let man: Person = logAccess({
  name: 'kevinZzzzz',
  age: 19,
  text: '哈哈哈哈'
}, 'name')
let man2: Person = logAccess({
  name: 'kevinzzzzz',
  id: 123
}, 'id')
man.age = 20