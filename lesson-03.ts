//Преобразование типов переменных
let c: unknown = 1;
let d: number = <number>c;
let f: any = 'Hello'

//Пересечение типов данных
type N = { a: string } & { b: number }
let n: N = { a: '', b: 1 }
//Объединение типпов данных
type M = { a: string } | { b: string }
let m: M = { a: 'Hello' }
m = { b: 'Hello' }
m = { b: 'Hello', a: 'Hello' }
//Необязательные свойства
type O = { a: string, b?: number };
let o: O = { a: 'Hello' }
o = { a: 'Hello', b: 1 }