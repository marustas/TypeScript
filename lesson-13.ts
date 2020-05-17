interface Product {
    name: string
    weight?: number
}

function CalcTotalWeight(listProdict: Product[]) {
    let totalWeight: number = 0
    for (const product of listProdict) {
        totalWeight += product.weight!
    }
    return totalWeight;
}

const TotalWeight = CalcTotalWeight([
    { name: 'Product1', weight: 2 },
    { name: 'Product2', weight: 3 }

])

let number1: number | null | undefined = null
setTimeout(() => {
    number1 = 10
}, 500)

setTimeout(() => {

    const number2: number = number1!
    console.log(number2)
}, 1000)

let text: string
console.log(text!)//Говорим соо точ чо слева от знака это не null или undefined

class FrontendDeveoloper {
    isCreateRestApi: boolean = false
}

class BackendDeveloper {
    isCreateRestApi: boolean = true

    CreateRestApi() { }

}

function isBackendDeveloper(developer: any): developer is BackendDeveloper {
    return developer.isCreateRestApi
}

function WriteCode(developer: FrontendDeveoloper | BackendDeveloper) {
    //     if (developer.isCreateRestApi){
    // developer.isCreateRestApi
    //     }
    if (isBackendDeveloper(developer)) {
        developer.CreateRestApi()
    }
}