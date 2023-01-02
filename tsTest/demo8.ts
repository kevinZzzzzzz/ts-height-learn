// 接口 interface
// const screenResume = (name: string, age: number, time: number) => {
//     age > 24 && time >= 3 && console.log(name + '进入面试');
//     (age < 24 || time < 3) && console.log(name + '你被淘汰')
// }

// const getResume = (name: string, age: number, time: number) => {
//     console.log(name + '年龄是' + age);
//     console.log(name + '工龄是' + time);
// }
// screenResume('kevin1',18,1)
// getResume('kevin',25,4)


interface Resumer {
    name: string,
    age: number,
    time: number
    height ?: number,// 可选
    [propname: string]: any,// 可选, 不约束属性
    say(): string
}

const resumer = {
    name: 'kevinZZZZZ',
    age: 26,
    time: 2,
    sex: '男',
    say() {
        return '哈哈哈'
    },
    teach() {
        return '数学'
    }
    // height: 180
}

const screenResume = ({name,age,time,height,sex,say}: Resumer) => {
    age > 24 && time >= 3 && console.log(name + '进入面试');
    (age < 24 || time < 3) && console.log(name + '你被淘汰')
    sex && console.log(name + '性别是:' + sex)
    height && console.log(name + '身高是:' + height)
    say && console.log(say());  
}

const getResume = ({name,age,time,height,sex,say}: Teacher) => {
    console.log(name + '年龄是' + age);
    sex && console.log(name + '性别是:' + sex)
    height && console.log(name + '身高是:' + height)
    console.log(name + '工龄是' + time);
    say && console.log(say());  
}
screenResume(resumer)
getResume(resumer)


// 对class约束 ---- implements
class Resumers implements Resumer {
    name = 'kevinZhang'
    age=20
    sex='男'
    time=4
    height=180
    say() {
        return 'hahahaha'
    }
}

// 接口间的继承
interface Teacher extends Resumer {
    teach(): string
}