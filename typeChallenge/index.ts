/* 
  实现Pick
    题目描述
    实现 TS 内置的 Pick<T, K>，但不可以使用它。
    从类型 T 中选择出属性 K，构造成一个新的类型。
*/
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type TodoPreview = MyPick<Todo, 'title' | 'completed'>;
// type TodoPreview = Pick<Todo, 'title' | 'completed'>;
// type TodoPreview = MyPick<Todo, 'title' | 'completed' | 'a'>; // 类型 "{ title: string; completed: false; }" 中缺少属性 "a"，但类型 "TodoPreview" 中需要该属性

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  // description: '123' // 对象字面量只能指定已知属性，并且“description”不在类型“TodoPreview”中。
};
//////////////////////////////////////////////////////
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

/* 
  实现Readonly
    题目描述
    不要使用内置的 Readonly<T>，自己实现一个。
    该 Readonly 会接收一个 泛型参数，并返回一个完全一样的类型，只是所有属性都会被 readonly 所修饰。
    也就是不可以再对该对象的属性赋值。
*/
interface Todo1 {
  title: string;
  description: string;
}

const todo1: MyReadonly<Todo1> = {
  title: 'Hey',
  description: 'foobar',
};

todo1.title = 'Hello'; // Error: cannot reassign a readonly property 无法分配到 "title" ，因为它是只读属性。
todo1.description = 'barFoo'; // Error: cannot reassign a readonly property 无法分配到 "description" ，因为它是只读属性。

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

/* 
  元组转换为对象
    题目描述
    传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。
     as const => readonly
*/
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type result = TupleToObject<typeof tuple>;
type TupleToObject<T extends readonly PropertyKey[]> = {
  [P in T[number]]: P
  // [P in keyof T]: T[P]
}

/* 
  第一个元素
    题目描述
      实现一个通用First<T>， 它接受一个数组T并返回它的第一个元素的类型。
*/
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
// type First<T extends any[]> = T extends [infer first, ...infer last] ? first : never;
type First<T extends any[]> = T['length'] extends 0 ? never : T[0];

/* 
  获取元组长度
    题目描述
      创建一个通用的Length，接受一个readonly的数组，返回这个数组的长度。
*/
type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT',
];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5

type Length<T extends any[]> = T['length']

/* 
  实现Exclude
    题目描述
      实现内置的 Exclude <T, U>类型，但不能直接使用它本身。
      1、联合类型，那么就会触发 ts 的分发特性
      2、只有泛型才会触发分发特性
*/
type Result = MyExclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'
type MyExclude<T, U> = T extends U ? never : T

type Example<T> = T extends string ? 1 : 2;
// 简单类型，不会分发，结果为 2
type Case2 = '1' | 1 extends string ? 1 : 2;
type Case3 = Example<'1' | 1>;