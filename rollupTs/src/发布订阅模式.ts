const a: string = 'kevinZzzzz 哈哈哈1'
console.log(a, 123)
if (process.env.NODE_ENV == 'development') {
  console.log('开发')
} 
if (process.env.NODE_ENV == 'production') {
  console.log('生产')
}
/* 
  发布订阅模式
*/
interface Events {
  on: (name: string, cb: Function) => void,
  emit: (name: string, ...args: Array<any>) => void,
  off: (name: string, fn: Function) => void,
  once: (name: string, fn: Function) => void
}
interface List {
  [key: string]: Array<Function>
}
class Dispatch implements Events {
  list: List
  constructor() {
    this.list = {}
  }
  on (name: string, cb: Function) {
    const callback = this.list[name] || []
    callback.push(cb)
    this.list[name] = callback
  }
  emit (name: string, ...args: Array<any>) {
    let eventName = this.list[name]
    if (eventName) {
      eventName.forEach(fn => {
        fn.apply(this, args)
      })
    } else {
      console.error('名称错误')
    }
  }
  off (name: string, fn: Function) {
    let eventName = this.list[name]
    if (eventName && fn) {
      let idx = eventName.findIndex(fns => fns === fn)
      eventName.splice(idx, 1)
      this.list[name] = eventName
    } else {
      console.error('名称错误')
    }
  }
  once (name: string, fn: Function) {
    let de = (...args: Array<any>) => {
      fn.apply(this, args)
      this.off(name, de)
    }
    this.on(name, de)
  }
}

const o = new Dispatch()

o.on('post', (...args: Array<any>) => {
  console.log('kevinZzzzzz', 'post', args)
})
o.on('get', () => {
  console.log('kevinZzzzzz', 'get')
})
o.emit('post', 1, false, {name: 'kevinZzzzz'})