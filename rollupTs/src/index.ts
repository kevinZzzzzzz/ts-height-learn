// 定义一个类型， 如果是数组类型，就返回数组元素的类型，否则就传入什么类型就返回什么类型
// type TYPE<T> = T extends Array<any> ? T[number] : T
type TYPE<T> = T extends Array<infer U> ? U : T
type AA = TYPE<(string | number | Symbol | boolean)[]>
type BB = TYPE<boolean>

let aa:AA = 21
// console.log(aa)
let bb:BB = false

// infer妙用 提取元素的妙用
type Arr = ['a', 'b', 'c']
// type First<T extends any[]> = T extends [infer one, ...any[], infer last] ? Rest : []
type First<T extends any[]> = T extends [...infer Rest, infer last] ? Rest : []
type a1 = First<Arr>
let arr2: Arr = ['a', 'b', 'c']
let aa1: a1 = ['a', 'b']

// infer妙用 递归反转
type Arr3 = [1,2,3,4]
type ReverArr<T extends any[]> = T extends [infer First, ...infer Rest] ? [...ReverArr<Rest>, First] : T
type Arr4 = ReverArr<Arr3>
let arr3: Arr3 = [1,2,3,4]
let arr4: ReverArr<Arr3> = [4,3,2,1]

type StringToNumber<S extends string> = S extends `${infer Num extends number}` ? Num : never;
type A1 = StringToNumber<''>; // => never
type B1 = StringToNumber<'1'>; // => 1
type C1 = StringToNumber<'1.2'>; // => 1.2

type Count<
  Nums extends readonly number[],
  Num extends number,
  Result extends readonly unknown[] = [],
> = Nums extends [infer First, ...infer Rest extends readonly number[]]
  ? First extends Num
    ? Count<Rest, Num, [...Result, unknown]>
    : Count<Rest, Num, Result>
  : Result['length'];

type X = Count<[1, 2, 2, 3], 2>; // => type X = 2;
declare function PromiseAll<T extends readonly any[]>(values: T): Promise<GetReturn<T>>;

type GetReturn<T extends readonly any[]> = T extends readonly [infer First, ...infer Rest]
  ? [Awaited<First>, ...GetReturn<Rest>]
  : T extends []
    ? []
    : T extends Array<infer E>
      ? Array<Awaited<E>>
      : [];
const R = PromiseAll([1, 2, 3]); // const R: Promise<number[]>

// 获取类型
type ID = number[]
type INAME = string[]
type Unpacked<T> = T extends INAME ? string : T extends ID ? number : T
type nameType = Unpacked<INAME>
type nameType1 = Unpacked<ID>

type ElementOf<T> = T extends Array<infer E> ? E : T
type res = ElementOf<string[]>
type res1 = ElementOf<ID>
type res2 = ElementOf<boolean>
type res3 = ElementOf<[string, number]>

type Foo<T> = T extends {a: infer U; b: infer U} ? U : never
type T11 = Foo<{a: string; b: number}>