(() => {
    interface IPerson{
        firstName: String,
        lastName: String,
        fullName: string
    }
    class Person {
        // 定义公共字段
        firstName: string
        lastName: string
        fullName: string
        // 定义一个构造函数
        constructor (firstName: string,lastName: string) {
            this.firstName = firstName
            this.lastName = lastName
            this.fullName = this.firstName + '_' + this.lastName
        }
    }
    function showFullName(person:IPerson) {
        return person.fullName
    }
    const person = new Person('kevin', 'zhang')
    console.log(showFullName(person))
})()