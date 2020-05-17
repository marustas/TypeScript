type Vector3 = { x: number, y: number, z: number }
type Vector2 = Pick<Vector3, 'x' | 'y'>
type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
type Vector1 = MyPick<Vector3, 'x'>

type a = string | number | boolean
type b = string & number

type MyExtract<T, U> = T extends U ? T : never
type c = Extract<a,b >
type D = Extract<a, b>

type MyExclude<U, T> = T extends U ? T : never
type E = Exclude<a, b>
type F = MyExclude<a, b>

type Person0 = { name: string, age: number, weight: number, height: number }
type Person5 = Omit<Person0, 'weight' | 'height'>
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
type Person4 = MyOmit<Person0, 'weight' | 'height'>