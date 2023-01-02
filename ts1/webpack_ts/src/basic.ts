/*
    tips： 基本数据类型 Number、String、Boolean、Null、undefined、symbol
       NaN：是属于非Number数据的Number类型
       引用数据类型：object包含function、Array、Date...
*/

// 基础类型
(() => {
    // 布尔类型
    let bool: boolean = true
    console.log(bool,123)


    // 数字类型
    let a1: number = 10 // 十进制
    let a2: number = 0b1010 // 二进制
    let a3: number = 0o12 // 八进制
    let a4: number = 0xa1 // 十六进制
    console.log(a1,a2,a3,a4)

    // 字符串类型
    let str: string = '哈哈哈哈'
    let str2: string = '呵呵呵呵'
    let str3: string = '呃呃呃呃'
    console.log(str,str2,str3);

    console.log(str + a1);

    // undefind 和 null都可以作为其他类型的子类型，把undefined和null赋值给其他类型的变量, 需要把严格模式关掉
    let undef: undefined = undefined
    let nll: null = null
    str = undefined
    console.log(undef)
    console.log(nll)
    console.log(str)

    // 数组类型
    // 类型[]写法
    let arr1: number[] = [1,2,3,4]
    let arr11: string[] = ['1','1','1','1']
    // Array<类型>写法、泛型写法
    let arr2: Array<number> = [1,2,3,4]
    let arr22: Array<string> = ['1','1','1','1']
    console.log(arr1,arr11,arr2,arr22)

    // 元祖类型: 在定义数组的时候，类型和数据的位置和个数必须一一对应，调用时可以调用对应类型的方法，如果类型和调用的方法不对应会直接报错
    let arr3: [number,string,boolean] = [1.2, '23', true]
    console.log(arr3)


    // 枚举类型：是js标准类型的一种补充，对于有些数据是非常常用，并且类型和数量是固定的，就可以使用枚举类型
    // 枚举的每个数据都可以称为元素，每个元素都有自己的编号，默认从0开始，并依次递增加1, 也可以自定义编号
    enum Color {
        red = 100,
        green,
        blue
    }
    console.log(Color, 'color1') //{0: 'red', 1: 'green', 2: 'blue', red: 0, green: 1, blue: 2}
    const color: Color = Color.red
    const color1: string = Color[101]
    console.log(color, color1, 'color')

    enum Gender {
        男,
        女
    }
    console.log(Gender[0])


    // any 类型 赋值的变量可以任意转换类型
    // 当要一个数组中存储多个数据，又不确定数量跟类型
    let strAny: any = '123'
    strAny = 123
    console.log(strAny)

    let strAny1: any[] = [100,'哈哈哈哈哈哈哈哈哈哈', undefined, null, true]
    // strAny1 = [true]
    // console.log(strAny1[0].split('')) // 缺点：错误语法可以编译通过但是会报错
    console.log(strAny1[1].split(''))


    // void 类型： 当一个函数没有返回值时,表示没有返回任何类型
    function voidFun() {
        console.log(strAny1)
        return undefined
    }
    voidFun()
    console.log(voidFun())

    
})(),

// 引用类型
(() => {
    //  object: 表示非基本类型
    // 定义一个函数，参数是object类型，返回值也是object类型
    function getObj(obj: obje): object {
        console.log(obj)
        return {
            name: 'hahah',
            ago: 23
        }
    }
    type obje = {
        name: String,
        age?: Number
    }
    let obj: obje = {
        name: '123'
    }
    console.log(getObj(obj))
    // console.log(getObj(13)) //错误
    // console.log(getObj(new String(123))) 
    // console.log(getObj(String)) 

    /* 
        联合类(union types): 表示取值可以有多种类型
    */
   function getString(str: number | string): string {
       return str.toLocaleString()
    //    return Number(str)
    }
   console.log(typeof getString('123'))


   /* 
    类型断言：相当于类型转换，但是不进行特殊的数据检查和解构
        告诉编译器我知道我是什么类型，
            两种形式：尖括号语法和as语法
   */

    function getString1(str: number | string): number {
        console.log(<string>str, <number>str)
        if((<string>str).length) {
            return (str as string).length
            // return (<string>str).length
        } else {
            return str.toLocaleString().length
        }
    }
    console.log(getString1('123'))
         
    // 类型推断：在没有对变量明确指定一个类型时赋值，会推测出变量类型
    let str11 // 定义了一个变量没有赋值，推测类型为any
    str11 = 123
    str11 = '232'
    console.log(str11)

    let str12 = 123 // 推测类型为number
    // str12 = '123'
    console.log(str12)
})()