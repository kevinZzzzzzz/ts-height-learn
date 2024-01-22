/* 多态： 父类型的引用指向子类型的对象，不同类型的对象针对相同的方法，产生不同的行为*/
/* 在父类型中定义方法，每个子类可以重新定义实现不同的表现 */
//       前提：是继承同个父类型


(() => {
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        run(distance: number = 0) {
            console.log(`${this.name}跑了${distance}米`)
            // console.log(this.name, 'animal')
        }
    }
    class Dog extends Animal {
        constructor(name:string) {
            super(name)
        }
        run(distance: number = 0) {
            super.run(distance)
            // console.log(`${this.name}跑了${distance}米`)
        }
    }
    class Pig extends Animal {
        constructor(name:string) {
            super(name)
        }
        run(distance: number = 0) {
            super.run(distance)
            // console.log(`${this.name}跑了${distance}米`)
        } 
    }
    const ani: Animal = new Animal('哈哈')
    const dog: Dog = new Dog('小狗')
    const pig: Pig = new Pig('小猪')

    ani.run()
    dog.run(5)
    pig.run(10)

    console.log('>>>>>>>>>>>>>>>>>>>>')
    // 父类型创建子类型对象
    const dog1: Animal = new Dog('大黄')
    const pig1: Animal = new Pig('大白')
    dog1.run(6)
    pig1.run(11)
    
    console.log('>>>>>>>>>>>>>>>>>>>>')
    function showRun(ani: Animal) {
        console.log(ani)
        ani.run(Math.floor((Math.random() * 10) + 1))
    }
    showRun(dog)
    showRun(pig)
    showRun(dog1)
    showRun(pig1)

    console.log('>>>>>>>>>>>>>>>>>>>>')
    // class Person {
    //     name: string
    //     constructor(name: string) {
    //         this.name = name
    //     }
    // }
    // const person = new Person('')
    // showRun(person)
})()