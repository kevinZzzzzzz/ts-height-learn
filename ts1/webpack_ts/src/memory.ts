// 存储器memory: 通过getter/setter对类中的属性进行有效的操作

(() => {
    class Person {
        firstname: string
        lastname: string
        constructor(firstname: string,lastname: string) {
            this.firstname = firstname
            this.lastname = lastname
        }
        get fullname() {
            console.log('get....')
            return this.firstname + '_' +this.lastname
        }
        set fullname(val) {
            console.log('set....', val)
            let name = val.split('_')
            this.firstname = name[0]
            this.lastname = name[1]
        }
    }
    const person = new Person('kevin','zzzzz')
    console.log(person.fullname)
    person.fullname = 'kebin_Zzzzzz'
    console.log(person.firstname)
    console.log(person.lastname)
})()