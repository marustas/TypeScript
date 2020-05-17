function function1(a: string, b: number): boolean {
    return a.length > b.toString().length
}

class Class1 {
    a: boolean
    b: string

    constructor(a: boolean, b: string) {
        this.a = a
        this.b = b
    }
}

type A1 = typeof function1
type B1 = typeof Class1

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
type C1 = Parameters<A1>
type D1 = MyParameters<A1>

type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never
type E1 = ConstructorParameters<B1>
type F1 = MyConstructorParameters<B1>

type MyRetyrnType<T extends (...args: any) => any> = T extends (...args: any) => infer P ? P : any
type G = ReturnType<A1>
type H = MyRetyrnType<A1>

type MyInstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer P ? P : any
type I = InstanceType<B1>
type J = MyInstanceType<B1>