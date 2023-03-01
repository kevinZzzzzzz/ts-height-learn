/* 
type Partial<T> = {
  [P in keyof T]?: T[P]
} 
*/
type Person1 = {
  name: string,
  age: number
}
type p = Partial<Person1>
/* 
  type p = {
      name?: string | undefined;
      age?: number | undefined;
  }
*/

/* type Pick<T, K extends keyof T>  = {
  [P in K]: T[P]
} */
type Person2 = {
  name: string,
  age: number,
  text: string,
  address: string
}
type A = Pick<Person2, keyof Person2>
     