abstract class ComputerFile {
    abstract name: string
    abstract set size(value: number)
    abstract get size(): number
}
class TextFile extends ComputerFile {
    name: string
    size: number

    constructor(name: string, size: number) {
        super()
        this.name = name
        this.size = size
    }
}

namespace Photos {
    export class JPEG { }
    export class PNG { }
}
console.log('Number.MAX_VALUE', Number.MAX_SAFE_INTEGER)
console.log('Number.MAX_SAFE_INTEGER + 2', Number.MAX_SAFE_INTEGER + 2)
console.log('9999999999999999', 9999999999999999)

const a: bigint = 10n;
const b: bigint = BigInt(10)

console.log('Number.MAX_SAFE_INTEGER + 2', BigInt(Number.MAX_SAFE_INTEGER) + 2n)
console.log('9999999999999999', 9999999999999999n)
