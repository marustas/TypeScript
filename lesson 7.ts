
// type myArray<T> = T[]
// const arr: myArray<string> = ['Hello', 'TypeScipt']

// function echo<T>(x: T) {
//     return x
// }
// const echo =<T>(x:T):T=>{
//     return x
// }
// const echo = <T>(x: T) => <T>(x: T): T => {
//     return x
// }
// const result = echo<string>('Hello TypeScipt')
// class List<T>{
//     elements: T[] = []
//     add(element: T) {
//         this.elements.push(element)
//     }
// }
// const list = new List<string>()
// list.add('Hello')
// list.add('TypeScript')
interface IList<T> {
    elements: T[],
    add(element: T): void
}
class List implements IList<string>{
    elements: string[] = []
    add(element: string): void {
        this.elements.push(element)
    }
}

// type A<T> = T extends string ? string : never
// type B = A<string>
// type C = A<'Hello'>
// type D = A<number>

// function printName<T extends { name: string }> (person: T) {
//     console.log(person.name)
// }

interface Iname {
    name: string
}

function printName<T extends { name: string }>(person: T) {
    console.log(person.name)
}

printName({ name: 'Igor', age: 27 })

// interface A{
// a: string,
// b: number,
// c: boolean
// }
// type B = keyof A

function getProperty<ObjectType, KeyType extends keyof ObjectType>(object: ObjectType, key: KeyType) {
    return object[key]

}

// const arr = [1, 'Hello', false]

// type A<T> = T extends (infer U)[] ? U : never
// type B = typeof arr
// type C = A<B>
const person = { name: 'Igor', age: 25 }

type A<T> = T extends {
    [key: string]: infer U
} ? U : never

type B = typeof person
type C = A<B>

class cat {
    say(): string {
        return 'meaw'
    }
}

class dog {
    say(): string {
        return 'auf'
    }
}

interface IClass<T> {
    new(): T
}

function createObject<T>(c: IClass<T>): T {
    return new c()
}

const pet = createObject(cat)