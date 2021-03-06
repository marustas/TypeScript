namespace Utilis {
    export function log(text: string, colour: string): void
    export function log(text: string, colour: string, fontSize: number): void
    export function log(text: string, colour: string, fontSize?: number) {
        if (fontSize) {
            console.log(`%c${text}`, `colour:${colour}; fontSize:${fontSize}`)
        } else {
            console.log(`%c${text}`, `colour:${colour}`)

        }
    }

    log('Text inside the Utilis', '#d9534f', 40)
}

Utilis.log('Text outside the Utiis', '#d9534f')

namespace Animals {
    export abstract class Animal {
        protected name: string

        constructor(name: string) {
            this.name = name
        }

        abstract say(): void

    }
    export namespace DomesticAnimals {
        export class cat extends Animal {
            say() {
                Utilis.log(`${this.name}:miay`, '#96ceb4', 20)
            }
        }
        export class dog extends Animal {
            say() {
                Utilis.log(`${this.name}:waff`, '#ffead', 50)
            }
        }
    }
}
namespace Animals {
    export class Tiger extends Animals.Animal {
        private text: string
        #text: string
        constructor(name: string, text: string) {
            super(name)
            this.text = text
            this.#text = text
        }
        say() {
            Utilis.log(`${this.name}: ${this.text}, ${this.#text}`, `#fffad60`, 60)
        }
    }
}
const tiger = new Animals.Tiger('Tigran', 'rroaarr')
tiger.say()
// console.log(tiger.text)
