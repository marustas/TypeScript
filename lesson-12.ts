let a2: number | null | undefined = null
a2 = undefined
a2 = 50

let b2: number = a2 ?? 100//Еслт значение null или undefineda то возвращается значение справа если же отличное от них то значение слева
console.log(b)

// function sum(a: number, b: number, c?: (d: number) => void): number {
//     const d: number = a + b

//     c?.(d) Если слева стоит значение не null или  undefined то выполлняется опирация справа

//     return d
// }

function sum(a: ({ cost: number } | null | undefined)[]): number {
    let x: number = 0
    for (const b of a) {
        d += b?.cost ?? 0
    }
    return d
}
// let result: number= sum(10,20)
// let result: number= sum(10,20,d=> console.log('Answer: ${d}'))

let result: number = sum([
    null,
    { cost: 10 },
    undefined,
    null,
    { cost: 20 },
    undefined,
    null,
    { cost: 30 },
    undefined
])

console.log(result)