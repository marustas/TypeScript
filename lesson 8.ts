type Person1 = { name: string, age: number }
type Person2 = Partial<Person1>//Делает поля необязательными
type MyPartial<T> = { [P in keyof T]?: T[P] }
type Person3 = MyPartial<Person2>

type Animal1 = { name?: string, weight?: number }
type Animal2 = Required<Animal1>
type MyRequired<T> = { [P in keyof T]-?: T[P] }
type Animal3 = MyRequired<Animal2>

type Colour1 = string | undefined | null
type Colour2 = NonNullable<Colour1>
type MyNonNullable<T> = T extends null | undefined ? never : T
type Colour3 = MyNonNullable<Colour1>

type Dimensiones = { width: number, heigtht: number, length: number }
type Dimensiones2 = Record<'width' | 'Height' | 'length', number>
type MyRecord<K extends keyof any, T> = { [P in K]: T }
type Dimensiones3 = MyRecord<'width' | 'Height' | 'length', number>

type Article1 = { title: string, page: number }
type Article2 = Readonly<Article1>
type MyReadonly<T> = { readonly [P in keyof T]: T[P] }
type Article3 = MyReadonly<Article1>

const article1: Article1 = { title: 'State 1', page: 1 }
article1.title = 'State 10'

const article2: Article2 = { title: 'State 2', page: 2 }
// article2.title = 'State 10'

const article3: Article3 = { title: 'State 3', page: 3 }
// article3.title = 'State 10'

// const article4= { title: 'State 3', page: 3 } as const
const article4 = <const>{ title: 'State 4', page: 4 }

type Articles1 = Array<Article3>

type Articles2 = ReadonlyArray<Article3>

const articles1: Articles1 = [
    { title: 'State 1', page: 1 },
    { title: 'State 2', page: 2 },
    { title: 'State 3', page: 3 }
]

articles1.push({ title: 'State 4', page: 4 })

const articles2: Articles2 = [
    { title: 'State 1', page: 1 },
    { title: 'State 2', page: 2 },
    { title: 'State 3', page: 3 }
]

// articles2.push({ title: 'State 4', page: 4 })
const articles3 = [
    { title: 'State 1', page: 1 },
    { title: 'State 2', page: 2 },
    { title: 'State 3', page: 3 }
] as const
function f1(arr: ReadonlyArray<string>) {

}
function f2(arr: readonly string[]) {

}